import Styled from 'styled-components';

export const Container = Styled.div`
    width: 100%;
    color: #fff;
    cursor: pointer;
    @media(min-width: 1150px){
    max-width: 550px;
        
    }
    @media(max-width: 1150px){
        max-width: auto;
        width: 90vw;
    }
> img {
    position: initial !important;
    height: 250px !important;
    object-fit: cover;
}
    hover: {
        transform: scale(1.1);
    }
`
export const Title = Styled.h1`
font-family: 'montserrat', sans-serif;
font-size: 18px;
cursor: pointer;
text-decoration: underline;
`
export const SubTitle = Styled.h2`
font-size: 14px;
font-weight: 500;
`
