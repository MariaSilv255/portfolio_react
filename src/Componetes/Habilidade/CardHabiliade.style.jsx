import styled from "styled-components";

export const Contem = styled.div`

display: flex;
justify-content  : space-between ;
flex-direction: row;
  
`;

export const Card = styled.div`
  
  background-color: ${({theme}) => theme.background.card};
  border-bottom: 3px solid #8258e6;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 120px;
  height: 150px;
`;

export const GroupHabilidade = styled.div`

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

export const Icon = styled.div`
color: ${({theme}) => theme.texto.nome};
background-color: ${({theme}) => theme.background.card};
`;