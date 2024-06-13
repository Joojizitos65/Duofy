import React from "react";
import { useNavigate } from "react-router-dom";
import NavPerfil from "./navPerfil";

export default () => {
  return (
    <>
      <header className="header-home">
        <img src="dfy.png" alt="logo" id="logo"  />
        <div className="container-search">
          <input
            type="text"
            name="search"
            id="search-input"
            placeholder="Pesquisar..."
          />
          <input type="image" src="lupa.png" alt="search-button" id="search"/>
        </div>
        <div className="container-profile-notification">
          <img src=".\src\assets\notification.png" alt="" />
          <NavPerfil />
        </div>
      </header>
    </>
  );
};
