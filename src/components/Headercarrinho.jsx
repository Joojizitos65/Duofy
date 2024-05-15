import React from 'react';
import '../styles/Compras.css';
import Produtoscarrinho from './Produtoscarrinho';

function Headercarrinho(){
    return(
        <div className='main'>
            <div className='textoheadercarrinho'>
            <img src='../public/carrinhodcompras.png'></img>
                <h1>Itens a comprar</h1>
            </div>
            <br key={2} />
            
            
        </div>
        
    )
}


export default Headercarrinho
