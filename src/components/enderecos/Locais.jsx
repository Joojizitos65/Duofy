import "../../styles/enderecos/locais.css"

export default function Locais({NomeL,InfoL,complemento}) {

    return (
        <div className="Fundo">
            <div className="boxL">
            <figcaption>
            <img className="icons" src="Homenav.png"/>
            </figcaption>
            <div className="content">
            <h1 className="local"> {NomeL} </h1>
            <hr className="linha"/>
            <p className="item">{InfoL}</p>
            <p className="item">{complemento}</p>
            </div>
            <figcaption>
            <input type="image" className="tripoint" src="tripoint.png" />
            </figcaption>
            </div>
        </div>
    )

}