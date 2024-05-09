import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardServico.module.css'; // Importe o arquivo de estilo aqui

const CardServico = ({ imagemSrc, altText, titulo, categoria, descricao, nota, descricaoLimite }) => {
    // Lógica para truncar a descrição conforme o limite especificado
    const truncatedDescricao = descricao.length > descricaoLimite ? `${descricao.substring(0, descricaoLimite)}...` : descricao;

    return (
        <div className={styles["servico"]}>
            <div className={styles["servicesTop"]}>
                <div className={styles["imgServico"]}>
                    <img src={imagemSrc} alt={altText} />
                </div>
                <div className={styles["infosServico"]}>
                    <h4 className={styles["tituloServico"]}>{titulo}</h4>
                    <p className={styles["categoriaServico"]}>{categoria}</p>
                </div>
            </div>
            <div className={styles["servicesMid"]}>
                <p className={styles["descricaoServico"]}>{truncatedDescricao}</p>
            </div>
            <div className={styles["servicesBot"]}>
                <div id={styles["areaAvaliacao"]}>
                    <div> Avaliação: <span id={styles["notaAvaliacao"]}>{nota}</span></div>
                    <span className={styles["orcamentoBtn"]}>Faça seu orçamento</span>
                </div>
            </div>
        </div>
    );
};

CardServico.propTypes = {
    imagemSrc: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    categoria: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
    nota: PropTypes.number.isRequired,
    descricaoLimite: PropTypes.number.isRequired, // Limite para a descrição
};

export default CardServico;
