import Botoes from "../components/profile/Botoes";
import Dados from "../components/profile/Dados";
import HeaderP from "../components/profile/HeaderP";
import Infos from "../components/profile/Infos";
import "../styles/perfil/profile.css"
import BottomNav from "../components/navbarU/BottomNav";
export default function Profile() {


    return (
        <div>
            <BottomNav />
            <HeaderP />
            <Infos
                Img={<img className="ftbill" src="billgates.jpg" />}
                Nome={`Olá, BILL GATES!`}
                SaldoD={'Saldo Disponível'}
                SaldoV={'R$5.000,01'}
            />
            <Dados 
            dtn={"18/08/1955"}
            email={"meuusuario.gmail.com"}
            celulardd={"+55"}
            celularn={"(48) 98488-0000"}
            />
            <Botoes />


        </div>
    )

}