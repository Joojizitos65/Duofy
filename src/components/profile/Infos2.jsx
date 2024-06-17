import "/src/styles/perfil1/pagamentos.css"

export default function Infos2({ Img, Nome, SaldoD, SaldoV }) {

    return (

        <div>
            <div className="box1">
                <figcaption>{Img}</figcaption>
                <div className="info1">
                    <h1 className="info2">{Nome}</h1>
                    <h2 className="info3">{SaldoD}</h2>
                    <p>{SaldoV}</p>
                </div>
                <div className="valor1">
                    <h4 className="titulo">Saldo em conta</h4>
                    <h4 className="titulo">Cartão Nubank</h4>
                    <div>
                        <h1 className="titulo2">R$5000,01</h1>
                    </div>
                </div>
            </div>

            <div className="servico">
                <h3 className="ser">Serviços</h3>
                <h3 className="mais">Ver mais</h3>
            </div>
            <div className="lis">
                <li className="caixa">
                    <img className="more" src="mais.png" />
                    <div className="li1">
                        <div>
                            <h1 className="li2"> Cadastrar </h1>
                            <h1 className="li3"> Novo cartão </h1>
                        </div>
                    </div>
                </li>
                <li className="caixa1">
                    <img className="pag" src="reembolso.png" />
                    <div className="li1">
                        <div>
                            <h1 className="cup"> Reembolso </h1>
                        </div>
                    </div>
                </li>
                <li className="caixa1">
                    <img className="pag" src="desconto.png" />
                    <div className="li1">
                        <div>
                            <h1 className="cup"> Meus Cupons</h1>
                        </div>
                    </div>
                </li>
            </div>
            <div className="servico">
                <h3 className="">Histórico de transações</h3>
                <h3 className="mais">Ver mais</h3>
            </div>
            <div className="transacao">
                <li className="historico" >
                    <div className="loja" >
                        <strong className="divli20" > <img className="bk" src="bk.png"/>Burguer King</strong>
                        <span className="divli4"> Pix </span>
                        <span className="divli4"> Pedido N° 8000 </span>
                    </div>
                    <div className="divli1">
                        <strong className="divli30"> R$21,99</strong>
                        <p></p>
                        <span className="divli3"> 25/05/2022 as 11:59</span>
                    </div>
                </li>
                <li className="historico">
                    <div className="loja">
                    <strong className="divli20" > <img className="bk" src="bk.png"/>Burguer King</strong>
                        <span className="divli4"> Pix </span>
                        <span className="divli4"> Pedido N° 8000 </span>
                    </div>
                    <div className="divli1">
                        <strong className="divli30"> R$21,99</strong>
                        <p></p>
                        <span className="divli3"> 25/05/2022 as 11:59</span>
                    </div>
                </li>
                <li className="historico">
                    <div className="loja">
                    <strong className="divli20" > <img className="bk" src="bk.png"/>Burguer King</strong>
                        <span className="divli4"> Pix </span>
                        <span className="divli4"> Pedido N° 8000 </span>
                    </div>
                    <div className="divli1">
                        <strong className="divli30"> R$21,99</strong>
                        <p></p>
                        <span className="divli3"> 25/05/2022 as 11:59</span>
                    </div>
                </li>               
                    <li className="historico">
                        <div className="loja">
                        <strong className="divli20" > <img className="bk" src="bk.png"/>Burguer King</strong>
                            <span className="divli4"> Pix </span>
                            <span className="divli4"> Pedido N° 8000 </span>
                        </div>
                        <div className="divli1">
                            <strong className="divli30"> R$21,99</strong>
                            <p></p>
                            <span className="divli3"> 25/05/2022 as 11:59</span>
                        </div>
                    </li>
                    <li className="historico">
                        <div className="loja">
                        <strong className="divli20" > <img className="bk" src="bk.png"/>Burguer King</strong>
                            <span className="divli4"> Pix </span>
                            <span className="divli4"> Pedido N° 8000 </span>
                        </div>
                        <div className="divli1">
                            <strong className="divli30"> R$21,99</strong>
                            <p></p>
                            <span className="divli3"> 25/05/2022 as 11:59</span>
                        </div>
                    </li>
                    <li className="historico">
                        <div className="loja">
                        <strong className="divli20" > <img className="bk" src="bk.png"/>Burguer King</strong>
                            <span className="divli4"> Pix </span>
                            <span className="divli4"> Pedido N° 8000 </span>
                        </div>
                        <div className="divli1">
                            <strong className="divli30"> R$21,99</strong>
                            <p></p>
                            <span className="divli3"> 25/05/2022 as 11:59</span>
                        </div>
                    </li>
            </div>
        </div>

    )

}