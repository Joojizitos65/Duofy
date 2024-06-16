import "../styles/Historico.css"
import { useNavigate } from "react-router-dom";

function PedidoH({nome, descricao, imagem, avaliacao}){
    return(
        <div className="mainPedidoH">
            <p>{nome}</p>
            <img src={imagem}></img>
            <p> {avaliacao}</p>
            <p>{descricao}</p>
        </div>
    )
}
export default PedidoH;