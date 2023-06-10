import * as S from './styles'
import Image from 'next/image'
import { TbEdit, TbTrash } from 'react-icons/tb';
import { useRouter } from "next/router";

type ArticleCardProps = {
    id: string;
    title: string;
    subTitle: string;
    image: string;
    isAdmin?: boolean
    article: string;
    removeArticle?: () => void;
}
export const ArticleCard = ({ article, removeArticle, isAdmin = false, title, subTitle, image, }: ArticleCardProps) => {
   
  const router = useRouter();
   
    return (
        <S.Container onClick={() => router.push(`/${article}`)}>
            {isAdmin && (
                <S.AdminContainer>
                    <S.Edit onClick={() => router.push(`/edit-article/${article}`)}><TbEdit size={16} /></S.Edit>
                    <S.Remove onClick={removeArticle}><TbTrash size={16} /></S.Remove>
                </S.AdminContainer>
            )}
            <Image fill alt="image" src={image} />
            <S.Title>{title}</S.Title>
            <S.SubTitle>{subTitle}</S.SubTitle>
        </S.Container>
    )
}