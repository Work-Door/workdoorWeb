import React, { useState } from "react";
import style from "./Cadastro.module.css";
import SideBanner from "../../components/sideBanner/SideBanner";
import InputField from "../../components/inputs/Inputs";
import { Link } from "react-router-dom";
import {
  faUser,
  faBuilding,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Cadastro = () => {
  const [etapaAtual, setEtapaAtual] = useState(1);
  const [dadosFormulario, setDadosFormulario] = useState({
    nome: "",
    cnpj: "",
    cep: "",
    email: "",
    telefone: "",
    senha: "",
    cpf: "",
    tipoCadastro: "",
  });

  const options = [
    { value: "cliente", label: "Cliente" },
    { value: "empresa", label: "Empresa" },
  ];

  const avancarEtapa = () => {
    console.log(etapaAtual);
    setEtapaAtual(etapaAtual + 1);
  };

  const voltarEtapa = () => {
    console.log(etapaAtual);
    setEtapaAtual(etapaAtual - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDadosFormulario({
      ...dadosFormulario,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dadosEnviar = {
      nome: dadosFormulario.nome,
      email: dadosFormulario.email,
      telefone: dadosFormulario.telefone,
      senha: dadosFormulario.senha,
      tipoCadastro: dadosFormulario.tipoCadastro,
    };

    if (dadosFormulario.tipoCadastro === "cliente") {
      dadosEnviar.cpf = dadosFormulario.cpf;
    } else if (dadosFormulario.tipoCadastro === "empresa") {
      dadosEnviar.cnpj = dadosFormulario.cnpj;
      dadosEnviar.cep = dadosFormulario.cep;
    }

    console.log("Dados do formulário:", dadosEnviar);
    // Aqui você poderia enviar os dados para o backend
  };

  return (
    <>
      <main>
        <div className={style["container"]}>
          <SideBanner />
        </div>
        <div className={style["container2"]}>
          <form className={style["form"]} onSubmit={handleSubmit}>
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
                    onChange={handleChange}
                  />
                  <InputField
                    type="text"
                    placeholder="Nome"
                    name="nome"
                    value={dadosFormulario.nome}
                    onChange={handleChange}
                    icon={faUser}
                  />
                  <InputField
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={dadosFormulario.email}
                    onChange={handleChange}
                    icon={faEnvelope}
                  />
                  <InputField
                    type="tel"
                    placeholder="Telefone"
                    name="telefone"
                    value={dadosFormulario.telefone}
                    onChange={handleChange}
                    icon={faPhone}
                  />
                </>
              )}
              {etapaAtual === 2 &&
                dadosFormulario.tipoCadastro === "cliente" && (
                  <>
                    <InputField
                      type="text"
                      placeholder="CPF"
                      name="cpf"
                      value={dadosFormulario.cpf}
                      onChange={handleChange}
                      icon={faUser}
                    />
                    <InputField
                      type="password"
                      placeholder="Senha"
                      name="senha"
                      value={dadosFormulario.senha}
                      onChange={handleChange}
                    />
                  </>
                )}
              {etapaAtual === 2 &&
                dadosFormulario.tipoCadastro === "empresa" && (
                  <>
                    <InputField
                      type="text"
                      placeholder="CNPJ"
                      name="cnpj"
                      value={dadosFormulario.cnpj}
                      onChange={handleChange}
                      icon={faBuilding}
                    />
                    <InputField
                      type="text"
                      placeholder="CEP"
                      name="cep"
                      value={dadosFormulario.cep}
                      onChange={handleChange}
                      icon={faBuilding}
                    />
                    <InputField
                      type="password"
                      placeholder="Senha"
                      name="senha"
                      value={dadosFormulario.senha}
                      onChange={handleChange}
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
