import * as S from "./styles";
import { ChangeEvent, useEffect, useState } from "react";
import {
  createArticle as createArticleServices,
  editArticle,
  getArticle,
} from "@/services/articles";
import { useRouter } from "next/router";
import Image from "next/image";
import Article from "@/models/article";
const Form = ({}) => {
  const router = useRouter();
  const slug = router.query.slug as string;
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [articleSelected, setArticleSelected] = useState<Article>();
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    setFile(selectedFile || null);
  };
  const getArticleById = async () => {
    const articlesData = await getArticle(slug);
    if (articlesData) {
      setArticleSelected(articlesData)
      setTitle(articlesData.title);
      setAuthor(articlesData.author);
      setContent(articlesData.content);
      setImagePreview(articlesData.image);
      setSubtitle(articlesData.subtitle);
    }
  };

  useEffect(() => {
    if (slug) {
      getArticleById();
    }
  }, [slug]);
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (slug) {
      try {
        const formData = new FormData();
        console.log(articleSelected?.title !== title && formData.append("title", title))
        articleSelected?.title !== title && formData.append("title", title);
        articleSelected?.author !== author && formData.append("author", author);
        articleSelected?.content !== content && formData.append("content", content);
        articleSelected?.subtitle !== subtitle && formData.append("subtitle", subtitle);
        file && formData.append("imagem", file as any);

        await editArticle(slug, formData);
        alert("Artigo editado com sucesso!");
 
      } catch(error) {
        alert("Não foi possível editar o artigo");
      }
    } else {
      try {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("author", author);
        formData.append("content", content);
        formData.append("subtitle", subtitle);
        formData.append("imagem", file as any);

        await createArticleServices(formData);
        alert("Artigo criado com sucesso!");
        setTitle("");
        setAuthor("");
        setContent("");
        setSubtitle("");
      } catch {
        alert("Não foi possível criar o artigo");
      }
    }
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <label>
          Título:
          <input
            required
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título"
          />
        </label>
        <label>
          Autor:
          <input
            value={author}
            required
            type="text"
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Autor"
          />
        </label>
        <label>
          Conteúdo:
          <textarea
            value={content}
            required
            onChange={(e) => setContent(e.target.value)}
            placeholder="Conteúdo"
          />
        </label>
        <label>
          Imagem:
          <input
            required={!slug ? true : false}
            type="file"
            onChange={handleFileChange}
            placeholder="Subtítulo"
          />
          <S.ImageContainer>
            <Image src={imagePreview} fill alt="Imagem" />
          </S.ImageContainer>
        </label>
        <label>
          Subtítulo:
          <input
            required
            value={subtitle}
            type="text"
            onChange={(e) => setSubtitle(e.target.value)}
            placeholder="Subtítulo"
          />
        </label>
        <button type="submit">Criar</button>
      </S.Form>
    </S.Container>
  );
};

export default Form;
