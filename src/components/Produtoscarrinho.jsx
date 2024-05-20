import React, { useState } from 'react';
import '../styles/Compras.css';

function Produtoscarrinho({ produto, imagem}) {
    const [quantity, setQuantity] = useState(0);

    const handleAddItem = () => {
        setQuantity(quantity + 1);
    };
    const handleRemoveitem = () => {
        setQuantity(quantity - 1);
    }

    return (
        <div className='Pedidos'>
            <img src={imagem} alt={produto} />
            <h1>{produto}</h1>
            <p>Quantidade: {quantity}</p>
            <p>R$ 100,00</p>
            <button onClick={handleAddItem}>Adicionar mais itens</button>
            <button onClick={handleRemoveitem} className='removeritens'>Remover do Carrinho</button>
            
        </div>
    );
}

export default Produtoscarrinho;