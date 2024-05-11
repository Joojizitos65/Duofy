import React from 'react';

export default function Mensagem_Cliente({ texto }) {
    return (
        <div className="balao_ref">
            <img className='balao_img_ref' src="../src/public/balao.png" alt="Balão de mensagem" />
            <h3 className="texto_balao_ref">Boa noite como podemos ajudar?</h3>
        </div>
    );
}