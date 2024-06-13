import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Dash.module.css";
import SideBar from "../../../components/sideBar/SideBar";
import Dashboard from "../../../components/dashboard/DashBoard";
import TopServices from "../../../components/topServicos/TopServicos";
import Avalicao from "../../../components/avaliacaoCliente/AvaliacaoCliente";
import Kpi from "../../../components/kpi/kpi";
import Lucro from "../../../utils/assets/icones/icones.svg";
import Prdutos from "../../../utils/assets/icones/icones-1.svg";
import Metas from "../../../utils/assets/icones/icones-2.svg";
import Conexoes from "../../../utils/assets/icones/icones-3.svg";

const Dash = () => {
  const [empresaNome, setEmpresaNome] = useState("");

  useEffect(() => {
    const fetchEmpresaNome = async () => {
      try {
        const response = await axios.get(
          "https://6605fc89d92166b2e3c3194b.mockapi.io/empresa"
        );
        setEmpresaNome(response.data[0].name);
      } catch (error) {
        console.error("Erro ao buscar nome da empresa:", error);
      }
    };

    fetchEmpresaNome();
  }, []);

  return (
    <>
      <main>
        <SideBar />
        <div className={styles["container"]}>
          <div className={styles["title"]}>
            <h2>Olá, {empresaNome}</h2>
          </div>
          <div className={styles["kpis-group"]}>
            <Kpi icon={Lucro} value="22.150,00" label="Lucro do mês" />
            <Kpi icon={Prdutos} value="22.150,00" label="Lucro do mês" />
            <Kpi icon={Metas} value="22.150,00" label="Lucro do mês" />
            <Kpi icon={Conexoes} value="22.150,00" label="Lucro do mês" />
          </div>
          <div className={styles["dash"]}>
            <div className={styles["dash-group"]}>
              <Dashboard />
            </div>
          </div>
        </div>
        <div className={styles["container2"]}>
          <div className={styles["logo-perfil"]}>
            <div className={styles["profile"]}></div>
            <div className={styles["meu-perfil"]}>
              <h2>Meu Perfil</h2>
            </div>
          </div>
          <div className={styles["avaliacao"]}>
            <Avalicao />
          </div>
          <div className={styles["top"]}>
            <TopServices />
          </div>
        </div>
      </main>
    </>
  );
};

export default Dash;
