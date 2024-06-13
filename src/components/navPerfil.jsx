import React from "react";
import { useNavigate } from "react-router-dom";

function NavPerfil() {
  const navigate = useNavigate(); // Hook para navegar

  return (
    <>
      <img
        src="./perfil.png" className="perfil1"
        onClick={() => navigate("/perfil")}
        style={{ cursor: "pointer" }} 
      />
    </>
  );
}

export default NavPerfil;
