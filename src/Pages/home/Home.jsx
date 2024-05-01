// Importa React de 'react' para criar componentes
import React from "react";
import NavBar from "../../components/navBar/NavBar";
import logo from "../../utils/assets/logo.png";
import style from "./Home.module.css";
import imgTopo from "../../utils/assets/imgTopo.svg";
import iconePessoas from "../../utils/assets/icones/iconePessoas.svg";
import iconeEnviarLaranja from "../../utils/assets/icones/iconeEnviarLaranja.svg";
import iconeLapis from "../../utils/assets/icones/iconeLapis.svg";

// Define o componente funcional Home
const Home = () => {
  return (
    // Fragmento React para agrupar múltiplos elementos sem adicionar um nó extra ao DOM
    <>
    <NavBar logoInicio={logo} /> {/* Inclui a NavBar no topo da página, passando o logo como propriedade */}
    <section id={style["principalTopo"]}>
            <article id={style["esquerdaTopo"]}>
                <p>Bem-vindo ao WorkDoor</p>
                <h1>Abrindo<span className={style["ciano"]}> portas </span>para o seu negócio</h1>
                <p>Faça seu cadastro para conhecer um novo mundo de oportunidades</p>
                <div>
                    <button id={style["btnPrincipal"]}tabindex="8">Comece Já</button>
                </div>
            </article>
            <article id={style["direitaTopo"]}>
                <div>
                    <img src={imgTopo} alt="imagem que representa"/>
                </div>
            </article>
        </section>

        <section id={style["comoFunciona"]}>
            <div className={style["divTitulo"]}>
                <h1 className="tituloComoFunciona">Impulsione seus serviços de forma Fácil</h1>
            </div>
            <section id={style["componentesComoFunc"]}>
                <article>
                    <div className={style["imgIconeComuFunciona"]}>
                      <img src={iconePessoas} alt="icone de usuarios"/>
                    </div>
                    <div>
                        <h3>Faça seu cadastro</h3>
                    </div>
                    <div className={style["textoComoFunc"]}><p>Crie sua conta na WorkDoor de uma maneira simples e rápida e comece a aproveitar todas as
                        oportuindades.</p></div>
                </article>
                <article>
                    <div className={style["imgIconeComuFunciona"]}>
                      <img src={iconeEnviarLaranja} alt="icone de usuarios"/>
                    </div>
                    <div>
                        <h3>Divulgue seus serviços</h3>
                    </div>
                    <div className={style["textoComoFunc"]}><p>Após cirar seu cadastro, entre no seu perfil, edite da maneira que desejar, e comece a divulgar
                        seus serviços e pordutos para que todos possam conhecer.</p></div>
                </article>
                <article>
                    <div className={style["imgIconeComuFunciona"]}>
                     <img src={iconeLapis} alt="icone de usuarios"/>
                    </div>
                    <div>
                        <h3>Avalie seus contratos</h3>
                    </div>
                    <div className={style["textoComoFunc"]}><p> Após a finalização de um contrato, tanto o cliente quanto a empresa poderão avaliar sua
                        experiência.</p></div>
                </article>
            </section>
        </section>
    </>
  );
};
// Exporta o componente Home para que possa ser usado em outras partes da aplicação
export default Home;
