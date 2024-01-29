import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
        <div className={styles.div}>
            <ul className={styles.p}>
                <li>
                    <Link to={"/conocenos"} className={styles.p}>
                    CONÓCENOS
                    </Link>
                </li>
                <li>
                    <Link to={"/ministerios"} className={styles.p}>
                    MINISTERIOS
                    </Link>
                </li>
                <li>
                    <Link to={"/contribuciones"} className={styles.p}>
                    DONACIONES
                    </Link>
                </li>
                {/* <li>
                    <Link to={"/palabra"} className={styles.p}>
                    PALABRA
                    </Link>
                </li> */}
                <li>
                    <Link to={"/contactenos"} className={styles.p}>
                    CONTACTENOS
                    </Link>
                </li>
            </ul>
        </div>
        <p className={styles.p}>© 2023 Iglesia Manantiales de Amor y Poder</p>
        <ul className={styles.p}>
            <li>Calle 30 sur # 16b-04 , Soacha, Colombia</li>
            <li>300 501 12 57</li>
            <li>manandeamorypoder@gmail.com</li>
        </ul>
        </footer>
    )
}

export default Footer;