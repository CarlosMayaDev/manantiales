import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function ImageCarousel() {
  return (
    <Carousel>
      <div>
        <img src="image1.jpg" alt="Image 1" />
        <p className="legend">Descripción de la imagen 1</p>
      </div>
      <div>
        <img src="image2.jpg" alt="Image 2" />
        <p className="legend">Descripción de la imagen 2</p>
      </div>
      <div>
        <img src="image3.jpg" alt="Image 3" />
        <p className="legend">Descripción de la imagen 3</p>
      </div>
      {/* Agrega más imágenes según sea necesario */}
    </Carousel>
  );
}

export default ImageCarousel;