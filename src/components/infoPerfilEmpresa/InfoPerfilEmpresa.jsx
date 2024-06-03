import React from 'react';
import style from './InfoPerfilEmpresa.module.css';
import ImagemDaLogo from "../../utils/assets/iconUser.png";


const InfoPerfilEmpresa = () => {
    return (
        <div id={style["container"]}>
           <section>
            <div>
            <img src={ImagemDaLogo} alt="Imagem da logo do perfil" />
            </div>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div></div>
           </section>
           <section></section>
           <section></section>
        </div>
    );
};

export default InfoPerfilEmpresa;