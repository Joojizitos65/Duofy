import Botoes from "./Botoes"
import HeaderP from "./HeaderP"
import Infos from "./Infos"
import Dados from "./Dados"
export default function Profile() {


    return (
        <div>
            <HeaderP />
            <Infos
                Img={<img className="ftbill" src="bill gates.jpg" />}
                Nome={`Olá, BILL GATES!`}
                SaldoD={'Saldo Disponível'}
                SaldoV={'R$5.000,01'}
            />
            <div>
                <h3 className="ddc">Dados da Conta</h3>
            </div>

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