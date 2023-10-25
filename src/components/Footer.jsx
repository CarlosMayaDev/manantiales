import React from "react";
import { Link, NavLink} from "react-router-dom";
import styles from "./Footer.module.css";


const Footer = () => {
    return (
        <footer className={styles.footer}>
        <div className={styles.div}>
            <ul>
                <li>
                    <Link to={"/conocenos"}>
                    CONÓCENOS
                    </Link>
                </li>
                <li>
                    <Link to={"/ministerios"}>
                    MINISTERIOS
                    </Link>
                </li>
                <li>
                    <Link to={"/contribuciones"}>
                    CONTRIBUCIONES
                    </Link>
                </li>
                <li>
                    <Link to={"/palabra"}>
                    PALABRA
                    </Link>
                </li>
                <li>
                    <Link to={"/contactenos"}>
                    CONTACTENOS
                    </Link>
                </li>
            </ul>
        </div>
        <p>© 2023 Iglesia Manantiales de Amor y Poder</p>
        <ul>
            <li>Calle 30 sur # 16b-04 , Soacha, Colombia</li>
            <li>300 501 12 57</li>
            <li>manandeamorypoder@gmail.com</li>
        </ul>
        </footer>
    )
}

export default Footer;