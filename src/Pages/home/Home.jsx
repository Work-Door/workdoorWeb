// Importa React de 'react' para criar componentes
import React from "react";
import NavBar from "../../components/navBar/NavBar";
import logo from "../../utils/assets/logo.png";
import style from "./Home.module.css";
import imgTopo from "../../utils/assets/imgTopo.svg";
import imgCostura from "../../utils/assets/imgCostura.svg";
import imgArCondicionado from "../../utils/assets/imgArCondicionado.svg";
import imgConfeiteira from "../../utils/assets/imgConfeiteira.svg";
import iconePessoas from "../../utils/assets/icones/iconePessoas.svg";
import iconeEnviarLaranja from "../../utils/assets/icones/iconeEnviarLaranja.svg";
import iconeLapis from "../../utils/assets/icones/iconeLapis.svg";
import ComoFuncionaItem from '../../components/areaComoFuncHome/AreaComoFuncHome';
import CardServico from '../../components/carrosselHome/CarrosselHome';



// Define o componente funcional Home
const Home = () => {
    return (
        // Fragmento React para agrupar múltiplos elementos sem adicionar um nó extra ao DOM
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
                <section id={style["areaCardServicos"]}>
                    <div className={style["divTitulo"]}>
                        <h1 className={style["tituloServicos"]}>Serviços existentes</h1>
                    </div>
                    <article id={style["cardServicos"]}>
                        <CardServico
                            imagemSrc={imgCostura}
                            altText="Imagem do serviço"
                            titulo="RR Costuras"
                            descricao="Os melhores bolos e doces da região, com uma qualidade excepcional."
                            avaliacao={4.8}
                        />
                        <CardServico
                            imagemSrc={imgArCondicionado}
                            altText="Imagem do serviço"
                            titulo="AGK Ar condicionados"
                            descricao="Empresa que presta serviços de instalações de ar condicionados para sua casa"
                            avaliacao={5.0}
                        />
                        <CardServico
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
                    <article id={style["sobreNosEsquerda"]}>
                        <h2>Aqui você imPorta</h2>
                        <p>Nós somos uma equipe apaixonada por empreendedorismo e tecnologia, dedicada a impulsionar o sucesso de micro e pequenas empresas (MPEs) através de soluções inovadoras. Combinamos nossa expertise em desenvolvimento de software com uma profunda compreensão das necessidades e desafios enfrentados pelos empreendedores, para criar uma plataforma que simplifica e automatiza processos, fortalecendo o relacionamento com clientes e aumentando a visibilidade no mercado.</p>
                        <div>
                            <h3></h3>
                            <h3></h3>
                            <h3></h3>
                        </div>
                    </article>
                    <article id={style["sobreNosDireita"]}></article>
                </section>
            </section>
        </main>
    );
};
// Exporta o componente Home para que possa ser usado em outras partes da aplicação
export default Home;
