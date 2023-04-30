import httpClient from "@/http-client"
import Articles from "@/models/articles"
import createArticleModel from "@/models/createArticle"
import axios, { AxiosResponse } from "axios"

export const getAllArticles = async (): Promise<Articles> => {
    const article = (
      await axios.get('http://localhost:3030/articles')
    ).data
    return article.data
}

export const getArticle = async (id: string): Promise<Articles> => {
  const article = (
    await axios.get(`http://localhost:3030/articles/${id}`)
  ).data
  return article.data
}

export const createArticle = async (formData: FormData): Promise<createArticleModel> => {
  const article: AxiosResponse<createArticleModel> = await axios.post(
    'http://localhost:3030/articles',
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );

  return article.data;
};