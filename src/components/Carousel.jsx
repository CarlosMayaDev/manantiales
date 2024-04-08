import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import imagen1 from "../assets/ADORACION1.jpeg";
import imagen2 from "../assets/2TO5NDkdQVAq63fc8XWeo0nyHhbHfrdhWUpN3YLnjCg=_plaintext_638363737807369320.jpg";
import imagen3 from "../assets/LOGOCONQUISTADORES.PNG";
import imagen4 from "../assets/STAFF2.png";
import imagen5 from "../assets/MULTIMEDIA2.jpg";
import imagen6 from "../assets/INTERCESORES.jpg";


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
        infiniteLoop={true}
        selectedItem={0}
      >
        <div className={styles.cardContainer}>
          <Card image={imagen3} title="Conquistadores del Reino" description="Ministerio Infantil"/>
          <Card image={imagen2} title="ManantialEs Familia" description="Ministerio Juvenil"/>
          <Card image={imagen1} title="Identidad Worship" description="Ministerio de Adoración"/>
        </div>
        <div className={styles.cardContainer}>
          <Card image={imagen4} title="Staff" description="Diaconado"/>
          <Card image={imagen6} title="Red de Intercesores" description="Red de Intercesores"/>
          <Card image={imagen5} title="Multimedia" description="Multimedia"/>
        </div>
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
