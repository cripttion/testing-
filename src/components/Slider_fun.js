import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Slider_fun() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
      };
  return (
   <>
   <Slider {...settings}>
      <div>
       <img src="./images/gallery1.png"/>
      </div>
      <div>
      <img src="./images/gallery1.png"/>
      </div>
      <div>
      <img src="./images/gallery2.png"/>
      </div>
      <div>
      <img src="./images/gallery3.png"/>
      </div>
      <div>
      <img src="./images/gallery5.png"/>
      </div>
      <div>
      <img src="./images/gallery4.png"/>
      </div>
      <div>
      <img src="./images/gallery4.png"/>
      </div>
      <div>
      <img src="./images/gallery4.png"/>
      </div>
      <div>
      <img src="./images/gallery4.png"/>
      </div>
    </Slider>
   </>
  )
}
