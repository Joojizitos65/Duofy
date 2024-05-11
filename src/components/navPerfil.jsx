import React from "react";
import { useNavigate } from "react-router-dom";

function NavPerfil() {
  const navigate = useNavigate(); // Hook para navegar

  return (
    <>
      <img
        src="./perfil.png"
        onClick={() => navigate("/perfil")}
        style={{ cursor: "pointer" }}
      />
    </>
  );
}

export default NavPerfil;
