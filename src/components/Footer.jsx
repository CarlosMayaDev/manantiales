import React from "react";
import { Link, NavLink} from "react-router-dom";


const Footer = () => {
    return (
        <footer>
        <p>© 2023 Iglesia Manantiales de Amor y Poder</p>
        <div>
            <span>
                <Link to={"/conocenos"}>
                CONÓCENOS
                </Link>
            </span>
            <span>
                <Link to={"/ministerios"}>
                MINISTERIOS
                </Link>
            </span>
            <span>
                <Link to={"/contribuciones"}>
                CONTRIBUCIONES
                </Link>
            </span>
            <span>
                <Link to={"/palabra"}>
                PALABRA
                </Link>
            </span>
            <span>
                <Link to={"/contactenos"}>
                CONTACTENOS
                </Link>
            </span>
            </div>
        <ul>
            <li>Calle 30 sur # 16b-04 , Soacha, Colombia</li>
            <li>300 501 12 57</li>
            <li>manandeamorypoder@gmail.com</li>
        </ul>
        </footer>
    )
}

export default Footer;