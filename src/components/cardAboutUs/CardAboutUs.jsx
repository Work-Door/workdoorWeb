import React from 'react';
import style from './CardAboutUs.module.css';

const CardAboutUs = ({ imagemSrc, altText, titulo, texto }) => {
  return (
    <div className={style["card-box"]}>
      <img src={imagemSrc} alt={altText} />
      <h2>{titulo}</h2>
      <p>{texto}</p>
    </div>
  );
};

export default CardAboutUs;
