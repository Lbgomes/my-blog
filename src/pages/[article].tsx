import { getArticle } from "@/services/articles";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Header } from "@/components/Header";
import { PageContainer } from "@/components/PageContainer";
import ArticleContent from "@/components/ArticleContent";
import Head from "next/head";
const Article = () => {
  const [articles, setArticles] = useState<any>();
  const Router = useRouter();
  const id = Router.query.article?.toString();
  const fetchArticles = async () => {
    if (id) {
      const articlesData = await getArticle(id);
      if (articlesData) {
        setArticles(articlesData);
      }
    }
  };
  useEffect(() => {
    fetchArticles();
  }, [id]);

  return (
    <>
    <Head>
      <title>{articles?.title}</title>
    </Head>
      <PageContainer>
        <Header />
        {articles && (
          <ArticleContent
            imagem={articles.image}
            title={articles.title}
            date={articles.creationDate}
            author={articles.author}
            content={articles.content}
          />
        )}
      </PageContainer>
    </>
  );
};

export default Article;
