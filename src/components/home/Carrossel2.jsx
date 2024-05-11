import { motion } from "framer-motion";
import "./Carrossel2.css";
import image1 from "../../assets/logo/1.jpg";
import image2 from "../../assets/logo/2.jpg";
import image3 from "../../assets/logo/3.jpg";
import image4 from "../../assets/logo/4.jpg";
import image5 from "../../assets/logo/5.jpg";
import image6 from "../../assets/logo/6.jpg";
import image7 from "../../assets/logo/7.jpg";
import image8 from "../../assets/logo/8.jpg";
import image9 from "../../assets/logo/9.jpg";
import image10 from "../../assets/logo/10.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

//const images = [ image1 , image2, image3, image4, image5, image6, image7, image8, image9, image10]

function SwiperTest() {
  return (
    <>
      
        <Swiper
          spaceBetween={5}
          slidesPerView={7}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >

          <SwiperSlide className="swiperContainer"><img src={image1} className="swiperImg" /></SwiperSlide>
          <SwiperSlide className="swiperContainer"><img src={image2} className="swiperImg" /></SwiperSlide>
          <SwiperSlide className="swiperContainer"><img src={image3} className="swiperImg" /></SwiperSlide>
          <SwiperSlide className="swiperContainer"><img src={image4} className="swiperImg" /></SwiperSlide>
          <SwiperSlide className="swiperContainer"><img src={image5} className="swiperImg" /></SwiperSlide>
          <SwiperSlide className="swiperContainer"><img src={image6} className="swiperImg" /></SwiperSlide>
          <SwiperSlide className="swiperContainer"><img src={image7} className="swiperImg" /></SwiperSlide>
          <SwiperSlide className="swiperContainer"><img src={image8} className="swiperImg" /></SwiperSlide>
          <SwiperSlide className="swiperContainer"><img src={image9} className="swiperImg" /></SwiperSlide>
          <SwiperSlide className="swiperContainer"><img src={image10} className="swiperImg" /></SwiperSlide>

        </Swiper>
      
    </>
  );
}

export default SwiperTest;
