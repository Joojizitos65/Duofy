import "/src/styles/perfil1/infos.css"

export default function Infos2({ Img, Nome, SaldoD, SaldoV }) {

    return (

        <div className="box">
            <figcaption>{Img}</figcaption>
            <div className="txtinfo">
                <h1>{Nome}</h1>
                <h2>{SaldoD}</h2>
                <p>{SaldoV}</p>
            </div>
            <div className="valor">
                <h2 className="titulo">saldo em conta</h2>
                <h1 className="titulo">R$5000,01</h1>
            </div>
        </div>

    )

}