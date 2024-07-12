import React from "react";
import { Link } from "react-router-dom"
import styles from "./Cabecera.module.css"
import logo from "./LogoMain.png"
import CabeceraLink from "../CabeceraLink/CabeceraLink"

function Cabecera(){
    return(
        <header className={styles.cabecera}>
            <Link to="/">
                <section className={styles.logoContainer}>
                    <img src={logo} alt="Logo Alura"/> 
                </section>
            </Link>
            <nav>
            <CabeceraLink url="./" className={`${styles.CabeceraLink} ${styles.homeLink}`}>
             Home
            </CabeceraLink>
             <CabeceraLink url="./NuevoVideo" className={`${styles.CabeceraLink} ${styles.nuevoVideoButton}`}>
            
              Nuevo Video 
             </CabeceraLink>
            </nav>
        </header>
    )
}


export default Cabecera