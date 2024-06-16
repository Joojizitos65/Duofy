import "../styles/Historico.css"
import Pedido from "../components/Pedido"
import HeaderH from "../components/HeaderH"
import PedidoH from "../components/PedidoH"
import { useNavigate } from "react-router-dom"
function Historico(){
    return(
        <div className="mainhistorico">
            <HeaderH/>
            <div className="Pedidos">
                <Pedido 
                imagem={"/public/xbacon.jpg"}
                nome={"X-Bacon"}
                avaliacao={"★★★☆☆"}
                descricao={"Um saboro X-bacon com carne artesanal de 350g, queijo cheddar, mussarela, 4 fatias de bacon crocante, molho especial e pão brioche."}
                />
                <PedidoH 
                imagem={"/public/onigiri.jpeg"}
                avaliacao={"★★★★★"}
                nome={"Onigiri"}
                descricao={"Nosso onigiri é um lanche japonês saudável e delicioso, feito com arroz premium, alga nori crocante e recheios variados como salmão e atum."}
                />
            </div>
        </div>
    )
}
export default Historico