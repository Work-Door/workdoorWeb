// Importa React de 'react' para criar componentes
import React from "react";
import NavBar from "../../components/navBar/NavBar";
import logo from "../../utils/assets/logo.png";
import style from "./Home.module.css";
import imgTopo from "../../utils/assets/imgTopo.svg";
import imgSobreNos from "../../utils/assets/imgSobreNos.svg";
import imgCostura from "../../utils/assets/imgCostura.svg";
import imgArCondicionado from "../../utils/assets/imgArCondicionado.svg";
import imgConfeiteira from "../../utils/assets/imgConfeiteira.svg";
import iconePessoas from "../../utils/assets/icones/iconePessoas.svg";
import iconeEnviarLaranja from "../../utils/assets/icones/iconeEnviarLaranja.svg";
import iconeLapis from "../../utils/assets/icones/iconeLapis.svg";
import iconeMissao from "../../utils/assets/icones/iconeMissao.svg";
import iconeVisao from "../../utils/assets/icones/iconeVisao.svg";
import iconeValores from "../../utils/assets/icones/iconeValores.svg";
import ComoFuncionaItem from '../../components/areaComoFuncHome/AreaComoFuncHome';
import CardServicoCarroselHome from '../../components/carrosselHome/CarrosselHome';
import CardAboutUs from '../../components/cardAboutUs/CardAboutUs';
import Footer from '../../components/footer/Footer';

const Home = () => {
    return (
        <main className={style["main"]}>
            <NavBar logoInicio={logo} /> {/* Inclui a NavBar no topo da página, passando o logo como propriedade */}
            <section id={style["principalTopo"]}>
                <article id={style["esquerdaTopo"]}>
                    <p>Bem-vindo ao WorkDoor</p>
                    <h1>Abrindo<span className={style["ciano"]}> portas </span>para o seu negócio</h1>
                    <p>Faça seu cadastro para conhecer um novo mundo de oportunidades</p>
                    <div>
                        <button id={style["btnPrincipal"]} tabindex="8">Comece Já</button>
                    </div>
                </article>
                <article id={style["direitaTopo"]}>
                    <div>
                        <img src={imgTopo} alt="imagem que representa" />
                    </div>
                </article>
            </section>

            <section id={style["comoFunciona"]}>
                <div className={style["divTitulo"]}>
                    <h1 className={style["tituloCentro"]}>Impulsione seus serviços de forma Fácil</h1>
                </div>
                <div id={style["componentesComoFunc"]}>

                    <ComoFuncionaItem
                        imagemSrc={iconePessoas}
                        altText="icone de usuarios"
                        titulo="Faça seu cadastro"
                        texto="Crie sua conta na WorkDoor de uma maneira simples e rápida e comece a aproveitar todas as oportunidades."
                    />
                    <ComoFuncionaItem
                        imagemSrc={iconeEnviarLaranja}
                        altText="icone de usuarios"
                        titulo="Divulgue seus serviços"
                        texto="Após criar seu cadastro, entre no seu perfil, edite da maneira que desejar, e comece a divulgar seus serviços e produtos para que todos possam conhecer."
                    />
                    <ComoFuncionaItem
                        imagemSrc={iconeLapis}
                        altText="icone de usuarios"
                        titulo="Avalie seus contratos"
                        texto="Após a finalização de um contrato, tanto o cliente quanto a empresa poderão avaliar sua experiência."
                    />
                </div>
                <section id={style["areaCardServicoCarroselHome"]}>
                    <div className={style["divTitulo"]}>
                        <h1 className={style["tituloServicos"]}>Serviços existentes</h1>
                    </div>
                    <article id={style["cardServicoCarroselHome"]}>
                        <CardServicoCarroselHome
                            imagemSrc={imgCostura}
                            altText="Imagem do serviço"
                            titulo="RR Costuras"
                            descricao="Os melhores bolos e doces da região, com uma qualidade excepcional."
                            avaliacao={4.8}
                        />
                        <CardServicoCarroselHome
                            imagemSrc={imgArCondicionado}
                            altText="Imagem do serviço"
                            titulo="AGK Ar condicionados"
                            descricao="Empresa que presta serviços de instalações de ar condicionados para sua casa"
                            avaliacao={5.0}
                        />
                        <CardServicoCarroselHome
                            imagemSrc={imgConfeiteira}
                            altText="Imagem do serviço"
                            titulo="Confeiteira Carmen"
                            descricao="Os melhores bolos e doces da região"
                            avaliacao={4.8}
                        />

                    </article>
                </section>
                <section id={style["sobreNos"]}>
                    <div className={style["divTitulo"]}>
                        <h1 className={style["tituloCentro"]}>Nós somos a WorkDoor</h1>
                    </div>
                    <section id={style["sobreNosCorpo"]}>
                        <article id={style["sobreNosEsquerda"]}>
                            <h2>Aqui você imPorta</h2>
                            <p>Nós somos uma equipe apaixonada por empreendedorismo e tecnologia, dedicada a impulsionar o sucesso de micro e pequenas empresas (MPEs) através de soluções inovadoras. Combinamos nossa expertise em desenvolvimento de software com uma profunda compreensão das necessidades e desafios enfrentados pelos empreendedores, para criar uma plataforma que simplifica e automatiza processos, fortalecendo o relacionamento com clientes e aumentando a visibilidade no mercado.</p>
                            <div>
                                <h3>12+<p>Empresas</p></h3>
                                <h3>6+<p>Funcionários</p></h3>
                                <h3>30+<p>Serviços</p></h3>
                            </div>
                        </article>
                        <article id={style["sobreNosDireita"]}>
                            <img src={imgSobreNos} alt="imagem de alguem mexendo no computador" />
                        </article>
                    </section>
                </section>
                <section id={style["proposito"]}>
                    <div className={style["divTitulo"]}>
                        <h1 className={style["tituloCentro"]}><span className={style["cinza"]}>Nosso</span><span className={style["laranja"]}> Propósito </span></h1>
                        <p>Nosso propósito como empresa, é ajudar e transformar a vida de pessoas.</p>
                    </div>
                    <div id={style["propositoCards"]}>
                        <CardAboutUs
                            imagemSrc={iconeMissao}
                            altText="Missão"
                            titulo="Missão"
                            texto="Ser uma plataforma inovadora para MPEs que busca simplificar processos, melhorar relacionamento com clientes e aumentar visibilidade."
                        />

                        <CardAboutUs
                            imagemSrc={iconeVisao}
                            altText="Visão"
                            titulo="Visão"
                            texto="Ser referência em soluções tecnológicas para micro e pequenas empresas no Brasil, proporcionando ferramentas eficazes para seu crescimento."
                        />

                        <CardAboutUs
                            imagemSrc={iconeValores}
                            altText="Valores"
                            titulo="Valores"
                            texto="Ética, empatia, inovação, responsabilidade, respeito, excelência, transparência confiança, trabalho em equipe e honestidade."
                        />
                    </div>
                </section>
            </section>
            <Footer />

        </main>
    );
};
export default Home;
