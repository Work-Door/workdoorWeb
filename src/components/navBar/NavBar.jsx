import React from "react";
import { useLocation } from "react-router-dom";
import style from "../navBar/NavBar.module.css";
import Logo from "../../utils/assets/logo.svg";
import ImagemPerfil from "../../utils/assets/iconUser.png";
import { HashLink as Link } from 'react-router-hash-link';

const NavBar = ({ logoInicio }) => {
  const location = useLocation();
  const isServicosPage = location.pathname === "/servicos";
  const isPerfilPage = location.pathname === "/empresa/perfil";

  function handleLinkClick(event) {
    event.preventDefault();
    const id = event.currentTarget.getAttribute('href').substring(1); // Use event.currentTarget instead of event.target
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn(`Element with id ${id} not found.`);
    }
  }
  return (
    <nav
      className={`${style["navBar"]} ${isServicosPage ? style["navBarServicos"] : ""
        } ${isPerfilPage ? style["navBarPerfil"] : ""}`}
    >
      <div className={style["logo"]}>
        <Link to="/">
          <img src={Logo} alt="logo WorkDoor" />
        </Link>
      </div>
      {isServicosPage ? (
        <div className={style["imgPerfil"]}>
          <img src={ImagemPerfil} alt="Imagem do serviço" />
        </div>
      ) : isPerfilPage ? (
        <>
          <div id={style["menuLista"]}>
            <ul>
              <Link somoth to="/#comoFunciona" className={style["btnLink"]}>
                {" "}
                <li>Inicio</li>{" "}
              </Link>
              <Link to={"/servicos"} somoth className={style["btnLink"]}>
                {" "}
                <li>Serviços</li>{" "}
              </Link>
            </ul>
          </div>
          <div className={style["imgPerfil"]}>
            <img src={ImagemPerfil} alt="Imagem do serviço" />
          </div>
        </>
      ) : (
        <>
          <div id={style["menuLista"]}>
            <ul>
              <li className={style["btnLink"]}>
                <a href="#ComoFunciona">Como funciona</a>
              </li>
              <li><a href="#Servicos">Serviços</a></li>
              <li><a href="#SobreNos">Sobre Nós</a></li>
              <li><a href="#Contato">Contato</a></li>
            </ul>
          </div>
          <div id={style["btnsTopo"]}>
            <button id={style["btnLogin"]}>
              <Link to={"/login"} somoth className={style["btnLink"]}>
                {" "}
                Login{" "}
              </Link>
            </button>
            <span className={style["linhaMeio"]}></span>
            <button id={style["btnCadastro"]}>
              <Link to={"/cadastro"} somoth className={style["btnLink"]}>
                {" "}
                Cadastro{" "}
              </Link>
            </button>
          </div>
        </>
      )}
    </nav>
  );
};

export default NavBar;
