import * as S from "./styles";
import { useEffect, useState } from "react";
import { getAllArticles } from "@/services/articles";
import { ArticleCard } from "../ArticleCard";
import { useRouter } from "next/router";
export const ArticlesList = () => {
  const [articles, setArticles] = useState<any>();
  console.log(articles);
  const router = useRouter();
  const redirectToArticle = (id: string, title: string) => {
    const route = `/${id}`;
    router.push(route);
  };
  const fetchArticles = async () => {
    const articlesData = await getAllArticles();
    if (articlesData) {
      setArticles(articlesData);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

const List = () => {
  return articles?.map((article: any) => (
    <ArticleCard
      key={article.id}
      image={article.image}
      title={article.title}
      subTitle={article.subtitle}
      click={() => redirectToArticle(article.id, article.title)}
    />
  ));
};

  return <S.Container>{articles ? <List /> : <p>Loading...</p>}</S.Container>;
};
