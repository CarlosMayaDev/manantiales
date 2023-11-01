import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import imagen1 from "../assets/273541995_5604577989571712_5890615490078742919_n.jpg";
import imagen2 from "../assets/300145368_6156030454426460_950776104863476477_n.jpg";
import imagen3 from "../assets/378317721_630360289263064_4111713357532053760_n.jpg";
import Card from './Card';
import styles from "./Carousel.module.css";

function ImageCarousel() {
  return (
    <Carousel autoPlay={true} interval={2500} showStatus={false}  showArrows={false} showThumbs={false}>
      <div className={styles.cardContainer}>
        <Card image={imagen1} title="titulo" description="descripcion"/>
        <Card image={imagen1} title="titulo" description="descripcion"/>
        <Card image={imagen1} title="titulo" description="descripcion"/>
        {/* <img src={imagen1} alt="Image 1" /> */}
      </div>
      <div className={styles.cardContainer}>
        <Card image={imagen2} title="titulo" description="descripcion"/>
        <Card image={imagen2} title="titulo" description="descripcion"/>
        <Card image={imagen2} title="titulo" description="descripcion"/>
        {/* <img src={imagen2} alt="Image 2" /> */}
      </div>
    </Carousel>
  );
}

export default ImageCarousel;