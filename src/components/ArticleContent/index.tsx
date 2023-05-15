import * as S from './styles'
import Image from 'next/image'
type ArticleProps = {
    title: string;
    date: string;
    author: string;
    content: string;
    imagem: string
}
const ArticleContent = ({title, date, author, content, imagem}: ArticleProps) => {
    return (
        <S.Container>
            <S.ImageContainer>
            <Image alt="imagem" fill src={imagem} />
            </S.ImageContainer>
            <S.Title>{title}</S.Title>
            <S.DataContainer>
             {/* <S.Data>{date}</S.Data> */}
                    <S.Data>{' '}{author}</S.Data> 
            </S.DataContainer>
            <S.Content dangerouslySetInnerHTML={{ __html: content }} />
        </S.Container>
    )
}

export default ArticleContent