import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./Pages/cadastro/Cadastro";
import Login from "./Pages/login/Login";
import Home from "./Pages/home/Home";
import NotFound from "./Pages/notFound/NotFound";
import Servicos from "./Pages/servicos/Servicos";
import ConfigClient from "./Pages/cliente/configClient/ConfigClient";

function Rotas() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/servicos" element={<Servicos />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cliente/configuracoes" element={<ConfigClient />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Rotas;
