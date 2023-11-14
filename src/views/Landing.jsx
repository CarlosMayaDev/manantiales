import React from "react";
import ImageCarousel from "../components/Carousel";
import styles from "./Landing.module.css";
import videoLanding from "../assets/videoLanding.MP4";
import imagen1 from "../assets/IMG_1214 22.jpg";
import { Link, NavLink } from 'react-router-dom';
import InstagramFeed from "../components/InstagramFeed";
import Donaciones from "../components/Donaciones";


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
      <div id="feed-container">
        <InstagramFeed />
      </div>
      <div className={styles.nuevoMiembro}>
        <h1 className={styles.h7}>¿Es esta tu primera vez aquí en nuestra comunidad?</h1>
        <h3 className={styles.h3Bien}>Nuestra iglesia no se trata simplemente de un lugar físico; es una familia de creyentes, unidos por la gracia y el amor de Cristo. <br /><br />
        Si has tomado la decisión de dar un paso de fe y abrir tu corazón a una nueva relación con Jesús, estamos emocionados de celebrar contigo y ser parte de este emocionante capítulo de tu vida. <br /><br />Te invitamos a formar parte de nuestra comunidad y a experimentar todo lo que tenemos preparado para ti.</h3>
        <Link to="/contactenos">
        <h3 className={styles.h3Bien} >Estoy buscando conocer mejor a Jesús.</h3>
        </Link>
      </div>
      <div className={styles.formacionContainer}>
        <h1 className={styles.h7Form}>Únete a nuestras escuelas de formación</h1>
          <h3 className={styles.h8Form}> <NavLink to="/formacion" className={styles.enlaceFormacion}>Discipulado</NavLink>
    <br />
    <NavLink to="/formacion" className={styles.enlaceFormacion}>Transforma</NavLink>
    <br />
    <NavLink to="/formacion" className={styles.enlaceFormacion}>Avanza</NavLink>
    <br />
    <NavLink to="/formacion" className={styles.enlaceFormacion}>EnamorARTE</NavLink></h3>
      </div>
      <Donaciones />
    </div>
  );
};

export default Landing;



 