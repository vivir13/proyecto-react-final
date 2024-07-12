import React from "react";
import styles from "./Banner.module.css"; 

function Banner ({img, color}) {
    return(
        <div className={styles.capa} style={{backgroundImage: `url("/img/banner.png")` }}>
            <div className={styles.gradient} style={{ background: `${color}` }}>
                <div className={styles.content}>
                    <div className={styles.textContainer}>
                        <button className={styles.button}>Front End</button>
                        <h1 className={styles.titule}> Challege React </h1>
                        <p> Este challenge es una forma de aprendizaje.
                            Es un mecanismo donde podrás comprometerte en la 
                            resolución de un problema para poder aplicar todos los 
                            conocimientos adquiridos en la formación React. </p>
                    </div>
                    <img src={img} alt="Banner" className={styles.bannerImage} />
                </div>
            </div>
        </div>
    );
}

export default Banner;