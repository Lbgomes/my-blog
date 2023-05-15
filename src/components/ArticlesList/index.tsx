import * as S from "./styles";
import { useEffect, useState } from "react";
import { deleteArticle, getAllArticles } from "@/services/articles";
import { ArticleCard } from "../ArticleCard";
import { useRouter } from "next/router";
import Swal from 'sweetalert2'

export const ArticlesList = ({isAdmin}: {isAdmin?: boolean}) => {
  const [articles, setArticles] = useState<any>();
  const router = useRouter();

  const fetchArticles = async () => {
    const articlesData = await getAllArticles();
    if (articlesData) {
      setArticles(articlesData);
    }
  };
  const redirectToArticle = (id: string) => {
    const route = `/${id}`;
    router.push(route);
};
const redirectToEditArticle = (id: string) => {
    const route = `/edit-article/${id}`;
    router.push(route);
};

const removeArticle = (id: string) => {
    Swal.fire({
        title: 'Você tem certeza?',
        text: "Essa ação não poderá ser desfeita!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, deletar!'
    }).then((result) => {
        if (result.isConfirmed) {
            try{
                deleteArticle(id);
                fetchArticles();
                Swal.fire(
                    'Deletado!',
                    'Seu artigo foi deletado.',
                    'success'
                )
            }catch {
                Swal.fire(
                    'Erro!',
                    'Não foi possível deletar o artigo.',
                    'error'
                )
            }

        }
    })
}

  useEffect(() => {
    fetchArticles();
  }, []);

const List = () => {
  return articles?.map((article: any) => (
    <ArticleCard
      redirectToArticle={ () => redirectToArticle(article.id)}
      redirectToEditArticle={() => redirectToEditArticle(article.id)}
      removeArticle={() => removeArticle(article.id)}
      isAdmin={isAdmin}
      id={article.id}
      key={article.id}
      image={article.image}
      title={article.title}
      subTitle={article.subtitle}
    />
  ));
};

  return <S.Container>{articles ? <List /> : <p>Loading...</p>}</S.Container>;
};
