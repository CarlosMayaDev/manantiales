import React from "react";
import { Link, NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <Link to={"/"}>
                LOGO
            </Link>

            <span>
                <Link to={"/conocenos"}>
                CONÓCENOS
                </Link>
            </span>

            <span>
                <Link to={"/equipo"}>
                EQUIPO MINISTERIAL
                </Link>
            </span>

            <span>
                <Link to={"/ministerios"}>
                MINISTERIOS
                </Link>
            </span>

            <span>
                <Link to={"/formacion"}>
                FORMACIÓN
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

        </nav>
    )
}

export default NavBar;