import React from "react";
import ImageCarousel from "../components/Carousel";
import styles from "./Landing.module.css";
import videoLanding from "../assets/videoLanding.mov";
import { Link, NavLink } from 'react-router-dom';
import InstagramFeed from "../components/InstagramFeed";
import Donaciones from "../components/Donaciones";
import collageLanding from "../assets/LandingCollage.png"

const Landing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.videoContainer}>
        <video src={videoLanding} autoPlay loop muted />
      </div>
      <img src={collageLanding} alt="" style={{ width: '100%', marginTop: '100px' }}/>

        {/* <div className={styles.textContainer}>
          <div className={styles.bienvenidos}>
            <h1 className={styles.h1}>¡Manantiales de Amor y Poder!</h1>
            <h3 className={styles.h3}>Les damos la más cordial bienvenida a nuestro espacio virtual, un rincón dedicado al encuentro, la inspiración y el crecimiento espiritual.</h3>
            <h5 className={styles.h5}>Nos enorgullece comprometernos a ser para ustedes una fuente constante de amor, fortaleza y sabiduría mediante la enseñanza de la Palabra de Dios. <br />¡Explora con nosotros este viaje espiritual y descubre las aguas revitalizantes de nuestra comunidad!</h5>
            <Link to="/conocenos">
              <h5 className={styles.h6}>
                Conócenos
              </h5>
            </Link>
          </div>
        </div> */}

      <div className={styles.nuevoMiembro}>
        <h1 className={styles.h7}>¿Es tu primera vez en nuestra comunidad?</h1>
        <h3 className={styles.h3Bien}>Nuestra iglesia no se trata simplemente de un lugar físico; es una familia de creyentes, unidos por la gracia y el amor de Cristo. <br /><br />
          Si has tomado la decisión de dar un paso de fe y abrir tu corazón a una nueva relación con Jesús, estamos emocionados de celebrar contigo y ser parte de este emocionante capítulo de tu vida. <br /><br />Te invitamos a formar parte de nuestra comunidad y a experimentar todo lo que tenemos preparado para ti.</h3>
          {/* <Link to="/contactenos">
          <h3 className={styles.h3Bien} >Quiero conocer mejor a Jesús.</h3>
        </Link> */}
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
        <h1 className={styles.h7}>Nuestros ministerios</h1>
        <p className={styles.p}>
          Explora los diversos ministerios que ofrecemos, <br />cada uno diseñado para fortalecer tu fe y conectar contigo en tu viaje espiritual.
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



 