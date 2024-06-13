import style from './Servicos.module.css';
import Logo from "../../utils/assets/logo.svg";
import { getId } from '../../services/auth';
import LogoAgk from "../../utils/assets/agkLogo.svg";
import LogoConfeitaria from "../../utils/assets/logoConfeitaria.svg";
import LogoCostura from "../../utils/assets/logoCostura.svg";
import LogoFotografo from "../../utils/assets/logoFotografo.svg";
import LogoProg from "../../utils/assets/logoProg.svg";
import NavBar from '../../components/navBar/NavBar';
import { FormControl, InputGroup } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnowflake, faShirt, faChampagneGlasses, faComputer, faHouse, faSearch } from "@fortawesome/free-solid-svg-icons";
import CardServico from '../../components/cardServico/CardServico';
import CardRanking from '../../components/ranking/Ranking';
import CarrousselServices from '../../components/carrosselService/CarrosselServices';

const Servicos = ({ onFilterChange }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        if (onFilterChange) {
            onFilterChange(e.target.value);
        }
    };

    useEffect(() => {
        window.onload = function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };
    }, []);

    console.log('================================');
    console.log(getId());
    console.log('================================');

    return (
        <main id={style["principalServicos"]}>
            <NavBar logoInicio={Logo} />
            <section id={style["filtro"]}>
                <div className={style["topicosFiltro"]}>
                    <ul>
                        <div>
                            <li className={style["filterBtn"]}>Refrigeração</li>
                            <FontAwesomeIcon icon={faSnowflake} className={style["ciano"]} />
                        </div>
                        <div>
                            <li className={style["filterBtn"]}>Moda</li>
                            <FontAwesomeIcon icon={faShirt} className={style["laranja"]} />
                        </div>
                        <div>
                            <li className={style["filterBtn"]}>Eventos</li>
                            <FontAwesomeIcon icon={faChampagneGlasses} className={style["ciano"]} />
                        </div>
                        <div>
                            <li className={style["filterBtn"]}>tecnologia</li>
                            <FontAwesomeIcon icon={faComputer} className={style["laranja"]} />
                        </div>
                        <div>
                            <li className={style["filterBtn"]}>Domésticos</li>
                            <FontAwesomeIcon icon={faHouse} className={style["ciano"]} />
                        </div>
                    </ul>
                </div>
                <InputGroup className={style["searchInput"]}>
                    <FormControl
                        placeholder="Pesquisar serviços..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className={style["inputBusca"]}
                    />
                    <InputGroup.Text className={style["iconeBusca"]}>
                        <FontAwesomeIcon icon={faSearch} />
                    </InputGroup.Text>
                </InputGroup>
            </section>
            <aside id={style["bannerServicos"]}>
                <CarrousselServices />

            </aside>
            <section id={style["conteudoServicos"]}>
                <section id={style["areaServicos"]}>
                    <CardServico
                        imagemSrc={LogoAgk}
                        altText="logo da empresa agk ar condicionados"
                        titulo="AGK Ar condicionados"
                        categoria="Refrigeração"
                        descricao="A AGK atua no mercado desde 2010, visando sempre soluções que compatibilizam beleza, economia, tecnologia responsável."
                        nota={5.0}
                        descricaoLimite={120}
                        styles={style}
                    />
                    <CardServico
                        imagemSrc={LogoCostura}
                        altText="logo da costureira"
                        titulo="RR Costuras"
                        categoria="Moda"
                        descricao="Duas costureiras com os melhores seviços de costura da zona norte de SP, fazemos ajustes e reformas em geral."
                        nota={4.7}
                        descricaoLimite={120}
                        styles={style}
                    />
                </section>
                <section id={style["rankingServicos"]} className={style["rankingServicos"]}>

                    <div className={style["divTitulo"]}>
                        <h3 className={style["tituloRankingServicos"]}>Ranking semanal</h3>
                    </div>
                    <CardRanking
                        imagemSrc={LogoAgk}
                        altText="logo da empresa agk ar condicionados"
                        titulo="AGK Ar condicionados"
                        categoria="Refrigeração"
                        nota={5.0}
                    />
                    <CardRanking
                        imagemSrc={LogoCostura}
                        altText="logo rr costuras"
                        titulo="RR Costuras"
                        categoria="Moda"
                        nota={4.8}
                    />
                    <CardRanking
                        imagemSrc={LogoConfeitaria}
                        altText="logo da confeitaria"
                        titulo="Confeiteira Carmen"
                        categoria="Eventos / Confeitaria"
                        nota={4.6}

                    />
                    <CardRanking
                        imagemSrc={LogoFotografo}
                        altText="logo do fotógrafo"
                        titulo="Felipe Fotógrafo"
                        categoria="Eventos"
                        nota={4.7}
                    />
                    <CardRanking
                        imagemSrc={LogoProg}
                        altText="Logo da Paula Programadora"
                        titulo="Paula Programadora"
                        categoria="Tecnologia"
                        nota={4.7}
                    />
                </section>
            </section>
        </main >
    );
};

export default Servicos;
