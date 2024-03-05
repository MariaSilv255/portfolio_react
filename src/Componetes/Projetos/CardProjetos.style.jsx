import styled from "styled-components";

export const Contem = styled.div`
display:flex;
flex-direction: column;
width: 455px;
height: 630px;
gap: 15px;

`;
export const GroupCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:  space-between;
    align-items: center;
    padding-bottom: 30px;
    gap: 50px;
   
    @media (max-width: 1044px) { /* Defina a largura máxima para dispositivos móveis conforme necessário */
    justify-content: center;
  }
`;


