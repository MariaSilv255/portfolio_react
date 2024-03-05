
import { Titulo2 } from "../Texto/Textos.style";
import { Card, Contem, Icon } from "./CardHabiliade.style";
export default function CardHabilidade({ titulo, icon }) {
    return (
        <Card>
            <Titulo2>{titulo}</Titulo2>
            <Icon>{icon}</Icon>
        </Card>
    )
}

