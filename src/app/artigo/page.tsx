import { getData, renderDate } from "@/functions";
import BackButton from "../../components/BackButton";

export default async function Artigo(props: any) {
  const articleId = props.searchParams.id;

  const data = await getData(
    "https://endeavor.org.br/wp-json/wp/v2/posts?include=" + articleId
  );
  const article = data[0];

  return (
    <main>
      <BackButton />
      <h1>{article.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.excerpt.rendered }}></div>
      <p>{renderDate(new Date(article.date))}</p>
      <div dangerouslySetInnerHTML={{ __html: article.content.rendered }}></div>
    </main>
  );
}
