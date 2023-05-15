import * as S from './styles'
import Image from 'next/image'
import { TbEdit, TbTrash } from 'react-icons/tb';
import { useRouter } from "next/router";
import Swal from 'sweetalert2';
import { deleteArticle } from '@/services/articles';

type ArticleCardProps = {
    id: string;
    title: string;
    subTitle: string;
    image: string;
    isAdmin?: boolean
    redirectToArticle: () => void | any;
    redirectToEditArticle?: () => void;
    removeArticle?: () => void;
}
export const ArticleCard = ({ redirectToArticle, removeArticle, redirectToEditArticle, isAdmin = false, title, subTitle, image, }: ArticleCardProps) => {

    return (
        <S.Container onClick={() => !isAdmin && redirectToArticle}>
            {isAdmin && (
                <S.AdminContainer>
                    <S.Edit onClick={redirectToEditArticle}><TbEdit size={16} /></S.Edit>
                    <S.Remove onClick={removeArticle}><TbTrash size={16} /></S.Remove>
                </S.AdminContainer>
            )}
            <Image fill alt="image" src={image} />
            <S.Title>{title}</S.Title>
            <S.SubTitle>{subTitle}</S.SubTitle>
        </S.Container>
    )
}