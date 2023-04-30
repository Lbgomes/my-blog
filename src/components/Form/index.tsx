import * as S from "./styles";
import { ChangeEvent, useState } from "react";
import { createArticle as createArticleServices } from "@/services/articles";

const Form = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    setFile(selectedFile || null);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('author', author);
      formData.append('content', content);
      formData.append('subtitle', subtitle);
      formData.append('imagem', file as any);
  
      await createArticleServices(formData);
      alert('Artigo criado com sucesso!');
      setTitle('');
      setAuthor('');
      setContent('');
      setSubtitle('');
    } catch {
      alert('Não foi possível criar o artigo');
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
            
            required
            type="file"
            onChange={handleFileChange}
            placeholder="Subtítulo"
          />
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
