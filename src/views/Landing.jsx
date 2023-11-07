import React from "react";
import ImageCarousel from "../components/Carousel";
import styles from "./Landing.module.css";
import videoLanding from "../assets/videoLanding.MP4";
import imagen1 from "../assets/IMG_1214 22.jpg";
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.videoContainer}>
        <video src={videoLanding} autoPlay loop muted />
      </div>

      <div className={styles.imageContainer}>
        <div className={styles.textContainer}>
          <div className={styles.bienvenidos}>
            <h1 className={styles.h1}>¡Somos Manantiales de Amor y Poder!</h1>
            <h3 className={styles.h3}>Bienvenidos a nuestro espacio virtual. Aquí encontrarán un lugar de encuentro, inspiración y crecimiento espiritual.</h3>
            <h5 className={styles.h5}>Nuestro compromiso es servirles como fuente de amor, fortaleza y sabiduría a través de la enseñanza de la Palabra de Dios.</h5>
            <Link to="/conocenos">
              <h5 className={styles.h6}>
                ver mas...
              </h5>
            </Link>
          </div>
        </div>
        <img src={imagen1} alt="imagen1" />
      </div>

      <div className={styles.div1}>
        <h1 className={styles.h7}>Nuestros ministerios</h1>
      </div>
      <div className={styles.imageCarouselWithMargin}>
          <ImageCarousel />
      </div>
      <div className={styles.redesContainer}>
        <h1 className={styles.h7}>Encuéntranos en redes!</h1>
      </div>
    </div>
  );
};

export default Landing;



 