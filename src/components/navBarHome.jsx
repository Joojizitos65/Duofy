import React from "react"
import { useNavigate } from "react-router-dom"
import NavPerfil from "./navPerfil"



export default () => {
    return(
        <>
            <header className="header-home">
                <img src=".\src\assets\notification.png" alt="" />
                <div className="container-search">
                    <input type="text" name="search" id="search-input" placeholder="Pesquisar..." />
                    <img src="lupa.png" alt="lupa-search" />
                </div>
                <NavPerfil />
            </header>
        </>
    )
}