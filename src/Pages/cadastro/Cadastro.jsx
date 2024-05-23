import api from "../../api";
import React, { useState } from "react";
import style from "./Cadastro.module.css";
import SideBanner from "../../components/sideBanner/SideBanner";
import InputField from "../../components/inputs/Inputs";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  faUser,
  faBuilding,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Cadastro = () => {
  const navigate = useNavigate();

  const [etapaAtual, setEtapaAtual] = useState(1);
  const [tipoCadastro, setTipoCadastro] = useState("");
  const [nome, setNome] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [cep, setCep] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaEmpresa, setSenhaEmpresa] = useState("");
  const [cpf, setCpf] = useState("");
  const options = [
    { value: "cliente", label: "Cliente" },
    { value: "empresa", label: "Empresa" },
  ];

  const avancarEtapa = () => {
    if(nome === "" || email === "" || telefone === ""){
      toast.error("Preencha todos os campos antes de avaçar a etapa!");
      return;
    }
    if(tipoCadastro === ""){
      toast.error("Selecione o tipo de cadastro antes de avançar a etapa!");
      return;
    }
    if(nome.length < 3){
      toast.error("O nome deve ter pelo menos 8 caracteres.");
      return;
    }
    if(telefone.length <= 12 || telefone.length >= 16){
      toast.error("O telefone deve ter entre 13 e 15 caracteres.");
      return;
    }
    setEtapaAtual(etapaAtual + 1);
  };

  const voltarEtapa = () => {
    setEtapaAtual(etapaAtual - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dadosEmpresa = {
      nome: nome,
      email: email,
      telefone: telefone,
      senha: senhaEmpresa,
      cnpj: cnpj,
      cep: cep,
    };
    const dadosUsuario = {
      nomeUsuario: nome,
      cpf: cpf,
      emailUsuario: email,
      telefoneUsuario: telefone,
      senhaUsuario: senha,
    };

    if (tipoCadastro === "cliente") {
      if (senha.length < 8) {
        toast.error("A senha deve ter pelo menos 8 caracteres.");
        return;
      }
      if (cpf.length !== 11) {
        toast.error("O CPF deve ter 11 caracteres.");
        return;
      }

      api
        .post(`usuarios/register`, dadosUsuario)
        .then(() => {
          toast.success("Usuário criado com sucesso!");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        })
        .catch(function () {
          toast.error("Falha ao cadastrar usuário");
        });
    } else if (tipoCadastro === "empresa") {
      api
        .post(`empresas`, dadosEmpresa)
        .then(() => {
          toast.success("Empresa criada com sucesso!");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        })
        .catch(function (error) {
          toast.error(error.response.data.message);
        });
    }
  };

  return (
    <>
      <main>
        <div className={style["container"]}>
          <SideBanner />
        </div>
        <div className={style["container2"]}>
          <form className={style["form"]} onSubmit={handleSubmit}>
            <ToastContainer/>
            <div className={style["title"]}>
              <div className={style["center"]}>
                <h2>Abra sua conta gratuitamente</h2>
                <h3>Cadastre-se e comece agora</h3>
              </div>
            </div>
            <div className={style["input-group"]}>
              {etapaAtual === 1 && (
                <>
                  <InputField
                    type="select"
                    placeholder="Tipo de cadastro"
                    name="tipoCadastro"
                    options={options}
                    value={tipoCadastro}
                    onChange={(e) => setTipoCadastro(e.target.value)}
                  />
                  <InputField
                    type="text"
                    placeholder="Nome"
                    name="nomeForm"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    icon={faUser}
                  />
                  <InputField
                    type="email"
                    placeholder="Email"
                    name="emailForm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    icon={faEnvelope}
                  />
                  <InputField
                    type="tel"
                    placeholder="Telefone"
                    name="telefoneForm"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    icon={faPhone}
                  />
                </>
              )}
              {etapaAtual === 2 &&
                tipoCadastro === "cliente" && (
                  <>
                    <InputField
                      type="text"
                      placeholder="CPF"
                      name="cpfForm"
                      value={cpf}
                      onChange={(e) => setCpf(e.target.value)}
                      icon={faUser}
                    />
                    <InputField
                      type="password"
                      placeholder="Senha"
                      name="senhaForm"
                      value={senha}
                      onChange={(e) => setSenha(e.target.value)}
                    />
                  </>
                )}
              {etapaAtual === 2 &&
                tipoCadastro === "empresa" && (
                  <>
                    <InputField
                      type="text"
                      placeholder="CNPJ"
                      name="cnpjForm"
                      value={cnpj}
                      onChange={(e) => setCnpj(e.target.value)}
                      icon={faBuilding}
                    />
                    <InputField
                      type="text"
                      placeholder="CEP"
                      name="cepForm"
                      value={cep}
                      onChange={(e) => setCep(e.target.value)}
                      icon={faBuilding}
                    />
                    <InputField
                      type="password"
                      placeholder="Senha"
                      name="senhaForm"
                      value={senhaEmpresa}
                      onChange={(e) => setSenhaEmpresa(e.target.value)}
                    />
                  </>
                )}

              <div className={style["button-group"]}>
                {etapaAtual !== 1 && (
                  <button type="button" onClick={voltarEtapa}>
                    Voltar
                  </button>
                )}
                {etapaAtual !== 2 && (
                  <button type="button" onClick={avancarEtapa}>
                    Avançar
                  </button>
                )}
                {etapaAtual === 2 && <button type="submit">Enviar</button>}
              </div>
              <div className={style["link-login"]}>
                <Link to="../login">
                  Já está cadastrado? <span>Entre agora</span>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Cadastro;
