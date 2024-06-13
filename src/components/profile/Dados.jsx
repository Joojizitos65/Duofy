import "/src/styles/perfil1/dados.css"
export default function Dados({ dtn, email, celulardd, celularn }) {

    return (

        <div className="dados">
            <article>
                <h3 className="ddc">Dados da Conta</h3>
            </article>
            <div className="boxdados">
                <strong className="nf"> Data de Nascimento </strong>
                <span className="pdados"> {dtn} </span>
            </div>
            <div className="boxdados">
                <strong className="nf"> E-mail: </strong>
                <span className="pdados"> {email} </span>
            </div>
            <div className="boxdados">
                <strong className="nf"> Celular: </strong>
                <div className="boxN">
                    <span className="dd"> {celulardd} </span>
                    <span className="n"> {celularn} </span>
                </div>
            </div>
        </div>

    )

} 