import styled from "styled-components";


export const Container = styled.div`
  margin: 0 auto;
  @media(width < 1200px){
    width: 90%;
    padding: 2rem 0;

  }
  @media(width > 1200px){
    padding: 3rem 5rem;
  }
`;
