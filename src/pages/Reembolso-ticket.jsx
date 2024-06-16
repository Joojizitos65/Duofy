import { useState } from "react";
import "../styles/Reembolso-ticket.css";

export default function ReembolsoTicket() {
  const [motivo, setMotivo] = useState("");
  const [arquivo, setArquivo] = useState(null);
  const [preview, setPreview] = useState(null); // Armazena a URL da imagem

  const handleMotivoChange = (event) => {
    setMotivo(event.target.value);
  };

  const handleArquivoChange = (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      //não sei pq funciona só fui pelos codigo de erro socorro
      return;
    }

    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target.result); // Define a URL da imagem
    };
    reader.readAsDataURL(file);
    setArquivo(file); // Armazena o arquivo para uso posterior
  };

  return (
    <>
      <div className="page">
        <h1 className="title">Reembolso</h1>
        <div className="pedidos">
          <p id="pativo">Pedidos Ativos</p>
          <div className="pedido">
            <div className="content">
              <img src="./src/assets/logo/burger-king.svg" alt="burguer king" />
              <div className="info-box">
                <h2 className="nome-restaurante">Burguer King</h2>
                <div className="avaliacao">
                  <p className="price">R$ 29,90</p>
                </div>
              </div>
            </div>
            <div className="input-boxes">
              <p>Motivo do reembolso</p>
              <input
                id="motivo-texto"
                type="text"
                placeholder="Digite o motivo do reembolso"
                value={motivo}
                onChange={handleMotivoChange}
                required
              />
              <p>Anexos</p>
              <div className="file-container">
                <input
                  id="motivo-file"
                  type="file"
                  accept="image/*"
                  onChange={handleArquivoChange}
                />
                <div className="img-preview">
                  {preview && <img src={preview} />}
                </div>
              </div>
            </div>
            <input type="submit" className="btn" onClick={() => {
              alert('Sua solicitação de reembolso foi enviada para nós, verificaremos sua solicitação e caso aceita você será ressarcido em até 3 dias úteis.')
            }}/>
          </div>
        </div>
      </div>
    </>
  );
}
