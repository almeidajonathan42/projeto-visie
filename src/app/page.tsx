import styles from "./page.module.css";
import ArticleItem from "../components/ArticleItem";
import Pagination from "../components/Pagination";
import { getData } from "../functions";

export default async function PaginaInicial() {
  const articles = await getData("https://endeavor.org.br/wp-json/wp/v2/posts");

  const pageTotal = await (
    await fetch("https://endeavor.org.br/wp-json/wp/v2/posts")
  ).headers.get("X-WP-TotalPages") || "1";
  const currentPage = 1;

  return (
    <main className={styles.container}>
      {articles.map((article: any) => {
        return (
          <div key={article.id}>
            <ArticleItem
              id={article.id}
              image={article.yoast_head_json.og_image[0].url}
              title={article.title.rendered}
              excerpt={article.excerpt.rendered}
              date={article.date}
              link={article.link}
            />
          </div>
        );
      })}

      <Pagination currentPage={currentPage} pageTotal={parseInt(pageTotal)} />
    </main>
  );
}
