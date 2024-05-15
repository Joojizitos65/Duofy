import React from 'react';
import { useNavigate } from 'react-router-dom';

function MovePage() {
    const navigate = useNavigate(); 

    return (
        <div className="boxbts">
            <ul>
                <li onClick={() => navigate('/home')}>
                    <img className="ft3" src="Local.png" />
                    <div className="divli1">
                        <strong className="divli2"> Endereço </strong>
                        <span className="divli3"> Meus endereços cadastrados. </span>
                    </div>
                </li>
                <li onClick={() => navigate('/conversa')}>
                    <img className="ft3" src="chat.png" />
                    <div className="divli1">
                        <strong className="divli2"> Conversas </strong>
                        <span className="divli3"> Meu historico de conversa. </span>
                    </div>
                </li>
                <li onClick={() => navigate('/carrinho')}>
                    <img className="ft3" src="card.png" />
                    <div className="divli1">
                        <strong className="divli2"> Pagamentos </strong>
                        <span className="divli3"> Meu saldo e cartões.  </span>
                    </div>
                </li>
                <li>
                    <img className="ft3" src="noti.png" />
                    <div className="divli1">
                        <strong className="divli2"> Notificações </strong>
                        <span className="divli3"> Minhas notificações. </span>
                    </div>
                </li>
                <li>
                    <img className="ft3" src="shield.png" />
                    <div className="divli1">
                        <strong className="divli2"> Autenticação de Dois Fatores </strong>
                        <span className="divli3"> Aumente a segurança da sua conta. </span>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default MovePage;