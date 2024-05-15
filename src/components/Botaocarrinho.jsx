import { useNavigate } from "react-router-dom";
function Botaocarrinho(){
    const navigate = useNavigate();

    return (
        <div className="BotaoCarrinho">
            <button onClick={() => navigate('/home')} className="Confirmar">Confirmar Compra</button>
        </div>
    )
}
export default Botaocarrinho;