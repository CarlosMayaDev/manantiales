import React from "react";
import styles from "../views/Contactenos.module.css"
import whatsappLogo from "../assets/whatsapp.png"
import correoLogo from "../assets/correo.png"
import facebookLogo from "../assets/facebook.png"
import instagramLogo from "../assets/instagram.png"
import youtubeLogo from "../assets/youtube.png"

const Contactenos = () => {
    return (
        <>
            <div className={styles.contactanosContainer}>
                <h1 className={styles.h1}>CONTÁCTANOS</h1>
                <div className={styles.contactanosContainerSub}>
                    <div className={styles.whatsappContainer}>
                        <h2 className={styles.h2}>Déjanos un mensaje</h2>
                        <p className={styles.p}> <br />Conversemos por WhatsApp. <br />Puedes contactarnos en el siguiente número: <br />
                        300 5011257</p>
                        <img src={whatsappLogo} alt="" className={styles.whatsappImg}/>
                    </div>
                    <div className={styles.correoContainer}>
                        <h2 className={styles.h2}>Escríbenos a nuestro correo electrónico</h2>
                        <p className={styles.p}> <br />manandeamorypoder@gmail.com</p>
                        <img src={correoLogo} alt="" className={styles.correoImg}/>

                        <h2 className={styles.h2}>Síguenos en nuestras redes: </h2>
                            <div className={styles.logosContainer}>
                                <img src={facebookLogo} alt="" className={styles.facebookImg}/>
                                <img src={instagramLogo} alt="" className={styles.facebookImg}/>
                                <img src={youtubeLogo} alt="" className={styles.facebookImg}/>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Contactenos;