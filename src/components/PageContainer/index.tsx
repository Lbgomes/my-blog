import * as S from "./styles";

type PageContainerProps = {
  children: React.ReactNode;
};
export const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <S.Background>
      <S.Container>{children}</S.Container>
    </S.Background>
  );
};
