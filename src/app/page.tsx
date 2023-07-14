import styles from "./page.module.css";
import ArticleItem from "../components/ArticleItem";
import Pagination from "../components/Pagination";
import { redirect } from "next/navigation";

const categories = [
  { id: "1309", name: "Desenvolvimento Pessoal" },
  { id: "1288", name: "Estratégia e Gestão" },
  { id: "1317", name: "Gestão de Pessoas" },
];

let currentPage = 1;

export default async function PaginaInicial(props: any) {
  if (props.searchParams.categories == null) {
    redirect("/?categories=1309,1288,1317");
  }

  const categories = props.searchParams.categories;
  const url =
    "https://endeavor.org.br/wp-json/wp/v2/posts?categories=" + categories + "&page=" + currentPage;
  const res = await fetch(url);
  const articles = await res.json();
  const pageTotal = res.headers.get("X-WP-TotalPages") || "1";

  async function handleForwardPagination(arg: any) {
    "use server"

    currentPage++;
  }

  async function handleBackwardsPagination(arg: any) {
    "use server"

    currentPage--;
  }

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

      <Pagination
        currentPage={currentPage}
        pageTotal={parseInt(pageTotal)}
        onForward={handleForwardPagination}
        onBackwards={handleBackwardsPagination}
      />
    </main>
  );
}
