import styled from "styled-components";

export const Barra = styled.nav`

  background-color:${({ theme }) => theme.background.card};
padding: 20px;

`;

export const Center = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
max-width: 1200;
background-color:${({ theme }) => theme.background.card};

  
`;
export const Justify = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

div{
    display: flex;
    flex-direction: row;
    gap: 30px;
 
}

`;
