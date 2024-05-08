import style from './Servicos.module.css';
import Logo from "../../utils/assets/logo.svg";
import LogoAgk from "../../utils/assets/agkLogo.svg";
import LogoConfeitaria from "../../utils/assets/logoConfeitaria.svg";
import LogoCostura from "../../utils/assets/logoCostura.svg";
import NavBar from '../../components/navBar/NavBar';
import { FormControl, InputGroup } from "react-bootstrap";
import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnowflake, faShirt, faChampagneGlasses, faComputer, faHouse, faSearch } from "@fortawesome/free-solid-svg-icons";
import CardServico from '../../components/cardServico/CardServico';
import CardRanking from '../../components/ranking/Ranking';

const Servicos = ({ onFilterChange }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        // Passar o termo de busca para o componente pai, se necessário
        if (onFilterChange) {
            onFilterChange(e.target.value);
        }
    };
    // const [ativo, setAtivo] = useState(false);
    // const rankingRef = useRef(null);
    // useEffect(() => {
    //     const handleScroll = () => {
    //         const scrollTop = window.pageYOffset;
    //         const divTop = rankingRef.current.getBoundingClientRect().top;

    //         if (scrollTop > divTop) {
    //             setAtivo(true);
    //         } else {
    //             setAtivo(false);
    //         }

    //         // Anime a mudança de posição com base no estado 'ativo':
    //         if (ativo) {
    //             rankingRef.current.style.top = '0px'; // Animar para o topo
    //         } else {
    //             rankingRef.current.style.top = '50.2vh'; // Animar de volta à posição inicial
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, [rankingRef, ativo]);

    useEffect(() => {
        window.onload = function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };
    }, []);


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

            </aside>
            <section id={style["conteudoServicos"]}>
                <section id={style["areaServicos"]}>
                    <CardServico
                        imagemSrc={LogoAgk}
                        altText="logo da empresa agk ar condicionados"
                        titulo="AGK Ar condicionados"
                        categoria="Refrigeração"
                        descricao="A AGK atua no mercado desde 2010, visando sempre soluções que compatibilizam beleza, economia, tecnologia responsável."
                        nota={4.8}
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

                    <CardServico
                        imagemSrc={LogoConfeitaria}
                        altText="logo da confeitaria"
                        titulo="Confeiteira Carmen"
                        categoria="Eventos / Alimentação"
                        descricao="Os melhores bolos da região, fazemos encomendas para festas e eventos em geral."
                        nota={4.7}
                        descricaoLimite={120}
                        styles={style}
                    />
                    <CardServico
                        imagemSrc={LogoAgk}
                        altText="logo da empresa agk ar condicionados"
                        titulo="AGK Ar condicionados"
                        categoria="Refrigeração"
                        descricao="A AGK atua no mercado desde 2010, visando sempre soluções que compatibilizam beleza, economia, tecnologia responsável."
                        nota={4.8}
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

                    <CardServico
                        imagemSrc={LogoConfeitaria}
                        altText="logo da confeitaria"
                        titulo="Confeiteira Carmen"
                        categoria="Eventos / Alimentação"
                        descricao="Os melhores bolos da região, fazemos encomendas para festas e eventos em geral."
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
                        nota={4.8}
                    />
                    <CardRanking
                        imagemSrc={LogoAgk}
                        altText="logo da empresa agk ar condicionados"
                        titulo="AGK Ar condicionados"
                        categoria="Refrigeração"
                        nota={4.8}
                    />
                    <CardRanking
                        imagemSrc={LogoAgk}
                        altText="logo da empresa agk ar condicionados"
                        titulo="AGK Ar condicionados"
                        categoria="Refrigeração"
                        nota={4.8}
                    />
                    <CardRanking
                        imagemSrc={LogoAgk}
                        altText="logo da empresa agk ar condicionados"
                        titulo="AGK Ar condicionados"
                        categoria="Refrigeração"
                        nota={4.8}
                    />
                    <CardRanking
                        imagemSrc={LogoAgk}
                        altText="logo da empresa agk ar condicionados"
                        titulo="AGK Ar condicionados"
                        categoria="Refrigeração"
                        nota={4.8}
                        className={style["bordaCiano"]}
                    />
                </section>
            </section>
        </main >

    );
};

export default Servicos;
