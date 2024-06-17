import "../../styles/enderecos/addendereco.css";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function AddEndereco({
  Nome,
  InfoR,
  InfoN,
  InfoB,
  InfoCEP,
  Complemento
}) {
  const modalRef = useRef(null); 
  const navigate = useNavigate();

  const openModal = () => {
    const modal = modalRef.current;
    if (modal) {
      modal.showModal();
    }
  };


  const closeModal = () => {
    const modal = modalRef.current;
    if (modal) {
      modal.close();
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <div className="meioe">
        <button className="boxadd" onClick={openModal}>
          <img src="Local.png" alt="Local" id="local" />
          <span className="iteme">Adicione um Endereço</span>
        </button>
      </div>
      <dialog id="modal" ref={modalRef} style={{ position: "relative", top: "20%", width: "100%", height: "75%",left: "50%", transform: "translate(-50%, 10px)", backgroundColor: "white", padding: "20px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", zIndex: "1000" }}>
        <ul>
          <li>{Nome}</li> 
          <li>{InfoR}</li>
          <li>{InfoN}</li>
          <li>{InfoB}</li>
          <li>{InfoCEP}</li>
          <li>{Complemento}</li>
        </ul>
        <button onClick={closeModal} style={{ marginTop: "10px" }}>Fechar</button> 
      </dialog>
    </div>
  );
}