import React from "react";
import styles from "./Card.module.css"
import { NavLink } from "react-router-dom";

function Card({ image, title, description }) {
  const cardStyle = {
    backgroundImage: `url(${image})`,
  };
    return (
      <>
        <div className={styles.cardContainer} >
          <NavLink to="/ministerios" style={{ textDecoration: 'none' }}>
          <div className={`${styles.backgroundImage}`} style={cardStyle}></div>
              <div className={styles.content}>
                <h2 className={styles.h2}>{title}</h2>
                <p className={styles.p}>{description}</p>
              </div>
          </NavLink>
        </div>
      </>
    );
  }

export default Card;