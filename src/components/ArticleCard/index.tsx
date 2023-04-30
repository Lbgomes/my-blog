import * as S from './styles'
import Image from 'next/image'

type ArticleCardProps = {
    title: string;
    subTitle: string;
    image: string;
    click: () => void;
}
export const ArticleCard = ({title, subTitle, image, click}: ArticleCardProps) => {
    return (
        <S.Container onClick={click}>
            <Image fill alt="image" src={image} />
            <S.Title>{title}</S.Title>
            <S.SubTitle>{subTitle}</S.SubTitle>
        </S.Container>
    )
}