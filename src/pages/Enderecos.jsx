import BottomNav from "../components/navbarU/BottomNav"
import HeaderE from "../components/enderecos/HeaderE"
import BarraDePesquisa from "../components/enderecos/BarraDePesquisa"
import AddEndereco from "../components/enderecos/AddEndereco"
import Locais from "../components/enderecos/Locais"

import "../styles/enderecos/enderecos.css"
export default function Enderecos() {


    return (
        <div>
            <BottomNav />
            <HeaderE />
            <BarraDePesquisa />
            <AddEndereco />
            <Locais 
            NomeL={"Casa"}
            InfoL={"R. Docilicio Luz, 75 - São Luiz, São José - SC, 88106-800"}
            complemento={"Salão kadesh Hair"}
            />

        </div>
    )

}