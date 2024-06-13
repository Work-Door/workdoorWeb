import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './TopServicos.module.css';

const TopServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://666afdab7013419182d1d1b6.mockapi.io/dor/servicos');
        const sortedServices = response.data.sort((a, b) => b.quantidade - a.quantidade);
        setServices(sortedServices);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles["top-services"]}>
      <h3>Top serviços</h3>
      <div className={styles["table"]}>
        <div className={styles["table-header"]}>
          <span>Produto</span>
          <span>Quantidade</span>
        </div>
        {services.map(service => (
          <div key={service.id} className={styles["table-row"]}>
            <span>{service.produto}</span>
            <span>{service.quantidade}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopServices;
