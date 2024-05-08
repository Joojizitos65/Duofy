import NavBarHome from "../components/navBarHome";
import "../styles/Home.css";
import Produto from "../components/produto";
import Carousel from "../components/home/Carrossel";
import Carrossel2 from "../components/home/Carrossel2";

function Home() {
  return (
    <>
      <NavBarHome />
      <div className="container-endereco">
        <select name="endereco" id="endereco-selecionar">
          <option value="0">
            <p>Seu endereço</p>
          </option>
          <option value="1">
            <p>Rua Ayrton Senna, 442</p>
          </option>
          <option value="2">
            <p>Rua Elizeu de Bernardes, 576</p>
          </option>
        </select>
      </div>
      <Carousel />
      <section className="home-content">
        <h1>Os favoritos da galera!</h1>
        <Carrossel2 />
        <div className="favoritos">
          <h2>Seus estabelecimentos favoritos!!</h2>
          <div className="container-favoritos">
            <img src="src\assets\carrosselOfertas\bkloud.jpg" />
          </div>
        </div>
        <div className="fy">
          <h1>Escolhidos para você</h1>
          <div className="container-produtos">
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
