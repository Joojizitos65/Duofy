import'../styles/Conversa.css'
import Mensagem from '../components/Mensagem'
import Mensagem_Cliente from '../components/Mensagem_Cliente'
import Input_Conversa from '../components/Input_Conversa'
export default function Conversa(){
    return(
        <div>
        <header className="header">
            <img src='https://cdn.icon-icons.com/icons2/2131/PNG/512/back_arrow_icon_131563.png' className='imagem'></img>
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