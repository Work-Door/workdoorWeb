import React from 'react';
import PropTypes from 'prop-types';
import style from './AreaComoFuncHome.module.css';

const ComoFuncionaItem = ({ imagemSrc, altText, titulo, texto }) => {
  return (
    <article className={style["comoFuncionaItem"]}>
      <div className={style["imgIconeComuFunciona"]}>
        <img src={imagemSrc} alt={altText} />
      </div>
      <div className={style["textoComoFunc"]}>
        <h3>{titulo}</h3>
        <p>{texto}</p>
      </div>
    </article>
  );
};

ComoFuncionaItem.propTypes = {
  imagemSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
};

export default ComoFuncionaItem;
