import React from "react";
import style from "./Ranking.module.css";

const CardRanking = ({ imagemSrc, altText, titulo, categoria, nota, styles, className }) => {
    return (
        <div className={`${style["cardRanking"]} ${className}`}>
            <div className={style["cardRankingLeft"]}>
                <img src={imagemSrc} alt={altText} />
            </div>
            <div className={style["cardRankingRight"]}>
                <div className={style["infosServico"]}>
                    <h4 className={style["tituloServico"]}>{titulo}</h4>
                    <p className={style["categoriaServico"]}>{categoria}</p>
                </div>
                <div className={style["cardRankingBot"]}>
                    <div id={style["cardRankingAreaAvaliacao"]}>
                        <div>
                            Avaliação: <span id={style["cardRankingNotaAvaliacao"]}>{nota}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardRanking;
