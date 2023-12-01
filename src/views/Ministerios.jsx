import React from "react";
import styles from "../views/Ministerios.module.css"
import imagenEvangelizar from "../assets/enviar.jpg"

const Ministerios = () => {
    return (
        <>
            <div className={styles.imageContainer}>
                <h1 className={styles.h1}>MINISTERIOS</h1>
                <h2 className={styles.h2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est</h2>
            </div>
            <div className={styles.empoderandoContainer}>
                <h5 className={styles.h5}>Cada uno según el don que ha recibido, minístrelo a los otros, como buenos administradores de la multiforme gracia de Dios. <br />1 Pedro 4:10</h5>
            </div>

            <div className={styles.ministeriosContainer}>
                 <h1 className={styles.h7}>Eje adolescentes – ManantialEs Familia</h1>
                <p className={styles.p}>
                    Somos un equipo de trabajo que busca acompañar al adolescente en su paso hacia la juventud, esto desde una perspectiva bíblica y Cristo céntrica. <br />
                    l equipo focaliza sus esfuerzos en generar un ambiente de confianza, seguridad, crecimiento y amor: Una familia en la cual el adolescente puede aprender junto a otros que estan pasando por esta etapa.
                </p>
            </div>
            <div className={styles.evangelizarContainer}>
                <div>
                    <h3 className={styles.h3}>Evangelizar</h3>
                    <p className={styles.h4}>Compartir el evangelio implica llevar el mensaje positivo del Reino de Dios a quienes enfrentan desafíos espirituales, emocionales y físicos, alcanzando a todas las personas en todo el mundo.</p>
                </div>
                <img src={imagenEvangelizar} alt="FotoEvangelizar" />
            </div>
        </>

    )
}

export default Ministerios; 
