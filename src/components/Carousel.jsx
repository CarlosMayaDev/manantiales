import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import imagen1 from "../assets/IMG_1214 2.jpg";
import imagen2 from "../assets/IMG_1222 2.jpg";
import imagen3 from "../assets/IMG_1333 2.jpg";

function ImageCarousel() {
  return (
    <Carousel autoPlay={true} interval={2500} showStatus={false}  showArrows={false}>
      <div>
        <img src={imagen1} alt="Image 1" />
      </div>
      <div>
        <img src={imagen2} alt="Image 2" />
      </div>
      <div>
        <img src={imagen3} alt="Image 3" />
      </div>
    </Carousel>
  );
}

export default ImageCarousel;