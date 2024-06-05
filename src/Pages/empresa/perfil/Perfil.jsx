import React from 'react';
import NavBar from '../../../components/navBar/NavBar';
import Logo from "../../../utils/assets/logo.svg";
import LogoAgk from "../../../utils/assets/agkLogo.svg";
import style from "./Perfil.module.css";
import InfoPerfilEmpresa from '../../../components/infoPerfilEmpresa/InfoPerfilEmpresa';

const Perfil = () => {
    const endereco = "R. Eng. Saturnino de Brito, 415 - Tatuapé";

    return (
        <>
            <div id={style["perfilPrincipal"]}>
                <NavBar logoInicio={Logo} />
                <div id={style["areaTopo"]}>
                    {/* Conteúdo do areaTopo, se houver */}
                </div>
            </div>
            <InfoPerfilEmpresa
                logo={LogoAgk}
                nomeEmpresa="Agk Arcondicionados"
                breveDesc="A AGK atua no mercado desde 2010, visando sempre soluções que compatibilizam beleza, economia e tecnologia responsável."
                contratos={412}
                endereco={endereco}
                descricao={`A AGK atua no Mercado desde 2010, visando sempre buscar soluções que compatibilizam
                beleza, economia e tecnologia com responsabilidade.
                Com sede em São Paulo e atuando em todo território nacional, a AGK já instalou sistemas que beneficiaram, indústrias, hospitais, centros administrativos, teatros, supermercados, hotéis, residências entre outros, incluindo obras das mais diversas capacidades e complexidades. O atendimento direcionado às necessidades dos nossos clientes, aliada a experiência e ao profissionalismo de nossos profissionais, garantem a economia do equipamento e a minimizar o impacto ambiental, além de garantir instalações dentro das normas exigidas.`}
            />
        </>
    );
};

export default Perfil;
