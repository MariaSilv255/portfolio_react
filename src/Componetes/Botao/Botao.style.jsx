import styled from "styled-components";

export const Botao = styled.a`
	background: linear-gradient(${({ theme }) => theme.background.fundo},${({ theme }) => theme.background.fundo}) padding-box, linear-gradient(to right, #9358F7, #10D7E2) border-box;
    border-radius: 10px;
	border: 3px solid transparent;
	position: relative;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2em;
	font-weight: bold;
	text-decoration: none;
	color: ${({ theme }) => theme.texto.titulo};
	padding: 0.5em 1.5em;
	cursor: pointer;
    width: 150px; 
	font-family: 'Inter', sans-serif;
    font-weight: 600;

    
`;

export const Botao2 = styled.a`
 	background: linear-gradient(${({ theme }) => theme.background.fundo},${({ theme }) => theme.background.fundo}) padding-box, linear-gradient(to right, #D24074, #6518B4) border-box;
    border-radius: 10px;
	border: 3px solid transparent;
	position: relative;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2em;
	font-weight: bold;
	text-decoration: none;
	color: ${({ theme }) => theme.texto.titulo};
	padding: 0.5em 1.5em;
	cursor: pointer;
    width: 150px;
	font-family: 'Inter', sans-serif;
    font-weight: 600;


`;
export const GrupoBotao = styled.div`
    display: flex;
    flex-direction: row;
    gap: 25px;
    padding-top: 30px;
`;

export const BoxTexto = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
`;
