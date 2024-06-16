import "../styles/Historico.css"
import { useState } from "react";
function Pedido({imagem, nome, avaliacao, descricao}){
    function handleCancelClick() {
        if (window.confirm("Tem certeza que deseja cancelar?")) {
            navigate('/home');
        }
    }

    return(
        <div className="produto">
            <h1>{nome}</h1>
            <img src={imagem}></img>
            <p>{avaliacao}</p>
            <p>{descricao}</p>
            <button className="confirmar" onClick={() => navigate('/home')}>Confirmar Entrega</button>
            <button className="cancelar" onClick={handleCancelClick}>Cancelar</button>
        </div>    
        )
}
export default Pedido;