import React from "react";
import ImageCarousel from "../components/Carousel";
import styles from "./Landing.module.css";
import videoLanding from "../assets/videoLanding.MP4";
import imagen1 from "../assets/IMG_1214 22.jpg";

const Landing = () => {
  return (
    <div className={styles.container}>
      <div>
        <video src={videoLanding} autoPlay loop muted />
      </div>

      <div className={styles.imageContainer}>
        <div className={styles.textContainer}>
          <div className={styles.bienvenidos}>BIENVENIDOS A NUESTRA CASA</div>
        </div>
        <img src={imagen1} alt="imagen1" />
      </div>

      <div>
        <ImageCarousel />
      </div>
    </div>
  );
};

export default Landing;



 