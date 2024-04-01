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
                        <h2 className={styles.h2}>Hablémos por WhatsApp. </h2>
                        <p className={styles.p}><br />Puedes contactarnos en el siguiente número: <br /></p>
                        <h2 className={styles.h2}><br />300 5011257</h2>
                        <a href="https://wa.me/3005011257" target="_blank" rel="noreferrer"><img src={whatsappLogo} alt="" className={styles.whatsappImg}/></a>
                    </div>
                    <div className={styles.correoContainer}>
                        <h2 className={styles.p}>Escríbenos a nuestro correo electrónico: <br /><br /></h2>
                        <p className={styles.h2}>manandeamorypoder@gmail.com</p>
                        <img src={correoLogo} alt="" className={styles.correoImg}/>

                        <h2 className={styles.h2}><br />Síguenos en nuestras redes: </h2>
                            <div className={styles.logosContainer}>
                                <a href="https://www.facebook.com/profile.php?id=100068672940551" target="_blank" rel="noreferrer"><img src={facebookLogo} alt="" className={styles.facebookImg}/></a>
                                <a href="https://www.instagram.com/manan_de_amor_y_poder_/" target="_blank" rel="noreferrer"><img src={instagramLogo} alt="" className={styles.instagramImg}/></a>
                                <a href="https://www.youtube.com/@manantialesdeamorypoder7941" target="_blank" rel="noreferrer"><img src={youtubeLogo} alt="" className={styles.youtubeImg}/></a>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Contactenos;