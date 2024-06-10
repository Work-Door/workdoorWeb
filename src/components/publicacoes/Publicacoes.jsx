import React, { useState } from 'react';
import ImgMarcas from "../../utils/assets/imgMarcas.svg";
import logo from "../../utils/assets/agkLogo.svg";
import style from "./Publicacoes.module.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPaperclip, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faPaperclip, faPaperPlane);
function Publicacoes() {
    const [text, setText] = useState('');
    const handleChange = (event) => {
        setText(event.target.value);
    };
    // const isOwner = user.id === profile.id;
    return (
        <div id={style["container"]}>

            {/* {isOwner && ( */}
                <section id={style["areaPublicar"]}>
                    <div className={style["publication-input"]}>
                        <div className={style["logoPost"]}>
                            <img src={logo} alt="" />
                        </div>

                        <div className={style["textarea-container"]}>
                            <textarea className={style["textArea"]}
                                placeholder="Escreva sua publicação"
                                value={text}
                                onChange={handleChange}
                            />
                            <div className={style["actions"]}>
                                <button className={style["attach-button"]}>
                                    <FontAwesomeIcon icon="paperclip" />
                                </button>
                                <button className={style["send-button"]}>
                                    <FontAwesomeIcon icon="paper-plane" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            {/* )} */}

            <div className={style["areaTitulo"]}>
                <h1>Parceiros</h1>
            </div>
            <p>Somos parceiros das maiores distribuidoras de ar condicionado. Aqui você encontra as melhores marcas, e o modelos que melhor se encaixa em seu projeto.
            </p>
            <div className={style["areaImagem"]}>
                <img src={ImgMarcas} alt="imagem que mostra ar condicionados e suas marcas" />
            </div>
        </div>
    );
}

export default Publicacoes;