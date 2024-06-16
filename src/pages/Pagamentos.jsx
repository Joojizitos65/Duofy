
import Infos2 from "../components/profile/Infos2";
import "../styles/perfil1/pagamentos.css"
import BottomNav from "../components/navbarU/BottomNav";
export default function Pagamentos() {


    return (
        <div>
            <BottomNav />
            <Infos2
                Img={<img className="ftbill" src="billgates.jpg" />}
                Nome={`Olá, BILL GATES!`}
                SaldoD={'Veja os dados da Sua conta'}
            />
        </div>
    )

}