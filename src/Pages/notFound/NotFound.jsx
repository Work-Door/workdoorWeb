import React from "react";
import styles from "./NotFound.module.css";
import imgNotFound from "../../utils/assets/404.svg";
import { Link } from "react-router-dom";


const NotFound = () => {
    return (
    
        <>
          
          <Link to="/" className={styles["contentMain"]}>
            <div className={styles["content"]}> {/* Define um contêiner com classe para estilização específica */}
                <img src={imgNotFound} alt="Erro 404" /> {/* Mostra uma imagem de erro 404 */}
            </div>
        </Link>
        </>
    );
};

export default NotFound;