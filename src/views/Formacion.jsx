import React from "react";
// import styles from "../views/Formacion.module.css"
import image from "../assets/Escuelas de Formacion Collage.png"

const Formacion = () => {
    return (
        <>

        <div>
            <img src={image} alt="" style={{ width: '100%' }}/>
        </div>
            {/* <div className={styles.imageContainer}>
                <h1 className={styles.h1}>ESCUELAS DE FORMACIÓN Y CRECIMIENTO</h1>
                    <h2 className={styles.h2}>
                        Descubre nuestras escuelas y programas de formación 
                    </h2>        
                </div> */}
        </>
        )
};

export default Formacion;