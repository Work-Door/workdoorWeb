import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './AvaliacaoCliente.module.css';

const AvaliacaoCliente = () => {
  const [excelente, setExcelente] = useState(0);
  const [bom, setBom] = useState(0);
  const [regular, setRegular] = useState(0);
  const [ruim, setRuim] = useState(0);
  const [totalAvaliacoes, setTotalAvaliacoes] = useState(0);

  const fetchAvaliacoes = async () => {
    try {
      const response = await axios.get('https://6605fc89d92166b2e3c3194b.mockapi.io/avaliacao');
      console.log('Dados recebidos:', response.data[0]);

      const excelenteNum = parseInt(response.data[0].Excelente);
      const bomNum = parseInt(response.data[0].Bom);
      const regularNum = parseInt(response.data[0].Regular);
      const ruimNum = parseInt(response.data[0].Ruim);

      setExcelente(response.data[0].Excelente);
      setBom(response.data[0].Bom);
      setRegular(response.data[0].Regular);
      setRuim(response.data[0].Ruim);

      const total = excelenteNum + bomNum + regularNum + ruimNum;
      setTotalAvaliacoes(total);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  useEffect(() => {
    fetchAvaliacoes();
  }, []);

  return (
    <div className={styles["avaliacao-cliente"]}>
      <div className={styles["avaliacao-title"]}>
        <h3>Avaliações de clientes</h3>
        <div className={styles["estrelas"]}>
          <span>★★★★★</span>
          <span>4,9</span>
        </div>
        <p>Classificação geral de {totalAvaliacoes} avaliações de clientes</p>
      </div>
      <div className={styles["avaliacao-barras"]}>
        <div className={styles["avaliacao-barra"]} style={{ width: "100%" }}>
          <p className={styles["avaliacao-label"]}>Excelente</p>
          <p className={styles["avaliacao-numero"]}>{excelente}</p>
        </div>
        <div className={styles["avaliacao-barra"]} style={{ width: "100%" }}>
          <p className={styles["avaliacao-label"]}>Bom</p>
          <p className={styles["avaliacao-numero"]}>{bom}</p>
        </div>
        <div className={styles["avaliacao-barra"]} style={{ width: "100%" }}>
          <p className={styles["avaliacao-label"]}>Regular</p>
          <p className={styles["avaliacao-numero"]}>{regular}</p>
        </div>
        <div className={styles["avaliacao-barra"]} style={{ width: "100%" }}>
          <p className={styles["avaliacao-label"]}>Ruim</p>
          <p className={styles["avaliacao-numero"]}>{ruim}</p>
        </div>
      </div>
    </div>
  );
};

export default AvaliacaoCliente;
