import Botoes from "../components/profile/Botoes";
import Dados from "../components/profile/Dados";
import HeaderP from "../components/profile/HeaderP";
import Infos from "../components/profile/Infos2";
import "../styles/perfil1/pagamentos.css"
import BottomNav from "../components/navbarU/BottomNav";
export default function Pagamentos() {


    return (
        <div>
            <BottomNav />
            <Infos2
                Img={<img className="ftbill" src="billgates.jpg" />}
                Nome={`Olá, BILL GATES!`}
                SaldoD={'Saldo Disponível'}
            />
        </div>
    )

}