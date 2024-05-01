import NavBarHome from "../components/navBarHome";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <NavBarHome />
      <div className="container-ofertas">
        <div className="images">
          <img src="src\assets\mequi.jpg" />
        </div>
      </div>
      <section className="home-content">
        <h1>Os favoritos da galera!</h1>
        <div className="container-carrosel">
          <img src="src\assets\mequi.jpg" />
          <img src="src\assets\mequi.jpg" />
          <img src="src\assets\mequi.jpg" />
          <img src="src\assets\mequi.jpg" />
          <img src="src\assets\mequi.jpg" />
          <img src="src\assets\mequi.jpg" />
          <img src="src\assets\mequi.jpg" />
        </div>
        <div className="favoritos">
          <h2>Seus estabelecimentos favoritos!!</h2>
          <div className="container-favoritos">
            <img src="src\assets\mequi.jpg" />
            <img src="src\assets\mequi.jpg" />
          </div>
        </div>
        <div className="fy">
          <div className="container-produtos">
            <div className="produto">
              <img src="src\assets\mequi.jpg" />
              <p className="name-produto">whopper</p>
              <p className="price-product">R$ 29,90</p>
            </div>
            <div className="produto">
              <img src="src\assets\mequi.jpg" />
              <p className="name-produto">whopper</p>
              <p className="price-product">R$ 29,90</p>
            </div>
            <div className="produto">
              <img src="src\assets\mequi.jpg" />
              <p className="name-produto">whopper</p>
              <p className="price-product">R$ 29,90</p>
            </div>
            <div className="produto">
              <img src="src\assets\mequi.jpg" />
              <p className="name-produto">whopper</p>
              <p className="price-product">R$ 29,90</p>
            </div>
            <div className="produto">
              <img src="src\assets\mequi.jpg" />
              <p className="name-produto">whopper</p>
              <p className="price-product">R$ 29,90</p>
            </div>
            <div className="produto">
              <img src="src\assets\mequi.jpg" />
              <p className="name-produto">whopper</p>
              <p className="price-product">R$ 29,90</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
