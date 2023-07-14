import { getData, renderDate, handleToggleBookmark, handleToggleReadLater } from "@/functions";
import BackButton from "../../components/BackButton";
import BookmarkStar from "../../components/BookmarkStar";
import ReadLater from "../../components/ReadLater";
import NoteWrite from "../../components/NoteWrite";
import styles from "./page.module.css";
import { prisma } from "@/db";


async function getNote(articleId: string) {
  const article = await prisma.article.findFirst({
    where: { id: articleId }
  });

  return article?.note;
}

export default async function Page(props: any) {
  const articleId = props.searchParams.id;

  const data = await getData(
    "https://endeavor.org.br/wp-json/wp/v2/posts?include=" + articleId
  );
  const article = data[0];

  const note = await getNote(articleId);
  const articleDBItem = await prisma.article.findFirst({
    where: { id: articleId }
  });

  async function handleSaveNote(note: string) {
    "use server";

    if (note.length > 0) {
      await prisma.article.upsert({
        where: { id: articleId },
        update: { note: note },
        create: {
          id: articleId,
          isBookmarked: false,
          isReadLater: false,
          note: note,
        },
      });
    }
  }

  return (
    <main className={styles.container}>
      <div className={styles.article}>
        <h1 className={styles.title}> {article.title.rendered} </h1>
        <div
          className={styles.excerpt}
          dangerouslySetInnerHTML={{ __html: article.excerpt.rendered }}
        ></div>
        <div className={styles.bottom}>
          <p className={styles.date}> {renderDate(new Date(article.date))} </p>
          <p> • </p>
          <BookmarkStar
            value={articleDBItem?.isBookmarked || false}
            toggleValue={handleToggleBookmark}
            articleId={articleId}
            size={20}
          />
          <p> • </p>
          <ReadLater
            value={articleDBItem?.isReadLater || false}
            toggleValue={handleToggleReadLater}
            articleId={articleId}
            size={20}
          />
        </div>
        <div
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: article.content.rendered }}
        ></div>
      </div>

      <NoteWrite handleSaveNote={handleSaveNote} existingNote={note || ""} />

      <BackButton />
    </main>
  );
}
