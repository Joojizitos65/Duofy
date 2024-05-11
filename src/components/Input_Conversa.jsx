import React, { useState } from 'react';
import Mensagem_Cliente from './Mensagem_Cliente';

export default function Input_Conversa() {
    const [mensagens, setMensagens] = useState([]);
    const [texto, setTexto] = useState('');

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && texto.trim() !== '') {
            setMensagens([...mensagens, texto.trim()]);
            setTexto(''); 
        }
    };

    return (
        <footer className="footer_conversa">
            <div className="input_conversa_container">
                <input 
                    className="input_conversa" 
                    type="text" 
                    placeholder="Mensagem"
                    value={texto}
                    onChange={(event) => setTexto(event.target.value)}
                    onKeyPress={handleKeyPress}
                />   
            </div>
        </footer>
    );
}
