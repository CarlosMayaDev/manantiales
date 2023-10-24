import React, { useState } from "react";
import { Link, NavLink} from "react-router-dom";
import styles from "./NavBar.module.css"

const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    return (
        <nav className={styles.nav}>

            <Link to={"/"}>
                <img src="12A579C4-0A0C-4F20-8873-56741347D7B8.PNG" alt="" className={styles.logo}/>
            </Link>

            {/* <input type="checkbox" id="toggler" /> */}

            <label
                htmlFor="toggler"
                className={styles.hamburger}
                onClick={toggleMenu}
            >
            <i className="ri-menu-line"></i>
             </label>


            <div className={`${styles.menu} ${menuOpen ? styles.open : ""}`}>
            <ul className={styles.list}>
                <li>
                    <Link to={"/conocenos"}>
                    CONÓCENOS
                    </Link>
                </li>
                <li>
                    <Link to={"/equipo"}>
                    EQUIPO MINISTERIAL
                    </Link>
                </li>
                <li>
                    <Link to={"/ministerios"}>
                    MINISTERIOS
                    </Link>
                </li>
                <li>
                    <Link to={"/formacion"}>
                    FORMACIÓN
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
    </nav>
    )
}

export default NavBar;