import "../../styles/enderecos/addendereco.css"
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddEndereco() {
    const navigate = useNavigate();
    return (
        <div className="meioe">
            <button className="boxadd" onClick={() => navigate('/Conversa')}>
            <input type="image" src="Local.png" id="local"/>
            <span className="iteme">Adicione um Endereço</span>
            </button>
        </div>
    )

}