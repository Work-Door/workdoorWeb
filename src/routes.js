import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./Pages/cadastro/Cadastro";
import Login from "./Pages/login/Login";
import Home from "./Pages/home/Home";
import Chat from "./Pages/chat/Chat";
import Dash from "./Pages/empresa/dash/Dash";
import NotFound from "./Pages/notFound/NotFound";
import Servicos from "./Pages/servicos/Servicos";
import ConfigClient from "./Pages/cliente/configClient/ConfigClient";
import PerfilEmpresa from "./Pages/empresa/perfil/Perfil";
import ConfigEmpresa from "./Pages/empresa/config/Config";

function Rotas() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/dash" element={<Dash />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/servicos" element={<Servicos />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dash" element={<Dash />} />
                    <Route path="/empresa/perfil" element={<PerfilEmpresa />} />
                    <Route path="/cliente/configuracoes" element={<ConfigClient />} />
                    <Route path="/empresa/configuracoes" element={<ConfigEmpresa />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Rotas;
