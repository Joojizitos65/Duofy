import React, { useRef } from 'react';
import "../../styles/enderecos/locais.css";

function Locais({ NomeL, InfoL, complemento }) {
  const modalRef = useRef(null);

  const openModal = () => {
    const modal = modalRef.current;
    const tripoint = document.querySelector(".tripoint");

    if (modal && tripoint) {
      const tripointRect = tripoint.getBoundingClientRect();
      const modalWidth = modal.offsetWidth;
      const modalStyle = modal.style;

      const modalLeft = tripointRect.left - modalWidth - 100; 

      modalStyle.position = "fixed";
      modalStyle.top = `${tripointRect.top + tripointRect.height}px`;
      modalStyle.left = `${modalLeft}px`;

      modal.showModal();
    }
  };

  const closeModal = () => {
    const modal = modalRef.current;
    if (modal) {
      modal.close();
    }
  };

  const handleEdit = () => {
    console.log("Editar informações");
    alert("Implementar lógica de edição aqui.");
    closeModal();
  };

  const handleDelete = () => {
    const tripointContainer = document.querySelector(".boxL");

    if (tripointContainer) {
      console.log("Excluir div que contém o tripoint");
      tripointContainer.remove();
      closeModal();
    }
  };

  return (
    <div className="Fundo">
      <div className="boxL">
        <figcaption>
          <img className="icons" src="Homenav.png" alt="Ícone de Navegação" />
        </figcaption>

        <div className="content">
          <h1 className="local">{NomeL}</h1>
          <hr className="linha" />
          <p className="item">{InfoL}</p>
          <p className="item">{complemento}</p>
        </div>
        

        <input type="image" className="tripoint" src="tripoint.png" alt="Ícone de Tripoint" onClick={openModal} />
        
        <dialog id="modal" ref={modalRef}>
          <ul>
            <li className='e' onClick={handleDelete}><button type="button" >Excluir</button></li>
            <li className='e' onClick={handleEdit}><button type="button" >Editar</button></li>
          </ul>
        </dialog>
      </div>
    </div>
  );
}

export default Locais;