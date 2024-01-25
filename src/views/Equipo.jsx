import React from "react";
import styles from "./Equipo.module.css"
import imagen1 from "../assets/FamiliaMinisterial1.jpg";
import imagen2 from "../assets/FamiliaMinisterial4.jpg";
import imagenCollage from "../assets/MinisteriosCollage.png";

const Equipo = () => {
    return (
        <>
            {/* <div className={styles.imageContainer}>
                <h1 className={styles.h1}>EQUIPO MINISTERIAL</h1>
                <h2 className={styles.h2}>Conoce al equipo ministerial que lidera nuestra comunidad. <br />Estamos comprometidos a servir, inspirar y guiar a cada persona en su viaje espiritual. <br />Juntos, buscamos glorificar a Dios y ser una fuente de amor y apoyo.</h2>
            </div> */}

            <div className={styles.collageContainer}>
                <img src={imagenCollage} alt=""className={styles.collageImage}/>
            </div>

            <div className={styles.descripcion}>
                <h3 className={styles.h3}>Pastores Frank Bravo y Tirsa Victoria Muñoz</h3>
                <img src={imagen1} alt="FotoPastores" />
                <p className={styles.h4}>Los pastores Edgar Franks y Tirsa Victoria nacieron en Bogotá. Son padres de Daniel y Elizabeth, y su dedicación al ministerio se remonta a su niñez. Ambos cuentan con formación teológica respaldada por el Concilio Asambleas de Dios y la Universidad Teológica del Caribe en Puerto Rico. La pastora Tirsa es la fundadora del Centro Cristiano Nueva Generación en Bogotá y actualmente sirve como pastora asociada en la Iglesia Manantiales de Amor y Poder, donde su esposo ha prestado servicio durante 20 años. <br /><br />
Su visión se encamina en la creación de una comunidad eclesiástica sana y perfectamente equipada para enfrentar los desafíos contemporáneos. <br /><br />Su compromiso con la formación y el servicio refleja su profundo amor por la congregación y su deseo de impactar positivamente en la vida de quienes les rodean.</p>
            </div>

            <div className={styles.familiaContainer}>
                <h5 className={styles.h5}>"En cuanto a mí y a mi casa, serviremos a Jehová."<br />
                Josué 24:15b</h5>
            </div>

            <div className={styles.descripcion}>
                <h3 className={styles.h3}>Pastores Cristóbal Bravo y su esposa Luz Marina Angarita de Bravo</h3>
                <img src={imagen2} alt="FotoPastores" />
                <p className={styles.h4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </>
    )
}

export default Equipo;