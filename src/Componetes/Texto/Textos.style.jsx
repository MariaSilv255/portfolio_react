import styled from "styled-components";

export const Nome = styled.h1`
    color: ${({ theme }) => theme.texto.nome};
    font-size: ${({theme}) => theme.tamanho.textoNome};
    line-height: 70px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;

`;
export const Titulo = styled.h1`
    display: flex;
    justify-content: ${(prop)=>prop.justificado?prop.justificado:'flex-start'};
    color: ${({ theme }) => theme.texto.titulo};
    font-size: ${({theme}) => theme.tamanho.textoTitulo};
    line-height: 30px;
    font-weight: 600;
    padding: 20px 0px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
`;

export const Titulo2 = styled.h3`
    color: ${({ theme }) => theme.texto.nome};
    font-size: ${({theme}) => theme.tamanho.textoSub};
    line-height: 32px;
    max-width: ${(prop) => prop.tamanho?prop.tamanho:'auto'};
    text-align:justify;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
`;

    export const TituloProjeto = styled.h1`
    display: flex;
    justify-content: ${(prop)=>prop.justificado?prop.justificado:'flex-start'};
    color: ${({ theme }) => theme.texto.titulo};
    font-size: ${({theme}) => theme.tamanho.textoTitulo};
    line-height: 30px;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    font-weight: 500;

`;

export const Descricao = styled.h1`
    color: ${({ theme }) => theme.texto.descricao};
    font-size: ${({theme}) => theme.tamanho.textoDescricao};
    line-height: 32px;
    max-width: ${(prop) => prop.tamanho?prop.tamanho:'auto'};
    text-align:justify;
    font-family: 'Inter', sans-serif;
    font-weight: 300;
`;


export const TituloNAV = styled.h3`
    color: ${({ theme }) => theme.texto.titulo};
    font-size: ${({theme}) => theme.tamanho.textoSub};
    line-height: 32px;
    max-width: ${(prop) => prop.tamanho?prop.tamanho:'auto'};
    text-align:justify;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    
`;