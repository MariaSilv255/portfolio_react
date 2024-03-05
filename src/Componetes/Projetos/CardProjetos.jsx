import { Imagem } from "../Header/Header.style";
import { Contem } from "./CardProjetos.style";
import pokemon from '../img/projetos/pokemon.png'
import todolist from '../img/projetos/todolist.png'
import defi from '../img/projetos/Defi.png'
import chihiro from '../img/projetos/studioghiblin.png'
import { Descricao, Titulo } from "../Texto/Textos.style";
import { Botao, BoxTexto } from "../Botao/Botao.style";
import { SlLink } from "react-icons/sl";
import ItemExpandir from "../Acordion/ItemExpandir";
export default function CardProjetos({ img, titulo, desc, link,tech }) {
    
    const imagem =()=>{
        switch (img) {
            case 'pokemon':
             return pokemon;
        
             case 'todo':
             return todolist;

             case 'defi':
             return defi;

             case 'chihiro':
                return chihiro;

            default:
                break;
        }
    }
    
    
    return (
        <Contem>
            <Imagem >
                <img src={imagem()} width={'455px'} height={'294px'}/>
            </Imagem>
            <Titulo>{titulo}</Titulo>
            <Descricao>{desc}</Descricao>
            <ItemExpandir tech={tech}/>
            <Botao href={link} target="_black"> <BoxTexto><SlLink /> Visualizar</BoxTexto></Botao>
        </Contem>
    )
}