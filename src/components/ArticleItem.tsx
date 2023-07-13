"use client";

import styles from "./ArticleItem.module.css";
import BookmarkStar from "../components/BookmarkStar";
import ReadLater from "../components/ReadLater";

interface Props {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
  link: string;
}

export default function ArticleItem(props: Props) {
  const date = new Date(props.date);

  const renderDate = (date: Date) => {
    return (
      ("0" + date.getDate()).slice(-2) +
      "/" +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      "/" +
      date.getFullYear()
    );
  };

  return (
    <div className={styles.container}>
      <img
        src={props.image}
        className={styles.article_image}
        alt="data does not containg alt text"
      />

      <div className={styles.detail}>
        <p className={styles.title}> {props.title} </p>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: props.description }}
        ></div>
        <div className={styles.bottom}>
          <p className={styles.date}> {renderDate(date)} </p>
          <p> • </p>
          <BookmarkStar articleId={props.id} size={20} />
          <p> • </p>
          <ReadLater articleId={props.id} size={20} />
        </div>
      </div>
    </div>
  );
}
