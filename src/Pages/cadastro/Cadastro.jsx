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

  const [tipoCadastro, setTipoCadastro] = useState('');
  const [nome, setNome] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [cep, setCep] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaEmpresa, setSenhaEmpresa] = useState('');
  const [cpf, setCpf] = useState('');
  const options = [
    { value: "cliente", label: "Cliente" },
    { value: "empresa", label: "Empresa" },
  ];

  const avancarEtapa = () => {
    console.log(nome, email, telefone, senha, tipoCadastro, cpf, cnpj, cep);
    setEtapaAtual(etapaAtual + 1);
  };

  const voltarEtapa = () => {
    console.log(etapaAtual);
    setEtapaAtual(etapaAtual - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dadosEnviar = {
      nomeEnviar: nome,
      emailEnviar: email,
      telefoneEnviar: telefone,
      senhaEnviar: senha,
      senhaEmpresaEnviar: senhaEmpresa,
      cpfEnviar: cpf,
      cnpjEnviar: cnpj,
      cepEnviar: cep,
      tipoCadastroEnviar: tipoCadastro,
    };
    console.log("Dados do formulário enviar:", dadosEnviar);

    if (tipoCadastro === "cliente") {
        dadosEnviar.cnpj = '';
        dadosEnviar.senhaEmpresaEnviar = '';

    } else if (tipoCadastro === "empresa") {
      dadosEnviar.cpfEnviar = '';
      dadosEnviar.senhaEnviar = '';
    }

    console.log("Dados do formulário enviar:", dadosEnviar);
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
                    value ={tipoCadastro}
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