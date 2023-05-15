import styled, { css } from 'styled-components';

export const Container = styled.div`
    position: relative;
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
export const Title = styled.h1`
    font-family: 'montserrat', sans-serif;
    font-size: 18px;
    cursor: pointer;
    text-decoration: underline;
    `
    export const SubTitle = styled.h2`
    font-size: 14px;
    font-weight: 500;
`
interface ButtonProps {
    type: 'edit' | 'delete'
}

export const AdminContainer = styled.div`
    display: flex;
    position: absolute;
    right: 10px;
    top: -10px;
    gap: 5px;
`

export const Remove = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5365c;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    border: none;  
    font-size: 10px;
    cursor: pointer;
`

export const Edit = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e4672e;    
    width: 30px;    
    height: 30px;
    border-radius: 10px;
    border: none;  
    font-size: 10px;
    cursor: pointer;
`