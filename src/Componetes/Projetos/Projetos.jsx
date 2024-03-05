import { Titulo } from "../Texto/Textos.style";
import { Main } from "../css/Container.style";
import CardProjetos from "./CardProjetos";
import { GroupCard } from "./CardProjetos.style";

export default function Projeto() {
    const desc = {
        descricao: {
            pokedex: 'Uma Pokédex armazena informações sobre várias espécies de criaturas chamadas Pokémon. Incluindo suas características, habilidades e localizações. ',
            todoList: ' "todolist", é um registro organizado de atividades ou afazeres a serem realizados. Geralmente usado para gerenciar as atividades de forma mais eficaz.',
            landingPage: "Uma landing page de apresentação da empresa fictícia 'Defi' destacaria informações essenciais, como sua missão, produtos ou serviços, equipe e contatos.",
            chihiro: 'Uma landing page para "A Viagem de Chihiro"é uma página web dedicada promoção deste famoso filme de animação japonês dirigido por Hayao Miyazaki.'
        },
    }
    return (
        <Main>
            <Titulo>PROJETOS</Titulo>
            <GroupCard>
                <CardProjetos tech={'Axios, React, React-router-dom, Redux e Styled-Components.'} link={'https://pokedex-tau-rose-58.vercel.app/'} img={'pokemon'} titulo={'Pokédex'} desc={desc.descricao.pokedex} />
                <CardProjetos tech={'React, React-Reveal e Styled-Components.'} link={'https://estudo-landing-page.vercel.app/'} img={'defi'} titulo={'DeFi'} desc={desc.descricao.landingPage} />
                <CardProjetos tech={'React e Css'} link={'https://lista-tarefas-lemon.vercel.app/'} img={'todo'} titulo={'TodoList'} desc={desc.descricao.todoList} />
               <CardProjetos  tech={'Module CSS e React'} link={'https://desafio5-studio-ghibli.vercel.app/'} img={'chihiro'} titulo={'Studio Ghiblin'} desc={desc.descricao.chihiro} />



            </GroupCard>
        </Main>
    )
}