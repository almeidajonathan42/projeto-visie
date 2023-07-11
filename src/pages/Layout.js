import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

function Layout() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-link"> Página Inicial </Link>
        <Link to="/desenvolvimentoPessoal" className="navbar-link"> Desenvolvimento Pessoal </Link>
        <Link to="/estrategiaEGestao" className="navbar-link"> Estratégia e Gestão </Link>
        <Link to="/gestaoDePessoas" className="navbar-link"> Gestão de Pessoas </Link>
        <Link to="/lerDepois" className="navbar-link"> Ler Depois </Link>
        <Link to="/favoritos" className="navbar-link"> Favoritos </Link>
        <Link to="/anotacoes" className="navbar-link"> Anotações </Link>
      </nav>

      <Outlet />
    </>
  );
}

export default Layout;
