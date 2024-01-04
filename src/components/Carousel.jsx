import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import imagen1 from "../assets/ADORACION1.jpeg";
import imagen2 from "../assets/2TO5NDkdQVAq63fc8XWeo0nyHhbHfrdhWUpN3YLnjCg=_plaintext_638363737807369320.jpg";
import imagen3 from "../assets/LOGOCONQUISTADORES.PNG";
import Card from './Card';
import styles from "./Carousel.module.css";

function ImageCarousel() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        interval={6000}
        showStatus={false}
        showThumbs={false}
        transitionTime={800}
      >
        <div className={styles.cardContainer}>
          <Card image={imagen3} title="Conquistadores del Reino" description="Ministerio Infantil"/>
          <Card image={imagen2} title="ManantialEs Familia" description="Ministerio Juvenil"/>
          <Card image={imagen1} title="Adoración" description="Ministerio de Adoración"/>
        </div>
        <div className={styles.cardContainer}>
          <Card image={imagen2} title="Staff" description="Diaconado"/>
          <Card image={imagen2} title="Red de Intercesores" description="descripcion"/>
          <Card image={imagen2} title="Multimedia" description="descripcion"/>
        </div>
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
