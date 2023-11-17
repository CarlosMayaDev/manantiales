import React from "react";
import styles from "./Conocenos.module.css"

const Conocenos = () => {
    return (
        <>
            <div className={styles.imageContainer}>
                <h1 className={styles.h1}>MANANTIALES DE AMOR Y PODER</h1>
                <h2 className={styles.h2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est</h2>
            </div>

            <div className={styles.misionVision}>
                <div className={styles.mision}>
                    <h3 className={styles.h3}>Misión</h3>
                    <p className={styles.h4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className={styles.mision}>
                    <h3 className={styles.h3}>Visión</h3>
                    <p className={styles.h4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
            <div className={styles.horario}>
                <h3 className={styles.h3}>Horarios de servicio</h3>
                <p className={styles.h4}>Viernes 6:30 pm, Domingo 8:00 am y 10:00 am.</p>
            </div>

        </>
    )
}

export default Conocenos;