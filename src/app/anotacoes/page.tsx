import { prisma } from "@/db";
import { getData } from "@/functions";
import styles from "./page.module.css";
import NoteWrite from "../../components/NoteWrite";

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

  console.log(articleDBItems);

  async function handleUpdateNote(articleId: string, note: string) {
    "use server";

    await prisma.article.update({
      where: { id: articleId },
      data: { note: note },
    });
  }

  return (
    <main className={styles.container}>
      {articles.map((article: any, index: number) => {
        return (
          <>
            <h1> {article.title.rendered} </h1>
            <p> {articleDBItems[index].note} </p>
            <NoteWrite handleSaveNote={handleUpdateNote} existingNote={articleDBItems[index].note} />
          </>
        );
      })}
    </main>
  );
}
