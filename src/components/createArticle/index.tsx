import * as S from "./styles";
import { useRouter } from "next/router";

export default function CreateArticle() {
  const router = useRouter();
  return (
    <S.Container onClick={() => router.push("/create")}>
      Criar artigo
    </S.Container>
  );
}
