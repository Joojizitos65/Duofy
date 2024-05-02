import "../styles/infos.css"
export default function Infos({ Img, Nome, SaldoD, SaldoV }) {

    return (

        <div className="box">
            <figcaption>{Img}</figcaption>
            <div className="txtinfo">
                <h1>{Nome}</h1>
                <h2>{SaldoD}</h2>
                <p>{SaldoV}</p>
            </div>
        </div>

    )

}