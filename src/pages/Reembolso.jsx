import "../styles/Reembolso.css";
import { useNavigate } from "react-router-dom";
export default function Reembolso() {
  const navigate = useNavigate();
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
                  <p>Avaliação do Usuário</p>
                  <div className="estrelas">
                    <img src="./estrela2.png" alt="estrela" />
                    <img src="./estrela2.png" alt="estrela" />
                    <img src="./estrela2.png" alt="estrela" />
                    <img src="./estrela2.png" alt="estrela" />
                    <img src="./estrela1.png" alt="estrela" />
                  </div>
                </div>
              </div>
            </div>
            <div className="itens">
              <p className="item">Hamburguer</p>
              <p className="price">R$ 29,90</p>
            </div>
            <button className="btn" onClick={() => navigate('/reembolso-ticket')}>Solicitar Reembolso</button>
          </div>
        </div>
      </div>
    </>
  );
}