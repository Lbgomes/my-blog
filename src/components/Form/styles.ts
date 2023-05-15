import styled from "styled-components";

export const Container = styled.div`
    background-color: #202020;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
`;

export const Form = styled.form`
  margin: 50px 0; 
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  min-width: 300px;
  font-family: "montserrat", sans-serif !important;
  place-content: center;
  label {
    display: flex;
    flex-direction: column;
    gap: 3px;
    width: 450px;
    color: white;
  }
  textarea {
    height: 300px;
    border-radius: 6px;
    padding: 12px;
  }
  input {
    height: 35px;
    border-radius: 6px;
    padding: 12px;
  }
  img {
    max-width: 450px;
  }
  
  button {
    height: 30px;
    background: #b73737;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 14px;
    font-family: "montserrat", sans-serif !important;
    width: 450px;
    font-weight: 500;
    cursor: pointer;
    transition: 0.3s;
    :hover {
      background: #a13030;
    }
  }
`;


export const ImageContainer = styled.div`
width: 100%;
    height: 250px;
    position: relative;
`