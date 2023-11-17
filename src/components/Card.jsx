import React from "react";
import styles from "./Card.module.css"
import { NavLink } from "react-router-dom";

function Card({ image, title, description }) {
    return (
      <>
        <div className={styles.card}>
          <img
            className={styles.image}
            src={image}        
            alt="Card Image"
          ></img>

            <div className={styles.content}>
            <NavLink to="/ministerios" style={{ textDecoration: 'none' }}><h2 className={styles.h2}>{title}</h2></NavLink>
              <p className={styles.p}>{description}</p>
            </div>
        </div>
      </>
    );
  }

export default Card;