function Carousel() {
  return (
    <>
            <div class="carousel slide" id="carousel-315088">
              <ol class="carousel-indicators">
                <li
                  data-slide-to="0"
                  data-target="#carousel-315088"
                  class="active"
                ></li>
                <li data-slide-to="1" data-target="#carousel-315088"></li>
                <li data-slide-to="2" data-target="#carousel-315088"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    class="d-block w-100"
                    alt="Carousel Bootstrap First"
                    src="src\assets\carrosselOfertas\2.png"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    alt="Carousel Bootstrap Third"
                    src="src\assets\carrosselOfertas\3.png"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    alt="Carousel Bootstrap Third"
                    src="src\assets\carrosselOfertas\4.png"
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
          
    </>
  );
}

export default Carousel;
