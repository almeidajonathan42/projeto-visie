import { getData, renderDate } from "@/functions";
import BackButton from "../../components/BackButton";
import BookmarkStar from "../../components/BookmarkStar";
import ReadLater from "../../components/ReadLater";
import Notes from "../../components/Notes";
import styles from "./page.module.css";

export default async function Artigo(props: any) {
  const articleId = props.searchParams.id;

  const data = await getData(
    "https://endeavor.org.br/wp-json/wp/v2/posts?include=" + articleId
  );
  const article = data[0];

  return (
    <main className={styles.container}>
      <BackButton />

      <div className={styles.article}>
        <h1 className={styles.title}> {article.title.rendered} </h1>
        <div
          className={styles.excerpt}
          dangerouslySetInnerHTML={{ __html: article.excerpt.rendered }}
        ></div>
        <div className={styles.bottom}>
          <p className={styles.date}> {renderDate(new Date(article.date))} </p>
          <p> • </p>
          <BookmarkStar articleId={articleId} size={20} />
          <p> • </p>
          <ReadLater articleId={articleId} size={20} />
        </div>
        <div
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: article.content.rendered }}
        ></div>
      </div>
      <Notes />
    </main>
  );
}
