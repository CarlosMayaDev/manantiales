import React from "react";
import styles from "../views/Contribuciones.module.css"
// import nequiImagen from "../assets/NEQUI.png"
import ImageContribuciones from "../assets/imageContribuciones.png";

const Contribuciones = () => {
    return (
        <>
            <div className={styles.imageContainer}>
                <h1 className={styles.h1}>CONTRIBUCIONES</h1>
                <h2 className={styles.h2}>
                    Ayúdanos a difundir el mensaje divino a través de tus diezmos y ofrendas. <br />Tu colaboración es clave para llevar este mensaje a más personas. <br />¡Gracias por ser parte de esta misión!
                </h2>
            </div>
            <div className={styles.donacionContainer}>
                    {/* <p className={styles.h4}>Realiza tus donaciones en este número vía nequi:</p>
                        <div className={styles.nequiContainer}>
                            <p className={styles.h3}>300 501 1257</p>
                            <img src={nequiImagen} alt="" className={styles.nequiImage}/>
                        </div> */}
                    <img src={ImageContribuciones} alt="Imagen de contribuciones" style={{ width: "100%", height: "auto" }}/>
            </div>
        </>
    )
};

export default Contribuciones;