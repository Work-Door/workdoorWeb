import React from "react";
import { useLocation } from "react-router-dom";
import style from "../navBar/NavBar.module.css";
import Logo from "../../utils/assets/logo.svg";
import ImagemPerfil from "../../utils/assets/gustavoPerfil.svg";

const NavBar = ({ logoInicio }) => {
    const location = useLocation();
    const isServicosPage = location.pathname === "/servicos";

    return (
        <nav className={`${style["navBar"]} ${isServicosPage ? style["navBarServicos"] : ""}`}>
            <div className={style["logo"]}>
                <img src={Logo} alt="logo WorkDoor" />
            </div>
            {isServicosPage ? (
                <div className={style["imgPerfil"]}>
                    <img src={ImagemPerfil} alt="Imagem do serviço" />
                </div>
            ) : (
                <>
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
                </>
            )}
        </nav>
    );
}

export default NavBar;
