import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../components/navBar/NavBar';
import Logo from "../../../utils/assets/logo.svg";
import LogoAgk from "../../../utils/assets/agkLogo.svg";
import style from "./Perfil.module.css";
import InfoPerfilEmpresa from '../../../components/infoPerfilEmpresa/InfoPerfilEmpresa';
import Publicacoes from '../../../components/publicacoes/Publicacoes';
import Comentarios from '../../../components/comentarios/Comentarios';

const Perfil = () => {
    const endereco = "R. Hadock LoboRua Haddock Lobo, 595 - Cerqueira César, São Paulo - SP, 01414-001";
    const [selectedButton, setSelectedButton] = useState('Publicações');

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
            <section id={style["areaBotoes"]}>


                <Link className={`${style["linkBtn"]} ${selectedButton === 'Publicações' ? style["selected"] : ''}`} to="" onClick={() => setSelectedButton('Publicações')}>
                    <button>Publicações</button>
                </Link>

                <Link className={`${style["linkBtn"]} ${selectedButton === 'Contratar' ? style["selected"] : ''}`} to="" onClick={() => setSelectedButton('Contratar')}>
                    <button>Contratar</button>
                </Link>

                <Link className={`${style["linkBtn"]} ${selectedButton === 'Comentários' ? style["selected"] : ''}`} to="" onClick={() => setSelectedButton('Comentários')}>
                    <button>Comentários</button>
                </Link>

                <Link className={`${style["linkBtn"]} ${selectedButton === 'Criar Serviço' ? style["selected"] : ''}`} to="" onClick={() => setSelectedButton('Criar Serviço')}>
                    <button>Criar Serviço</button>
                </Link>

            </section>

            <Publicacoes />

            <Comentarios />

        </>
    );
};

export default Perfil;
