import { React, useState, useEffect } from "react";
import style from "./ConfigClient.module.css";
import SideBanner from "../../../components/sideBanner/SideBanner";
import InputField from "../../../components/inputs/Inputs";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import api from "../../../api";

const ConfigClient = () => {
  useEffect(() => {
      toast.dismiss();
  }, []);

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [cep, setCep] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [logradouro , setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [cidade, setCidade] = useState("");
  //coloca  UF depois em um const com option
  const [bairro, setBairro] = useState("");
  const [complemento, setComplemento] = useState("");
  //colocar a categoria depois
  const options = [
    { value: "cliente", label: "Cliente" },
    { value: "empresa", label: "Empresa" },
  ];
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    api.put(`usuarios/login`, {
      })
      .then((response) => {
        console.log(response);
        // LogUser(response.data.userId, response.data.token);
        toast.success(`seja bem vindo!`);
        setTimeout(() => {
          // toast.success("Carregando pagina!");
          navigate("/servicos");
        }, 2000);
      })
      .catch(function () {
        toast.error("Email ou senha incorretos");
      });
  };


  return (
    <>
      <main>
        <div className={style["container"]}>
          <SideBanner />
        </div>
        <div className={style["container2"]}>
          <form className={style["form"]} onSubmit={handleLogin}>
            {/* <ToastContainer/> */}
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
                // value={userType}
                // onChange={(e) => setUserType(e.target.value)}
              />
              <InputField
                type="text"
                placeholder="exemplo@email.com"
                // icon={faEnvelope}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputField
                type="password"
                placeholder="************"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
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

export default ConfigClient;
