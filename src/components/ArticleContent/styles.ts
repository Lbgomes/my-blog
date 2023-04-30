import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
font-family: 'montserrat', sans-serif;
color: #fff;
`

export const Title = styled.h1`
`
export const ImageContainer = styled.div`
    width: 100%;
    height: 150px;
>img {
    position: initial !important;
    height: 100%;
    width: 100%;
    inset: 0px;
    color: transparent;
    object-fit: cover;
}
`
export const DataContainer = styled.div` 
display: flex;
gap: 5px;
`

export const Data = styled.h3`
font-size: 14px;
font-weight: 500;
color: #8b8b8b;
margin-bottom: 30px;
`

export const Content = styled.p`
font-size: 18px;
`



