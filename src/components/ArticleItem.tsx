"use client"

import styles from "./ArticleItem.module.css";

interface Props {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
  link: string;
}

function ArticleItem(props: Props) {
  const date = new Date(props.date);

  const renderDate = (date: Date) => {
    return (
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    );
  };

  return (
    <div className={styles.container}>
      <img src={props.image} alt="data does not containg alt text" />

      <div className={styles.detail}>
        <p className={styles.title}> {props.title} </p>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: props.description }}
        ></div>
        <p className={styles.date}> {renderDate(date)} </p>
      </div>
    </div>
  );
}

export default ArticleItem;
