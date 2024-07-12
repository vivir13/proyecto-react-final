import React from "react"
import { Link } from "react-router-dom"
import styles from "./CabeceraLink.module.css"

function CabeceraLink({url, children, className}){
    return(
        <Link to={url} className={`${styles.link}} ${className}`} >
        
        {children}
        
        </Link>
 
    )
}


export default CabeceraLink;