import "../../styles/enderecos/barradepesquisa.css"

export default function BarraDePesquisa() {

    return (
        <div className="meio">
        <section className="container-search2">
          <input
            type="text"
            name="search"
            id="search-input"
            placeholder="Pesquisar..."
          />
          <input type="image" src="lupa.png" id="search3"/>
        </section>
        </div>
    )

}