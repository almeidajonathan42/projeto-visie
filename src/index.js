import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import PaginaInicial from "./pages/PaginaInicial";
import DesenvolvimentoPessoal from "./pages/DesenvolvimentoPessoal";
import EstrategiaEGestao from "./pages/EstrategiaEGestao";
import GestaoDePessoas from "./pages/GestaoDePessoas";
import LerDepois from "./pages/LerDepois";
import Favoritos from "./pages/Favoritos";
import Anotacoes from "./pages/Anotacoes";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="/"> Teste - Visie Padrões Web </a>
      </header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<PaginaInicial />} />
            <Route path="desenvolvimentoPessoal" element={<DesenvolvimentoPessoal />} />
            <Route path="estrategiaEGestao" element={<EstrategiaEGestao />} />
            <Route path="gestaoDePessoas" element={<GestaoDePessoas />} />
            <Route path="lerDepois" element={<LerDepois />} />
            <Route path="favoritos" element={<Favoritos />} />
            <Route path="anotacoes" element={<Anotacoes />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <footer className="App-footer">
        <p> Teste executado por Jonathan Rocha de Almeida </p>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
