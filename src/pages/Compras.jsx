import Produtoscarrinho from '../components/Produtoscarrinho'
import Headercarrinho from '../components/Headercarrinho'
import Botaocarrinho from '../components/Botaocarrinho'
import '../styles/Compras.css'
import BottomNav from "../components/ButtonNavigation/BottomNav";


function Compras(){
    return(
        <div>
            <BottomNav />
            <Headercarrinho/>
            <div className='Produtos'>
            <Produtoscarrinho produto="Hamburguer" imagem="../public/burguir.jpg" key={1} /> 
            <hr/>
            <Produtoscarrinho produto="Cachorro Quente" imagem="../public/dogão.jpg" key={2} />
            <hr/>
            <Botaocarrinho/>
            </div>
        </div>
        
    )
}
export default Compras