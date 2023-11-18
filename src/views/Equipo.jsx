import React from "react";
import styles from "./Equipo.module.css"
import imagen1 from "../assets/IMG_3652.JPG";


const Equipo = () => {
    return (
        <>
            <div className={styles.imageContainer}>
                <h1 className={styles.h1}>EQUIPO MINISTERIAL</h1>
                <h2 className={styles.h2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est</h2>
            </div>
            <div className={styles.pastoresContainer}>
                <img src={imagen1} alt="FotoPastores" />
                    <div className={styles.descripcion}>
                        <h3 className={styles.h3}>Pastores Frank Bravo y Tirsa Victoria Muñoz</h3>
                        <p className={styles.h4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
            </div>
        </>
    )
}

export default Equipo;