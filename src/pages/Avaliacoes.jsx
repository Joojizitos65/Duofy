import Header_ava from '../components/Header_ava';
import '../styles/style_ava.css';
import Avaliacao_delivery from '../components/Avaliacao_delivery';
import Avaliacao_restaurante from '../components/Avaliacao_restaurante';
import Footer_ava from '../components/Footer_ava';
export default function Avaliacoes() {
    return (
        <div className="corpo_avaliacoes">
            <Header_ava />
            <div className="corpo_avaliacoes_re">
                <div className="valor">
                    <h3 className='h3_valor'>Total</h3>
                    <h3 className='reais_valor'>R$ 29,90</h3>
                </div>
                <div className='produto_delivery'>
                    <div className='ccontainer_produto_delivery'> <div className='container_produto_delivery'>
                        <img src='https://cdn1.iconfinder.com/data/icons/vehicle-37/24/Motorcycle-256.png' className='img_produto_delivery'></img>
                        <h3 className='h3_produto_delivery'>Avaliação do Produto por Delivery</h3>
                    </div>
                    </div>
                    <Avaliacao_delivery />
                    <div className='ccontainer_produto_delivery_re'> <div className='container_produto_delivery_re'>
                        <img src='https://cdn4.iconfinder.com/data/icons/kitchen-and-cooking-1-2/85/chef_hat_cooker_cap-256.png' className='img_produto_delivery_re'></img>
                        <h3 className='h3_produto_delivery'>Avaliação do Produto por Delivery</h3></div>
                    </div>
                    <Avaliacao_restaurante />
                    <div className='espaco_delivery'></div>
                </div>
            </div>
            <Footer_ava/>
        </div>
    )
}