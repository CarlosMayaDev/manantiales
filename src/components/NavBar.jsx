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
                <img src="Manantiales_logo1.PNG" alt="" className={styles.logo}/>
                <img src="Manantiales_logo2.PNG" alt="" className={styles.logo2}/>
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
                    <NavLink to={"/conocenos"} className={styles.text}>
                    <h3>CONÓCENOS</h3>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/equipo"} className={styles.text}>
                    <h3>EQUIPO MINISTERIAL</h3>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/ministerios"} className={styles.text}>
                    <h3>MINISTERIOS</h3>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/formacion"} className={styles.text}>
                    <h3>FORMACIÓN</h3>
                    </NavLink>
                </li>

                <li>
                    <NavLink to={"/contribuciones"} className={styles.text}>
                    <h3>DONACIONES</h3>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/palabra"} className={styles.text}>
                    <h3>PALABRA</h3>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/contactenos"} className={styles.text}>
                    <h3>CONTACTENOS</h3>
                    </NavLink>
                </li>
            </ul>   
        </div>
    </nav>
    )
}

export default NavBar;