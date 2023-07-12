import styles from "./page.module.css";
import ArticleItem from "../components/ArticleItem";

async function getData() {
  const res = await fetch("https://endeavor.org.br/wp-json/wp/v2/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function PaginaInicial() {

  const articles = await getData();

  return (
    <main className={styles.container}>
      {articles.map((article: any) => {
        return (
          <ArticleItem
            id={article.id}
            image={article.yoast_head_json.og_image[0].url}
            title={article.title.rendered}
            description={article.excerpt.rendered}
            date={article.date}
            link={article.link}
          />
        );
      })}
    </main>
  );
}
