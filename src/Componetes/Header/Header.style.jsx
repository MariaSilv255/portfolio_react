import styled from "styled-components";



export const Imagem = styled.div`
 width: 100%;
 position: relative;
 
 
 @media screen and (min-width:768px) and (max-width: 1230px) {
   img {
      width: 100%
    }
 }
 @media screen and (max-width:767px) {
   img {
      width: 100%;
    }
 }

 
`;

export const Conteudo = styled.div`
   display: flex;
   flex-direction: column;
   color: ${({theme}) => theme.texto.nome};
   gap: 15px;
   
`;

export const Contem = styled.div`
 display: flex;

`;