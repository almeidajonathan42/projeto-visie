import styles from "./page.module.css";
import ArticleItem from "../components/ArticleItem";
import Pagination from "../components/Pagination";
import Order from "../components/Order";
import { redirect } from "next/navigation";

const categories = [
  { id: "1309", name: "Desenvolvimento Pessoal" },
  { id: "1288", name: "Estratégia e Gestão" },
  { id: "1317", name: "Gestão de Pessoas" },
];

let currentPage: number = 1;
let order: number = 0;

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


  async function handleForwardPagination() {
    "use server"

    currentPage++;
  }

  async function handleBackwardsPagination() {
    "use server"

    currentPage--;
  }

  async function handleOrderChange() {
    "use server"

    if (order == 2) {
      order = 0;
    } else if (order == 0) {
      order = 1;
    } else {
      order = 2;
    }


  }

  function orderArticles(articles: any) {
    if (order == 2) {
      return articles.sort((a: any, b: any) => {
        return a.content.rendered.length - b.content.rendered.length;
      });
    } else if (order == 1) {
      return articles.sort((a: any, b: any) => {
        return b.content.rendered.length - a.content.rendered.length;
      })
    } else {
      return articles;
    }
  }

  return (
    <main className={styles.container}>
      <Order 
        order={order}
        onOrderChange={handleOrderChange}
      />

      {orderArticles(articles).map((article: any) => {
        return (
          <div key={article.id}>
            <ArticleItem
              id={article.id}
              image={article.default_img[0]}
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
