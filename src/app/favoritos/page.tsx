import styles from "./page.module.css";
import { prisma } from "@/db";
import { getData } from "@/functions";
import ArticleItem from "../../components/ArticleItem";
import BackButton from "@/components/BackButton";

export default async function Page() {
  const articleDBItems = await prisma.article.findMany({
    where: { isBookmarked: true },
  });

  const articles = await Promise.all(
    articleDBItems.map(async (item) => {
      const data = await getData(
        "https://endeavor.org.br/wp-json/wp/v2/posts?include=" + item.id
      );
      return data[0];
    })
  );

  return (
    <main className={styles.container}>
      {articles.length === 0 && (
        <div className={styles.emptyContent}>
          <p> Você ainda não favoritou nenhum artigo :/ </p>
        </div>
      )}

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

      <BackButton />
    </main>
  );
}
