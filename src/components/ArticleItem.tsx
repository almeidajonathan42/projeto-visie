import styles from "./ArticleItem.module.css";
import BookmarkStar from "../components/BookmarkStar";
import ReadLater from "../components/ReadLater";
import Link from "next/link";
import { renderDate, handleToggleBookmark, handleToggleReadLater } from "@/functions";
import { prisma } from "@/db";

interface Props {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
  link: string;
}

export default async function ArticleItem(props: Props) {
  const date = new Date(props.date);

  const articleDBItem = await prisma.article.findFirst({
    where: { id: props.id.toString() },
  });

  return (
    <div className={styles.container}>
      <Link href={"/artigo?id=" + props.id}>
        <img
          src={props.image}
          className={styles.article_image}
          alt="data does not containg alt text"
        />
      </Link>
      <div className={styles.detail}>
        <Link href={"/artigo?id=" + props.id}>
          <p className={styles.title}> {props.title} </p>
        </Link>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: props.description }}
        ></div>
        <div className={styles.bottom}>
          <p className={styles.date}> {renderDate(date)} </p>
          <p> • </p>
          <BookmarkStar
            value={articleDBItem?.isBookmarked || false}
            toggleValue={handleToggleBookmark}
            articleId={props.id.toString()}
            size={20}
          />
          <p> • </p>
          <ReadLater
            value={articleDBItem?.isReadLater || false}
            toggleValue={handleToggleReadLater}
            articleId={props.id.toString()}
            size={20}
          />
        </div>
      </div>
    </div>
  );
}
