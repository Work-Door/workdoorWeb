import React from 'react';
import NavBar from '../../../components/navBar/NavBar';
import Logo from "../../../utils/assets/logo.svg";
import style from "./Perfil.module.css";

function Perfil() {

    return (
        <>
            <div id={style["perfilPrincipal"]}>
                <NavBar logoInicio={Logo} />
                <div id={style["areaTopo"]}>
                    
                </div>
            </div>
        </>
    );
}

export default Perfil;