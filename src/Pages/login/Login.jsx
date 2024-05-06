import React from "react";
import style from "./Login.module.css";
import SideBanner from "../../components/sideBanner/SideBanner";
import InputField from "../../components/inputs/Inputs";
import { Link } from "react-router-dom";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons"; // Importando os ícones necessários

const Login = () => {
  const options = [
    { value: "1", label: "Cliente" },
    { value: "2", label: "Empresa" },
  ];

  return (
    <>
      <main>
        <div className={style["container"]}>
          <SideBanner />
        </div>
        <div className={style["container2"]}>
          <form className={style["form"]}>
            <div className={style["title"]}>
              <div className={style["center"]}>
                <h2>Bem vindo de volta</h2>
                <h3>entre para continuar</h3>
              </div>
            </div>
            <div className={style["input-group"]}>
              <InputField
                type="select"
                placeholder="Tipo de login"
                options={options}
              />
              <InputField
                type="text"
                placeholder="exemplo@email.com"
                icon={faEnvelope} 
              />
              <InputField
                type="password"
                placeholder="************"
                icon={faLock} // Ícone para o campo de senha
              />
              <div className={style["button-group"]}>
                <button>Torne-se um membro</button>
              </div>
              <div className={style["link-cadastro"]}>
                <Link to="../cadastro">
                  Já tem uma conta? <span> Cadastre-se</span>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;