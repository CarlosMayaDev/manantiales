import React from "react";
// import styles from "../views/Formacion.module.css"
import image from "../assets/Escuelas de Formacion Collage.png"
import styles from "./Formacion.module.css"

const Formacion = () => {
    return (
        <>

        <div>
            <img src={image} alt="" style={{ width: '100%' }}/>
        </div>

        <div className={styles.formandoContainer}>
            <h1 className={styles.h1}>
                FORMANDO GENERACIONES
            </h1>
            <h2 className={styles.h2}>
            La Escuela de Discipulado "Formando Generaciones" te invita a dar tus primeros pasos en un viaje transformador. 
            Al decidir abandonar tu antiguo estilo de vida, te ofrecemos una guía sólida para iniciar una nueva vida en Cristo Jesús. <br /> <br />
            Nuestro programa no solo incluye el bautismo en agua como un acto simbólico de obediencia, sino también el bautismo en el Espíritu Santo, brindándote el poder necesario para superar los desafíos de la vida.
            </h2>
        </div>
        </>
        )
};

export default Formacion;