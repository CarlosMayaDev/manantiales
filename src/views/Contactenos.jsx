import React from "react";
import styles from "../views/Contactenos.module.css"
import whatsappLogo from "../assets/whatsapp.png"
// import correoLogo from "../assets/correo.png"
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
                        {/* <h2 className={styles.h2}>WhatsApp. </h2> */}
                        <p className={styles.p}>Puedes contactarnos en el siguiente número o dale click al ícono de Whatsapp</p>
                        <h2 className={styles.h2}><br />300 5011257</h2>
                    </div>
                </div>
                <div className={styles.correoContainer}>
                        <div>
                            <h2 className={styles.p}><br />Escríbenos a nuestro correo electrónico:</h2><br />
                            <p className={styles.h2}>manandeamorypoder@gmail.com</p>
                        </div>
                        <div className={styles.logosContainer}>
                                <h2 className={styles.p}>Síguenos en nuestras redes: </h2>
                                <a href="https://www.facebook.com/profile.php?id=100068672940551" target="_blank" rel="noreferrer"><img src={facebookLogo} alt="" className={styles.facebookImg}/></a>
                                <a href="https://www.instagram.com/manan_de_amor_y_poder_/" target="_blank" rel="noreferrer"><img src={instagramLogo} alt="" className={styles.instagramImg}/></a>
                                <a href="https://www.youtube.com/@manantialesdeamorypoder7941" target="_blank" rel="noreferrer"><img src={youtubeLogo} alt="" className={styles.youtubeImg}/></a>
                                <a href="https://wa.me/3005011257" target="_blank" rel="noreferrer"><img src={whatsappLogo} alt="" className={styles.whatsappImg}/></a>

                        </div>
                </div>
            </div>
        </>
    )
};

export default Contactenos;