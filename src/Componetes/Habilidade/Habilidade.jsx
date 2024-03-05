import { GroupHabilidade } from "./CardHabiliade.style";
import CardHabilidade from "./CardHabilidade";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io5";
import { BiLogoJavascript, BiLogoReact, BiLogoRedux, BiLogoTailwindCss } from "react-icons/bi";
import { SiAxios, SiStyledcomponents } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BsFillBootstrapFill } from "react-icons/bs";
import { Main } from "../css/Container.style";
import { Titulo } from "../Texto/Textos.style";

export default function Habilidade() {
    return (
        <Main>
            <Titulo>HABILIDADE</Titulo>
            
            <GroupHabilidade>
                <CardHabilidade titulo={'HTML'} icon={<AiFillHtml5 size={65} />} />
                <CardHabilidade titulo={'CSS'} icon={<IoLogoCss3 size={65} />} />
                <CardHabilidade titulo={'JavaScript'} icon={<BiLogoJavascript size={65} />} />
                <CardHabilidade titulo={'Bootstrap'} icon={<BsFillBootstrapFill size={65} />} />
                <CardHabilidade titulo={'React'} icon={<BiLogoReact size={65} />} />
                <CardHabilidade titulo={'Styled-Components'} icon={<SiStyledcomponents size={65} />} />
                <CardHabilidade titulo={'Redux'} icon={<BiLogoRedux size={65} />} />

                <CardHabilidade titulo={'Axios'} icon={<SiAxios size={65} />} />
                <CardHabilidade titulo={'NextJS'} icon={<TbBrandNextjs size={65} />} />
                <CardHabilidade titulo={'Tailwind'} icon={<BiLogoTailwindCss size={65} />} />

            </GroupHabilidade>
        </Main>
    )

}
