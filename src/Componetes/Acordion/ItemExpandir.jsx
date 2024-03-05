import { useState } from "react"
import { Descricao, Titulo2 } from "../Texto/Textos.style"

export default function ItemExpandir({ tech }) {

    const [open, setOpen] = useState(false);

    const showOrHide = () => {
        setOpen(!open);
        console.log(open)
    }

    return (

        <div onClick={showOrHide}>

            <Titulo2>
                Tecnologias usadas no projeto
            </Titulo2>
            <div>
                {open ?
                    <Descricao>
                        {tech}
                    </Descricao>
                    : null}
            </div>
        </div>

    )
}