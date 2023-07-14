import styles from "./Navbar.module.css";

const items = [
  { title: "Página Inicial", url: "/" },
  { title: "Desenvolvimento Pessoal", url: "/desenvolvimento-pessoal" },
  { title: "Estratégia e Gestão", url: "/estrategia-e-gestao" },
  { title: "Gestão de Pessoas", url: "/gestao-de-pessoas" },
  { title: "Ler Depois", url: "/ler-depois" },
  { title: "Favoritos", url: "/favoritos" },
  { title: "Anotações", url: "/anotacoes" },
];

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      {items.map((item) => {
        return (
          <div key={item.title}>
            <a href={item.url}>{item.title}</a>
          </div>
        );
      })}
    </nav>
  );
}
