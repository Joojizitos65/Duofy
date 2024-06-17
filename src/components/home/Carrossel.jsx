import "./Carrossel2.css";

function Carousel( {img1, img2 , img3}) {
  return (
    <>
      <div className="container-carrossel">
        <div class="carousel slide" id="carousel-315088">
          <ol class="carousel-indicators">
            <li
              data-slide-to="0"
              data-target="#carousel-315088"
              class="active"
              className="indicators"
            ></li>
            <li data-slide-to="1" data-target="#carousel-315088" className="indicators"></li>
            <li data-slide-to="2" data-target="#carousel-315088" className="indicators"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block"
                alt="Carousel Bootstrap First"
                src={img1}
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block "
                alt="Carousel Bootstrap Third"
                src={img2}
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block"
                alt="Carousel Bootstrap Third"
                src={img3}
              />
            </div>
          </div>{" "}
          <a
            class="carousel-control-prev"
            href="#carousel-315088"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon"></span>{" "}
            <span class="sr-only">Previous</span>
          </a>{" "}
          <a
            class="carousel-control-next"
            href="#carousel-315088"
            data-slide="next"
          >
            <span class="carousel-control-next-icon"></span>{" "}
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Carousel;