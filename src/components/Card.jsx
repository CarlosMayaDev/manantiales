import React from "react";
import styles from "./Card.module.css"

function Card({ image, title, description }) {
    return (
      <div className={styles.card}>
        <img
          className={styles.image}
          src={image}        
          alt="Card Image"
        ></img>
        <div className={styles.content}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
  }

export default Card;