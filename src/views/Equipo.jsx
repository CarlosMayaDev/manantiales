import React from "react";
import styles from "./Equipo.module.css"
import imagen1 from "../assets/FamiliaMinisterial1.jpg";
import imagen2 from "../assets/FamiliaMinisterial4.jpg";
import imagenCollage from "../assets/MinisteriosCollage.png";

const Equipo = () => {
    return (
        <>
            {/* <div className={styles.imageContainer}>
                <h1 className={styles.h1}>EQUIPO MINISTERIAL</h1>
                <h2 className={styles.h2}>Conoce al equipo ministerial que lidera nuestra comunidad. <br />Estamos comprometidos a servir, inspirar y guiar a cada persona en su viaje espiritual. <br />Juntos, buscamos glorificar a Dios y ser una fuente de amor y apoyo.</h2>
            </div> */}

            <div>
                <img src={imagenCollage} alt="" style={{ width: '100%'}}/>
            </div>

            <div className={styles.descripcion}>
                <h3 className={styles.h3}>Pastores Fundadores Cristóbal Bravo y Luz Marina Angarita de Bravo</h3>
                <img src={imagen2} alt="FotoPastores" />
                <p className={styles.h4}>Nuestros pastores oriundos de Boyacá Colombia y quienes al día de hoy llevan casados 50 años han sido parte de un poderoso llamado a la extensión del Reino de Dios. <br /><br />
                Después de 20 años como evangelistas de manera interdenominacional, nuestros Pastores Cristóbal y Luz Marina junto con sus tres hijos Oscar Bravo, Marta Bravo y Edgar Bravo son asignados a tomar lugar en el municipio de Soacha-Cundinamarca en el año 2002 por el presbiterio de asambleas de Dios, con el objetivo de traer restauración y dar inicio al trabajo pastoral en la iglesia cristiana Manantiales de Amor y Poder. <br /><br /></p>
            </div>

            <div className={styles.descripcion}>
                <h3 className={styles.h3}>Pastores Frank Bravo y Tirsa Victoria Muñoz</h3>
                <img src={imagen1} alt="FotoPastores" />
                <p className={styles.h4}>Los pastores Edgar Franks y Tirsa Victoria nacieron en Bogotá. Son padres de Daniel y Elizabeth, y su dedicación al ministerio se remonta a su niñez. Ambos cuentan con formación teológica respaldada por el Concilio Asambleas de Dios y la Universidad Teológica del Caribe en Puerto Rico. La pastora Tirsa es la fundadora del Centro Cristiano Nueva Generación en Bogotá y actualmente sirve como pastora asociada en la Iglesia Manantiales de Amor y Poder, donde su esposo ha prestado servicio durante 20 años. <br /><br />
                Su visión se encamina en la creación de una comunidad eclesiástica sana y perfectamente equipada para enfrentar los desafíos contemporáneos. <br /><br />Su compromiso con la formación y el servicio refleja su profundo amor por la congregación y su deseo de impactar positivamente en la vida de quienes les rodean.</p>
            </div>

            <div className={styles.familiaContainer}>
                <h5 className={styles.h5}>"En cuanto a mí y a mi casa, serviremos a Jehová."<br />
                Josué 24:15b</h5>
            </div>

            <div className={styles.descripcion}>
                <h3 className={styles.h3}>MANANTIALES DE AMOR Y PODER</h3>
                <p className={styles.h4}>Durante la llegada de los Pastores Fundadores en el año 2002, la Iglesia experimentó un notable crecimiento, pasando de tener alrededor de 60 asistentes a contar con 400 miembros. Este crecimiento ha sido testigo del esfuerzo y dedicación de nuestros pastores por proclamar el nombre de Cristo. A pesar de los desafíos financieros y las dificultades en la construcción del templo, la fe inquebrantable de nuestros pastores permitió que su visión de tener una propiedad se convirtiera en una realidad.<br /><br />Además, nuestros pastores tenían una profunda preocupación por la formación ministerial de sus hijos, lo que resultó en un gran esfuerzo con frutos significativos. Actualmente, sus tres hijos son pastores: Martha Bravo Angarita, quien junto a su esposo Fabio Pulido, lidera la Iglesia Eternamente en Ibagué. Edgar Bravo, el hijo menor, ejerce como pastor en la Iglesia Cristiana Manantiales de Amor y Poder, junto con su esposa Tirsa Victoria Muñoz. Oscar Bravo Angarita, también hijo de los pastores principales, ejerce su pastorado en la Iglesia Manantiales de Amor y Poder.<br /><br />Todos ellos son dotados con talentos musicales y de liderazgo, y han sido instrumentos para extender el Reino de Dios a través de muchas generaciones. Los logros de nuestros pastores principales han llevado a un crecimiento significativo en los ministerios, tanto en gracia como en número de personas comprometidas en servir en la obra del Señor. <br /><br />Nos sentimos profundamente orgullosos y bendecidos al celebrar 21 años desde que nuestros pastores, Cristóbal Bravo y Luz Marina Bravo, llegaron al municipio de Soacha para proclamar el nombre de Cristo y continuar expandiendo el Reino de Dios. Queremos expresar nuestro sincero agradecimiento al Concilio de Asambleas de Dios de Colombia, bajo la cobertura del Superintendente Distrital, el RVR Héctor Buitrago, así como al Pastor Luis Alfonso Romero, quien nos brindó apoyo espiritual y nos capacitó para asumir este ministerio pastoral.</p>
            </div>
        </>
    )
}

export default Equipo;