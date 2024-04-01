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

            <div className={styles.collageContainer}>
                <img src={imagenCollage} alt=""className={styles.collageImage}/>
            </div>

            <div className={styles.descripcion}>
                <h3 className={styles.h3}>Pastores Cristóbal Bravo y Luz Marina Angarita de Bravo</h3>
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
                {/* <img src={imagen1} alt="FotoPastores" /> */}
                <p className={styles.h4}>Durante la llegada de los Pastores Fundadores en el año 2002 la Iglesia contaba con alrededor de 60 asistentes que poco a poco incrementaron a 400 miembros, que han podido ser testigos del esfuerzo y la dedicación que nuestros pastores han tenido para proclamar el nombre de Cristo, esto sin contar los diferentes retos que tuvieron que atravesar para continuar en la construcción del templo, pues no contaban con los recursos económicos, pero sí con la fe enorme de poder tener una propiedad que al día de hoy ya es toda una realidad, aunado a ello nuestros pastores tenían una gran inquietud por que sus hijos se formaran a nivel ministerial y aunque fue un gran esfuerzo trajo consigo grandes frutos, en la actualidad sus tres hijos son pastores: su hija mayor Martha Bravo Angarita casada con el pastor Fabio Pulido y con sus tres hijos, Luz Dayra Pulido Bravo , Cesar Luis Pulido Bravo y Lizeth Pulido Bravo inauguran en el año 2023 la Iglesia Eternamente en la ciudad de Ibagué liderada por su esposo, hijo y ella, quien continua su hijo Edgar Bravo quien en la actualidad se desempeña como pastor en la Iglesia Cristiana Manantiales de Amor y poder junto con su esposa Tirsa Victoria Muñoz y sus dos hijos, Daniel Bravo Muñoz y Nahomy Elizabeth Bravo Muñoz, su hijo menor pastor Oscar Bravo Angarita quien también ejerce su pasturado en la Iglesia Manantiales de Amor y Poder. <br /><br />Todos ellos cuentan con grandes talentos para la música y el liderazgo de muchas generaciones que hoy por hoy hacen parte de la extensión del Reino de Dios.</p>
            </div>
        </>
    )
}

export default Equipo;