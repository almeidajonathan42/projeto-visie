import { prisma } from "@/db";
import { getData } from "@/functions";
import styles from "./page.module.css";
import NoteReadWrite from "../../components/NoteReadWrite";
import BackButton from "@/components/BackButton";

export default async function Page() {
  const articleDBItems = await prisma.article.findMany({
    where: {
      note: {
        not: "",
      },
    },
  });

  const articles = await Promise.all(
    articleDBItems.map(async (item) => {
      const data = await getData(
        "https://endeavor.org.br/wp-json/wp/v2/posts?include=" + item.id
      );
      return data[0];
    })
  );

  async function handleUpdateNote(articleId: string, note: string) {
    "use server";

    await prisma.article.update({
      where: { id: articleId },
      data: { note: note },
    });
  }

  async function handleDeleteNote(articleId: string) {
    "use server";

    await prisma.article.update({
      where: { id: articleId },
      data: { note: "" },
    });
  }

  return (
    <main className={styles.container}>
      {articles.length === 0 && (
        <div className={styles.emptyContent}>
          <p> Você ainda não criou nenhuma anotação :/ </p>
        </div>
      )}

      <div className={styles.content}>
        {articles.map((article: any, index: number) => {
          return (
            <div key={article.id} className={styles.article_note}>
              <h1> {article.title.rendered} </h1>
              <NoteReadWrite
                articleId={article.id.toString()}
                onSaveNote={handleUpdateNote}
                onDeteleNote={handleDeleteNote}
                existingNote={articleDBItems[index].note}
              />
            </div>
          );
        })}
      </div>
      <BackButton />
    </main>
  );
}
