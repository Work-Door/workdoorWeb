import React from 'react';
import PropTypes from 'prop-types';
import styles from './CarrosselHome.module.css'; // Importe o arquivo de estilo aqui

const CardServicoCarroselHomeCarroselHome = ({ imagemSrc, altText, titulo, descricao, avaliacao }) => {
  // Lógica para truncar a descrição após 50 caracteres
  const truncatedDescricao = descricao.length > 60 ? `${descricao.substring(0, 60)}...` : descricao;

  return (
    <div className={styles["cardServicoCarroselHome"]}>
      <div className={styles["cardServicoCarroselHomeImg"]}>
        <img src={imagemSrc} alt={altText} />
      </div>
      <h3 className={styles["cardServicoCarroselHomeTitulo"]}>{titulo}</h3>
      <p className={styles["cardServicoCarroselHomeDescricao"]}>{truncatedDescricao}</p>
      <p className={styles["cardServicoCarroselHomeAvaliacao"]}>Avaliação: <span id={styles["cardServicoCarroselHomeAvaliacaoNota"]}>{avaliacao}</span></p>
      <p className={styles["cardServicoCarroselHomeOrcamento"]}><b>Faça seu orçamento</b></p>
    </div>
  );
};

CardServicoCarroselHomeCarroselHome.propTypes = {
  imagemSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  avaliacao: PropTypes.number.isRequired,
};

export default CardServicoCarroselHomeCarroselHome;
