import React from "react";
import styles from "../components/Donaciones.module.css";
import { Link } from "react-router-dom";

const Donaciones = () => {
  return (
    <div className={styles.donacionesContainer}>
      <h1 className={styles.h7Form}>Quieres hacer tu contribución?</h1>
      <p className={styles.textoDonaciones}>
        Tu generosidad nos permite continuar con nuestra misión y ministerios. Agradecemos tu apoyo.
      </p>
    <Link to="/contribuciones">
        <button className={styles.botonDonar}>Donar Ahora</button>
    </Link>
    </div>
  );
};

export default Donaciones;