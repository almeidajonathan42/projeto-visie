import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

function Layout() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-link"> Página Inicial </Link>
        <Link to="/desenvolvimento-pessoal" className="navbar-link"> Desenvolvimento Pessoal </Link>
        <Link to="/estrategia-e-gestao" className="navbar-link"> Estratégia e Gestão </Link>
        <Link to="/gestao-de-pessoas" className="navbar-link"> Gestão de Pessoas </Link>
        <Link to="/ler-depois" className="navbar-link"> Ler Depois </Link>
        <Link to="/favoritos" className="navbar-link"> Favoritos </Link>
        <Link to="/anotacoes" className="navbar-link"> Anotações </Link>
      </nav>

      <Outlet />
    </>
  );
}

export default Layout;
