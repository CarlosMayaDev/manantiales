import React from "react";
// import styles from "../views/Formacion.module.css"
import image1 from "../assets/Escuelas de Formacion Collage.png"
import image2 from "../assets/Escuela EnAmorArte.png"
import image3 from "../assets/Avanza.png"
import image4 from "../assets/Transforma.png"

import styles from "./Formacion.module.css"

const Formacion = () => {
    return (
        <>

            <div>
                <img src={image1} alt="" style={{ width: '100%' }}/>
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

            <div className={styles.enamorarteContainer}>
                <img src={image2} alt="" className={styles.enamorarteImage} />
                <div className={styles.enamorarteText}>
                    <h2 className={styles.h2}>
                    EnAmorArte es una escuela dirigida a padres, madres y cuidadores de nuestros niños y niñas, que tiene como fin mejorar y brindar herramientas para una crianza amorosa y nutrida, mitigando así los índices de violencia contra nuestra niñez por parte de sus cuidadores y formar a nuestras familias en principios bíblicos.
                    </h2>
                </div>
            </div>

            <div className={styles.avanzaContainer}>
                <div className={styles.avanzaText}>
                        <h1 className={styles.h1}>
                            ESCUELA AVANZA
                        </h1>
                        <h2 className={styles.h2}>
                        Es una escuela de sanidad interior y liberación, enfocada en la formación del carácter y en el conocimiento de la palabra de Dios. Los temas son una secuencia ordenada que reafirma nuestra identidad en el mundo y la iglesia.
                        </h2>
                </div>
                <img src={image3} alt="" className={styles.avanzaImage} />
            </div>

            <div className={styles.transformaContainer}>
                <div className={styles.transformaText}>
                        <h1 className={styles.h1}>
                            TRANSFORMA
                        </h1>
                    <h2 className={styles.h2}>
                    Es una escuela para formación de líderes enfocada en desarrollar la vocación que cada persona tiene, llevándolos a descubrir su potencial y como aplicarlo a su vida personal, ministerial y en la extensión del Reino de Dios.
                    </h2>
                </div>
                <img src={image4} alt="" className={styles.transformaImage} />
            </div>
        </>
        )
};

export default Formacion;