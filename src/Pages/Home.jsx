
import Habilidade from "../Componetes/Habilidade/Habilidade";
import Header from "../Componetes/Header/Header";
import NavBar from "../Componetes/NavBar/NavBar";
import { Barra } from "../Componetes/NavBar/NavBar.style";
import Projeto from "../Componetes/Projetos/Projetos";
import { Container } from "../Componetes/css/Container.style";

export default function Home() {
    return (
        <>
            <Barra>
                <NavBar />
            </Barra>
            <Container>

                <Header />
                <Projeto />
                <Habilidade />
            </Container>
        </>
    )
}