import React from 'react';
import style from './InfoPerfilEmpresa.module.css';
import IconeEndereco from "../../utils/assets/icones/navigationIcon.png";

const InfoPerfilEmpresa = ({
    logo,
    nomeEmpresa,
    breveDesc,
    contratos,
    endereco,
    descricao,
    mapa
}) => {
    return (
        <div id={style["container"]}>
            <section id={style["areaEmpresaTopo"]}>
                <div id={style["divLogo"]}>
                    <img src={logo} alt="Imagem da logo do perfil" />
                </div>
                <div id={style["areaDesc"]}>
                    <div id={style["nomeEmpresa"]}>{nomeEmpresa}</div>
                    <div id={style["BreveDesc"]}>{breveDesc}</div>
                    <div id={style["contratos"]}>
                        {`+${contratos} contratos`}
                    </div>
                </div>
                <div id={style["endereco"]}>
                    <div>
                        <img src={IconeEndereco} alt="icone para simbolizar a busca do endereço" />
                    </div>
                    <p>{endereco}</p>
                </div>
            </section>
            <section id={style["areaBaixo"]}>
                <div id={style["descricao"]}>
                    <div id={style["btnChat"]}>
                        <button>Chat</button>
                    </div>
                    <div id={style["descricaoEmpresa"]}>
                        <p>{descricao}</p>
                    </div>
                </div>
                <div id={style["mapa"]}>
                    {mapa}
                </div>
            </section>
        </div>
    );
};

export default InfoPerfilEmpresa;
