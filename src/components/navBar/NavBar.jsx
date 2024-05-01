import React from "react";
import style from "../navBar/NavBar.module.css";

const NavBar = ({ logoInicio }) => {
    
    return (
        <nav className={style.navBar}>
            <div className={style.logo}>
                <img src={logoInicio} alt="logo WorkDoor" />
            </div>
            <div id={style["menuLista"]}>
                <ul>
                    <li>Como Funciona</li>
                    <li>Serviços</li>
                    <li>Sobre Nós</li>
                    <li>Contato</li>
                </ul>
            </div>
            <div id={style["btnsTopo"]}>
                <button id={style["btnLogin"]}>Login</button>
                <button id={style["btnCadastro"]}>Cadastro</button>
            </div>
        </nav>
    );
}

export default NavBar;