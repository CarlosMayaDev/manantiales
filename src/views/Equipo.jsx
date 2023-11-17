import React from "react";
import styles from "./Equipo.module.css"
import imagen1 from "../assets/IMG_3652.JPG";


const Equipo = () => {
    return (
        <>
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