import * as S from './styles'
import { useRouter } from 'next/router'

export const Header = () => {
    const router = useRouter()
    return (
        <S.Container>
               <S.Title onClick={() => router.push('/')}>Artigos Diários do Murilo</S.Title>
               <S.SubTitle>Bem vindo para o blog favorito dos Desenvolvedores</S.SubTitle>
        </S.Container>
    )
}