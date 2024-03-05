import { Grid } from "@mui/material";
import { Descricao, Nome, Titulo } from "../Texto/Textos.style";
import { Imagem, Conteudo } from "./Header.style";
import minhafoto from "../img/minhaFoto.png";
import { SlSocialLinkedin, SlSocialGithub } from "react-icons/sl";
import styled from "styled-components";
import { Botao, Botao2, BoxTexto, GrupoBotao } from "../Botao/Botao.style";

export default function Header() {


    const Customgrid = styled(Grid)`
        display: flex;
        align-items: center;

  
    `;
    return (


        <Grid container display={"flex"} justifyContent={'center'}>
            <Customgrid md={7} xs={12}>
                <Conteudo>
                    <Titulo>OLÁ, EU SOU</Titulo>
                    <Nome>MARIA APARECIDA</Nome>
                    <Titulo>DESENVOLVEDORA FRONT-END</Titulo>
                    <GrupoBotao>
                        <Botao href="https://www.linkedin.com/in/maria-aparecida-2b628419b/" target="_black"><BoxTexto><SlSocialLinkedin /> LinkedIn</BoxTexto></Botao>
                        <Botao2 href="https://github.com/MariaSilv255" target="_black"><BoxTexto><SlSocialGithub/> GitHub</BoxTexto></Botao2>
                    </GrupoBotao>
                </Conteudo>
            </Customgrid>
            <Grid md={5} xs={12}>
                <Imagem>
                    <img src={minhafoto}/>
                </Imagem>
            </Grid>

            <Grid sm={12} paddingTop={'20px'}>
                <Titulo>SOBRE MIM</Titulo>
                <Descricao>
                    Sou uma Desenvolvedora Front-End e moro em Poço Branco,
                    RN. Minha jornada na programação começou em 2016,
                    quando iniciei o curso técnico integrado em Informática no IFRN.
                    Durante meus dois anos de atuação profissional,
                    tive a oportunidade de trabalhar como desenvolvedora full-stack,
                    o que me permitiu adquirir uma compreensão abrangente do desenvolvimento web.
                    Atualmente, meu foco principal está na área de front-end,
                    onde busco aprimorar e aplicar minhas habilidades para criar designs atraentes
                    e funcionais que cativem os usuários
                </Descricao>
            </Grid>
        </Grid>



    )
}