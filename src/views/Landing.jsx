import React from "react";
import ImageCarousel from "../components/Carousel";
import styles from "./Landing.module.css";
import videoLanding from "../assets/videoLanding.mov";
import { NavLink } from 'react-router-dom';
import InstagramFeed from "../components/InstagramFeed";
import Donaciones from "../components/Donaciones";
import collageLanding from "../assets/LandingCollage.png"

const Landing = () => {
  return (
    <div className={styles.main}>
      <div className={styles.videoContainer}>
        <video src={videoLanding} autoPlay loop muted />
      </div>
      <img src={collageLanding} alt="" style={{ width: '100%', marginTop: '50px', height: '100%' }}/>

      <div className={styles.nuevoMiembro}>
        <h1 className={styles.h7}>¡Bienvenido a nuestra Comunidad Cristiana en Soacha!</h1>
        <h3 className={styles.h3Bien}>Nuestra iglesia no se trata simplemente de un lugar físico; es una familia de creyentes, unidos por la gracia y el amor de Cristo. <br /><br />
          Si has tomado la decisión de dar un paso de fe y abrir tu corazón a una nueva relación con Jesús, estamos emocionados de celebrar contigo y ser parte de este emocionante capítulo de tu vida. <br /><br />Te invitamos a formar parte de nuestra comunidad y a experimentar todo lo que tenemos preparado para ti.</h3>
      </div>

      <div className={styles.versiculoContainer}>
          <p className={styles.p2}>¡Mirad cuán bueno y cuán delicioso es habitar los hermanos juntos en armonía!</p>
          <p className={styles.p2}>Salmos 133:1</p>
      </div>

      <div className={styles.redesContainer}>
        <h1 className={styles.h7}>Descubre nuestra iglesia en Instagram</h1>
        <p className={styles.p}>Explora momentos inspiradores, eventos emocionantes y más. <br />¡Síguenos para mantenerte conectado!</p>
      </div>
      <div id="feed-container">
        <InstagramFeed />
      </div>

      <div className={styles.ministeriosContainer}>
        <h1 className={styles.h7}>Ministerios</h1>
        <p className={styles.p}>
          Explora nuestros ministerios, <br />cada uno diseñado para fortalecer tu fe y conectar contigo en tu viaje espiritual.
        </p>
      </div>
      <div className={styles.imageCarouselWithMargin}>
          <ImageCarousel />
      </div>

      <div className={styles.formacionContainer}>
        <h1 className={styles.h7Form}>Únete a nuestras escuelas de formación</h1>
          <h3 className={styles.h8Form}> 
            <p className={styles.p3}>
            Cada una de nuestras escuelas está diseñada para brindarte herramientas prácticas y enseñanzas profundas que te guiarán en tu crecimiento espiritual. 
            </p>
            <NavLink to="/formacion" className={styles.enlaceFormacion}>Discipulado</NavLink>
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



 