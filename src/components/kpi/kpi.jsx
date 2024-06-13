import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './kpi.module.css';

const Kpi = ({ icon }) => {
  const [data, setData] = useState({ value: '', label: '' });

  useEffect(() => {
    // Função para buscar dados da API
    const fetchData = async () => {
      try {
        const response = await axios.get('https://6605fc89d92166b2e3c3194b.mockapi.io/kpis/1'); // Substitua pela URL correta da sua API
       // console.log('Dados recebidos:', response.data);  // Adicione este log para verificar os dados recebidos
        setData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.kpi}>
      <div className={styles.icon}>
        <img src={icon} alt={data.label} />
      </div>
      <div className={styles.value}>
        {data.valor}
      </div>
      <div className={styles.label}>
        {data.label}
      </div>
    </div>
  );
};

export default Kpi;
