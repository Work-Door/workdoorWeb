// CardServico.js

import React from 'react';
import PropTypes from 'prop-types';
import styles from './CarrosselHome.module.css'; // Importe o arquivo de estilo aqui

const CardServico = ({ imagemSrc, altText, titulo, descricao, avaliacao }) => {
  // Lógica para truncar a descrição após 50 caracteres
  const truncatedDescricao = descricao.length > 60 ? `${descricao.substring(0, 60)}...` : descricao;

  return (
    <div className={styles["cardServico"]}>
      <div className={styles["cardServicoImg"]}>
        <img src={imagemSrc} alt={altText} />
      </div>
      <h3 className={styles["cardServicoTitulo"]}>{titulo}</h3>
      <p className={styles["cardServicoDescricao"]}>{truncatedDescricao}</p>
      <p className={styles["cardServicoAvaliacao"]}>Avaliação: <span id={styles["cardServicoAvaliacaoNota"]}>{avaliacao}</span></p>
      <p className={styles["cardServicoOrcamento"]}><b>Faça seu orçamento</b></p>
    </div>
  );
};

CardServico.propTypes = {
  imagemSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  avaliacao: PropTypes.number.isRequired,
};

export default CardServico;
