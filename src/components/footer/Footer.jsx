import React from 'react';
import style from './Footer.module.css';
import Logo from "../../utils/assets/logo.svg";

const Footer = () => {
    return (
        <article id={style["footer"]}>
            <section id={style["areaCima"]}>
                <article className={style["divLogo"]}>
                    <img src={Logo} alt="logo do workdoor" />
                    <p>Abrindo portas para o seu negócio </p>
                </article>
                <div>
                    <h3><b>Mapa do site</b></h3>
                    <p>Como funciona</p>
                    <p>Serviços</p>
                    <p>Sobre nós</p>
                </div>
                <div>
                <h3><b>Saiba mais</b></h3>
                    <p>Termos de Uso</p>
                    <p>Política de privacidade</p>
                    <p>‎ </p>
                </div>
                <div>
                <h3><b>Contato</b></h3>
                    <p>FAQ</p>
                    <p>workdoor@outlook.com</p>
                    <p>‎ </p>
                </div>
            </section>
            <section id={style["areaBaixo"]}>
                <p>Todos so direitos reservados a WorkDoor</p>
            </section>
        </article>
    );
};

export default Footer;
