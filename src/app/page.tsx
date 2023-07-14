import styles from "./page.module.css";
import ArticleItem from "../components/ArticleItem";
import { getData } from "../functions";

export default async function PaginaInicial() {
  const articles = await getData("https://endeavor.org.br/wp-json/wp/v2/posts");

  return (
    <main className={styles.container}>
      {articles.map((article: any) => {
        return (
          <div key={article.id}>
            <ArticleItem
              id={article.id}
              image={article.yoast_head_json.og_image[0].url}
              title={article.title.rendered}
              description={article.excerpt.rendered}
              date={article.date}
              link={article.link}
            />
          </div>
        );
      })}
    </main>
  );
}
