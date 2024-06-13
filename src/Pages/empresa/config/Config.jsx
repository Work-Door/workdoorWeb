import React, { useState, useEffect } from "react";
import style from "./Config.module.css";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import InputField from "../../../components/inputs/Inputs";
import api from "../../../api";
import "react-toastify/dist/ReactToastify.css";
import SideBar from "../../../components/sideBar/SideBar";

const Config = () => {
  useEffect(() => {
    toast.dismiss();
  }, []);

  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cep, setCep] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [categoria, setCategoria] = useState("");
  const [senha, setSenha] = useState("");


  const handleCepChange = (e) => {
    const newCep = e.target.value.replace("-", "");
    setCep(newCep);

    if (newCep.length === 8) {
      api
        .get(`https://viacep.com.br/ws/${newCep}/json/`)
        .then((response) => {
          if (response.data.erro) {
            toast.error("CEP não encontrado.");
            return;
          }
          const { logradouro, bairro, localidade, uf } = response.data;
          setLogradouro(logradouro);
          setBairro(bairro);
          setCidade(localidade);
          setUf(uf);
        })
        .catch(() => {
          console.log("cep não encontrado");
        });
    }
  };

  const handleSave = () => {
    toast.success("Informações salvas com sucesso!");
  };

  return (
    <>
      <main className={style.main}>
          <SideBar/>
        <div className={style.content}>
          <div className={style.header}>
            <div className={style.logo}>
              <img src="agk-logo.png" alt="AGK Logo" />
            </div>
            <div className={style.title}>
              <h1>Confeiteira Carmen</h1>
            </div>
          </div>
          <div className={style.form}>
            <div className={style.card}>
              <label htmlFor="nome">Nome da Empresa</label>
              <InputField
                type="text"
                placeholder="Nome da Empresa"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <label htmlFor="email">Email</label>
              <InputField
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="cep">CEP</label>
              <InputField
                type="text"
                placeholder="Cep"
                value={cep}
                onChange={handleCepChange}
                mask="99999-999"
              />
              <label htmlFor="cnpj">CNPJ</label>
              <InputField
                type="text"
                placeholder="CNPJ"
                value={cnpj}
                onChange={(e) => setCnpj(e.target.value)}
              />
              <label htmlFor="telefone">Telefone</label>
              <InputField
                type="text"
                placeholder="Telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                mask="(99) 9 9999-9999"
              />
            </div>
            <div className={style.card}>
              <label htmlFor="logradouro">Logradouro</label>
              <InputField
                type="text"
                placeholder="Logradouro"
                value={logradouro}
                readOnly
              />
              <label htmlFor="bairro">Bairro</label>
              <InputField
                type="text"
                placeholder="Bairro"
                value={bairro}
                readOnly
              />
              <label htmlFor="cidade">Cidade</label>
              <InputField
                type="text"
                placeholder="Cidade"
                value={cidade}
                readOnly
              />
              <div className={style["division-inputs"]}>
                <label htmlFor="uf">UF </label>
                <InputField type="text" placeholder="UF" value={uf} readOnly />
                <label htmlFor="categoria">Categoria</label>
                <InputField
                  type="select"
                  placeholder="Categoria"
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                  options={[
                    { value: "Refrigeração", label: "Refrigeração" },
                    { value: "Moda", label: "Moda" },
                    { value: "Tecnologia", label: "Tecnologia" },
                    { value: "Domestico", label: "Doméstico" },
                  ]}
                />
              </div>
              <label htmlFor="senha">Senha</label>
              <InputField
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
          </div>
          <div className={style["button-group"]}>
            <button
              type="button"
              className={style.saveButton}
              onClick={handleSave}
            >
              Salvar
            </button>
          </div>
        </div>
      </main>
      <ToastContainer />
    </>
  );
};

export default Config;
