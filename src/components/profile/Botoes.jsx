import "/src/styles/perfil1/botoes.css"
import React from "react"
import MovePage from "./MoveP"

export default function Botoes() {

    return (
        <div>
            <div>
                <MovePage />

            </div>
            <div className="ajuda">
                <strong> Ajuda </strong>
                <img className="ft4" src="arrow2.png" />
            </div>

            <div className="boxb">
                <button className="excluir" > Exlcuir Conta </button>
            </div>

        </div>
    )

}
