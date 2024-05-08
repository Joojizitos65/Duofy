import "/src/styles/Perfil/botoes.css"
export default function Botoes() {

    return (
        <div>
            <div className="boxbts">
                <ul>
                    <li>
                        <img className="ft3" src="local.png" />
                        <div className="divli1">
                            <strong className="divli2"> Endereço </strong>
                            <span className="divli3"> Meus endereços cadastrados. </span>
                        </div>
                    </li>
                    <li>
                        <img className="ft3" src="local.png" />
                        <div className="divli1">
                            <strong className="divli2"> Conversas </strong>
                            <span className="divli3"> Meu historico de conversa. </span>
                        </div>
                    </li>
                    <li>
                        <img className="ft3" src="local.png" />
                        <div className="divli1">
                            <strong className="divli2"> Pagamentos </strong>
                            <span className="divli3"> Meu saldo e cartões.  </span>
                        </div>
                    </li>
                    <li>
                        <img className="ft3" src="local.png" />
                        <div className="divli1">
                            <strong className="divli2"> Notificações </strong>
                            <span className="divli3"> Minhas notificações. </span>
                        </div>
                    </li>
                    <li>
                        <img className="ft3" src="local.png" />
                        <div className="divli1">
                            <strong className="divli2"> Autenticação de Dois Fatores </strong>
                            <span className="divli3"> Aumente a segurança da sua conta. </span>
                        </div>
                    </li>
                </ul>
                
        </div>
        <div className="ajuda">

        <strong> Ajuda </strong>
        <img className="ft4" src=" arrow2.png" />
            </div>

            <div className="boxb">
        <button className="excluir" > Exlcuir Conta </button>

            </div>

        </div>
    )

}