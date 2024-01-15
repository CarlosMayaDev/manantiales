import React from "react";
import styles from "../views/Ministerios.module.css"
import imagenInfantil from "../assets/LOGOCONQUISTADORES.PNG";
import imagenEvangelizar from "../assets/97NmG-uEEaeP42qtLSrGid8gB972nlIc9BufKXiC_JU=_plaintext_638363737802768982.jpg";
import imagenAdoracion from "../assets/ADORACION1.jpeg";
import imagenStaff from "../assets/STAFF2.png";
import imagenMultimedia from "../assets/MULTIMEDIA3.jpg";


const Ministerios = () => {
    return (
        <>
            <div className={styles.imageContainer}>
                <h1 className={styles.h1}>MINISTERIOS</h1>
                <h2 className={styles.h2}>Descubre los diversos ministerios que forman parte de nuestra comunidad. Cada uno tiene como objetivo fortalecer la fe, crecimiento espiritual y contribuir al bienestar de todos. <br />¡Únete y participa!
</h2>
            </div>
            <div className={styles.empoderandoContainer}>
                <h5 className={styles.h5}>Cada uno según el don que ha recibido, minístrelo a los otros, como buenos administradores de la multiforme gracia de Dios. <br />1 Pedro 4:10</h5>
            </div>

            <div className={styles.ministeriosContainer}>
                 <h1 className={styles.h7}>Ministerio Infantil – Conquistadores del Reino</h1>
                <p className={styles.p}>
                El ministerio infantil Conquistadores del Reino, tiene cómo finalidad formar niños que se instruyen en el temor a Dios y los principios de su palabra. <br />Niños que crecen en gracia y sabiduría; que conocen y comparten las buenas nuevas, y caminan  afirmando el propósito de Dios en sus vidas apasionándose por el servicio y entrega de lo mejor al Señor.
                </p>
            </div>
            <div className={styles.ministeriosDescripcionContainer}>
                <div>
                    <h3 className={styles.h3}>Que buscamos?</h3>
                <p className={styles.p}>Nuestro anhelo es que cada niño que participe en nuestro ministerio reconozca su necesidad de Jesús como Redentor. <br />Esto se logra al concientizar sobre el pecado que nos aleja de Dios y al destacar el propósito perfecto que Dios tiene para cada uno de ellos. <br />A medida que los niños crecen en el ministerio, proporcionamos un acompañamiento personalizado para atender sus diferentes necesidades.
</p>
                </div>
                <img src={imagenInfantil} alt="FotoInfantil" />
            </div>

        
            <div className={styles.ministeriosContainer}>
                 <h1 className={styles.h7}>Eje adolescentes – ManantialEs Familia</h1>
                <p className={styles.p}>
                    Somos un equipo de trabajo que busca acompañar al adolescente en su paso hacia la juventud, esto desde una perspectiva bíblica y Cristo céntrica. <br />
                    El equipo focaliza sus esfuerzos en generar un ambiente de confianza, seguridad, crecimiento y amor: Una familia en la cual el adolescente puede aprender junto a otros que estan pasando por esta etapa.
                </p>
            </div>
            <div className={styles.ministeriosDescripcionContainer2}>
            <img src={imagenEvangelizar} alt="FotoEvangelizar" />
                <div>
                    <h3 className={styles.h3}>Que buscamos?</h3>
                    <p className={styles.p}>Que cada asistente reconozca su necesidad de Jesús como redentor, esto al concientizar del pecado que les ha alejado de Dios y del propósito perfecto que tiene para cada uno. <br /><br />
                    A medida que el adolescente crece en el ministerio realizamos acompañamiento personalizado en las diferentes necesidades que cada uno tiene.</p>
                </div>
            </div>

            <div className={styles.ministeriosContainer}>
                 <h1 className={styles.h7}>Ministerio de Adoración IDENTIDAD WORSHIP</h1>
                <p className={styles.p}>
                IDENTIDAD WORSHIP es nuestro apasionado grupo de adoración, dedicado a elevar la alabanza a Dios de una manera auténtica y significativa. Desde una perspectiva bíblica y centrada en Cristo, nuestro grupo se esfuerza por crear un ambiente de adoración que inspire confianza, seguridad, crecimiento y amor.
                </p>
            </div>
            <div className={styles.ministeriosDescripcionContainer}>
                <div>
                    <h3 className={styles.h3}>Que buscamos?</h3>
                    <p className={styles.p}>Buscamos que cada persona que se une a IDENTIDAD WORSHIP pueda experimentar una profunda conexión espiritual a través de la música. Queremos que reconozcan la importancia de Jesús como Redentor y se sumerjan en la adoración, llevando el mensaje de salvación y amor a través de cada acorde y melodía.
</p>
                </div>
                <img src={imagenAdoracion} alt="FotoAdoracion" />
            </div>

        
            <div className={styles.ministeriosContainer}>
                 <h1 className={styles.h7}>STAFF (Diaconado)</h1>
                <p className={styles.p}>
                Somos un grupo comprometido de servidores que desempeñan un papel fundamental en el ministerio de la iglesia. <br />Dedicados a servir a la congregación y a satisfacer las necesidades prácticas y espirituales de los miembros. <br />Somos llamados a seguir el ejemplo de Jesús al servir humildemente, brindar apoyo y cuidado pastoral, y asegurarse de que las necesidades de la comunidad sean atendidas.
                </p>
            </div>
            <div className={styles.ministeriosDescripcionContainer2}>
            <img src={imagenStaff} alt="FotoStaff" />
                <div>
                    <h3 className={styles.h3}>Que buscamos?</h3>
                    <p className={styles.p}>Buscamos ser un canal tangible del amor de Cristo al satisfacer las necesidades prácticas de la congregación. <br />Esto incluye brindar apoyo a los miembros en momentos de dificultad, coordinar actividades de servicio comunitario y asegurarse de que todos se sientan bienvenidos y cuidados en la iglesia. <br />Además, buscamos inspirar a otros a participar activamente en el servicio y fomentar un ambiente de comunidad y apoyo mutuo.</p>
                </div>
            </div>

            <div className={styles.ministeriosContainer}>
                 <h1 className={styles.h7}>Red de Intercesores</h1>
                <p className={styles.p}>
                    Somos un equipo de trabajo que busca acompañar al adolescente en su paso hacia la juventud, esto desde una perspectiva bíblica y Cristo céntrica. <br />
                    El equipo focaliza sus esfuerzos en generar un ambiente de confianza, seguridad, crecimiento y amor: Una familia en la cual el adolescente puede aprender junto a otros que estan pasando por esta etapa.
                </p>
            </div>
            <div className={styles.ministeriosDescripcionContainer}>
                <div>
                    <h3 className={styles.h3}>Que buscamos?</h3>
                    <p className={styles.p}>Que cada asistente reconozca su necesidad de Jesús como redentor, esto al concientizar del pecado que les ha alejado de Dios y del propósito perfecto que tiene para cada uno. <br /><br />
                    A medida que el adolescente crece en el ministerio realizamos acompañamiento personalizado en las diferentes necesidades que cada uno tiene.</p>
                </div>
                <img src={imagenEvangelizar} alt="FotoEvangelizar" />
            </div>

        
            <div className={styles.ministeriosContainer}>
                 <h1 className={styles.h7}>Multimedia</h1>
                <p className={styles.p}>
                Exploramos la fusión entre la fe y la tecnología. Nuestro Ministerio de Multimedia se sumerge en el uso creativo de las herramientas digitales para llevar el mensaje de esperanza y amor a través de diversos medios.
                </p>
            </div>
            <div className={styles.ministeriosDescripcionContainer2}>
            <img src={imagenMultimedia} alt="FotoMultimedia" />
                <div>
                    <h3 className={styles.h3}>Que buscamos?</h3>
                    <p className={styles.p}>Reconociendo la importancia de las redes sociales y la tecnología en la sociedad actual, nuestro equipo se esfuerza por aprovechar estas herramientas para expandir el Reino de Dios. Buscamos llegar a vidas en todos los rincones del mundo, llevando el mensaje de salvación y compartiendo la fe de manera relevante y significativa.
</p>
                </div>
            </div>

        </>

    )
}

export default Ministerios; 
