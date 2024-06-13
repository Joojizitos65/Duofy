import'../styles/style_conversa.css'
import Mensagem from '../components/Mensagem'
import Mensagem_Cliente from '../components/Mensagem_Cliente'
import Input_Conversa from '../components/Input_Conversa'
import { useNavigate } from 'react-router-dom'
export default function Conversa(){
    const navigate = useNavigate(); 
    return(
        <div>
        <header className="header">
            <button onClick={() => navigate('/perfil')} className='imagem'></button>
            <img src='https://cdn-icons-png.flaticon.com/512/17/17004.png' className='imagem_usuario'></img>
           <div className='div_nomeusuario'> <h1 className="nome">Burguer King</h1>
           <p className='descricao_usuario'>Batata Cheddar</p> </div>
        </header>
        <Mensagem/>
        <Mensagem_Cliente/>
        <Input_Conversa/>
        </div>
    )
}