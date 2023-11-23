import React from "react";
import styles from "./Conocenos.module.css"

const Conocenos = () => {
    return (
        <>
            <div className={styles.imageContainer}>
                <h1 className={styles.h1}>MANANTIALES DE AMOR Y PODER</h1>
                <h2 className={styles.h2}>Bienvenido a Manantiales de Amor y Poder, un espacio dedicado a nutrir el alma y fortalecer la fe. Nos esforzamos por ser una comunidad comprometida con el amor, la enseñanza de la Palabra de Dios y el crecimiento espiritual.
        <br /><br />
        En este rincón virtual, explorarás aguas revitalizantes que inspirarán y guiarán tu viaje espiritual. Estamos aquí para celebrar contigo, compartir la sabiduría divina y construir juntos una comunidad llena de amor y poder.
        <br /><br />
        ¡Únete a nosotros en este emocionante viaje y descubre la maravilla de caminar junto a Manantiales de Amor y Poder!</h2>
            </div>

            <div className={styles.empoderandoContainer}>
            <h5 className={styles.h5}>EMPODERANDO CAMBIOS POSITIVOS</h5>
            </div>

            <div className={styles.empoderandoTexto}>
                <p className={styles.h4}>
                Siguiendo la enseñanza de Jesús, tal como se expresa en Marcos 16:15, la Comunidad de Manantiales de Amor y Poder, como parte activa del cuerpo de Cristo, se embarca con entusiasmo en la misión de la Gran Comisión. Nos esforzamos por impulsar cambios significativos en las familias, buscando crear una sociedad fundamentada en principios y valores inspirados en la sabiduría de la Palabra de Dios. ¡Somos agentes de transformación con un propósito claro y relevante!
                </p>            
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