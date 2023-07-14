import styles from "./page.module.css";
import ArticleItem from "../../components/ArticleItem";
import { getData } from "../../functions";

export default async function Page() {

  const articles = await getData("https://endeavor.org.br/wp-json/wp/v2/posts?categories=1309");

  return (
    <main className={styles.container}>
      {articles.map((article: any) => {
        return (
          <ArticleItem
            id={article.id}
            image={article.yoast_head_json.og_image[0].url}
            title={article.title.rendered}
            excerpt={article.excerpt.rendered}
            date={article.date}
            link={article.link}
          />
        );
      })}
    </main>
  );
}
