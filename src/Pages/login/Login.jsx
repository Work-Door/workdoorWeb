import { React, useState, useEffect } from "react";
import style from "./Login.module.css";
import SideBanner from "../../components/sideBanner/SideBanner";
import InputField from "../../components/inputs/Inputs";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import api from "../../api";
import { LogUser } from "../../services/auth";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  useEffect(() => {
      toast.dismiss();
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("cliente"); // Padrão para cliente

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // if (userType === "cliente") {
    // } else if (userType === "empresa") {
    // }
    if(userType === ""){
      toast.error("Selecione o tipo de login!");
      return;
    }
    
    api.post(`usuarios/login`, {
        emailUsuario: email,
        senhaUsuario: password,
      })
      .then((response) => {
        console.log(response);
        // LogUser(response.data.userId, response.data.token);
        setTimeout(() => {
          toast.success(`seja bem vindo!`);
          // toast.success("Carregando pagina!");
          navigate("/servicos");
        }, 2000);
      })
      .catch(function () {
        toast.error("Email ou senha incorretos");
      });
  };

  const options = [
    { value: "cliente", label: "Cliente" },
    { value: "empresa", label: "Empresa" },
  ];

  return (
    <>
      <main>
        <div className={style["container"]}>
          <SideBanner />
        </div>
        <div className={style["container2"]}>
          <form className={style["form"]} onSubmit={handleLogin}>
            <ToastContainer/>
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
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
              />
              <InputField
                type="text"
                placeholder="exemplo@email.com"
                icon={faEnvelope}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputField
                type="password"
                placeholder="************"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className={style["button-group"]}>
                <button type="submit">Entrar</button>
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
