import React from "react";
import styles from "./Conocenos.module.css";
import imagenEvangelizar from "../assets/378317721_630360289263064_4111713357532053760_n.jpg";
import imagenAfirmar from "../assets/299980236_6156034497759389_2543737134630714748_n.jpg"
import imagenDiscipular from "../assets/discipular.jpg";
import imagenEnviar from "../assets/enviar.jpg";

const Conocenos = () => {
    return (
        <>
            <div className={styles.imageContainer}>
                <h1 className={styles.h1}>MANANTIALES DE AMOR Y PODER</h1>
                <h2 className={styles.h2}>Bienvenido a Manantiales de Amor y Poder, un espacio dedicado a nutrir el alma y fortalecer la fe. Nos esforzamos por ser una comunidad comprometida con el amor, la enseñanza de la Palabra de Dios y el crecimiento espiritual.
                    <br /><br />
                    ¡Únete a nosotros en este emocionante viaje y descubre la maravilla de caminar junto a Manantiales de Amor y Poder!</h2>
            </div>

            <div className={styles.empoderandoContainer}>
                <h5 className={styles.h5}>EMPODERANDO CAMBIOS POSITIVOS</h5>
            </div>

            <div className={styles.empoderandoTexto}>
                <p className={styles.h4}>
                Siguiendo la enseñanza de Jesús, tal como se expresa en Marcos 16:15, la Comunidad de Manantiales de Amor y Poder, como parte activa del cuerpo de Cristo, se embarca con entusiasmo en la misión de la Gran Comisión. <br /><br />Nos esforzamos por impulsar cambios significativos en las familias, buscando crear una sociedad fundamentada en principios y valores inspirados en la sabiduría de la Palabra de Dios. ¡Somos agentes de transformación con un propósito claro y relevante!
                </p>            
            </div>
            
            <div className={styles.evangelizarContainer}>
                <div>
                    <h3 className={styles.h3}>Evangelizar</h3>
                    <p className={styles.h4}>Compartir el evangelio implica llevar el mensaje positivo del Reino de Dios a quienes enfrentan desafíos espirituales, emocionales y físicos, alcanzando a todas las personas en todo el mundo.</p>
                </div>
                <img src={imagenEvangelizar} alt="FotoEvangelizar" />
            </div>

            <div className={styles.evangelizarContainer}>
                <img src={imagenAfirmar} alt="FotoAfirmar" />
                <div>
                    <h3 className={styles.h3}>Afirmar</h3>
                    <p className={styles.h4}>Establecer el objetivo de transformar a cada creyente en un discípulo y líder sólido en el Reino de Dios, basándolo en los valores y la doctrina bíblica, con el propósito de renovar su mentalidad y lograr una transformación significativa en su vida.</p>
                </div>
            </div>

            <div className={styles.evangelizarContainer}>
                <div>
                    <h3 className={styles.h3}>Discipular</h3>
                    <p className={styles.h4}>Entrenar, capacitar, perfeccionar y apoyar a cada discípulo para que descubra y cumpla el propósito, el llamado y la voluntad de Dios en su vida. Esto implica ayudarle a comprender su identidad como hijo, con derechos, privilegios, herencia y responsabilidades en el Reino de Dios.</p>
                </div>
                <img src={imagenDiscipular} alt="FotoDiscipular" />
            </div>

            <div className={styles.evangelizarContainer}>
                <img src={imagenEnviar} alt="FotoEnviar" />
                <div>
                    <h3 className={styles.h3}>Enviar</h3>
                    <p className={styles.h4}>Empoderar a cada discípulo para que cumpla la voluntad de Dios y alcance su destino, llevando consigo el Reino de Dios a donde quiera que vaya. Esto implica predicar y enseñar la palabra con milagros y prodigios, con el propósito de impactar positivamente en la sociedad. Todo esto se realiza con la intención de transmitir un legado de bendición, prosperidad y justicia a las generaciones futuras.</p>
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