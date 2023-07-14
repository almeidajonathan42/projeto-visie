"use client"

import styles from "./Navbar.module.css";
import { usePathname } from "next/navigation";

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

  const path = usePathname();

  return (
    <nav className={styles.navbar}>
      {items.map((item) => {
        const isSelected = item.url == path;
        return (
          <div key={item.title} className={isSelected ? styles.selected : ""}>
            <a href={item.url}>{item.title}</a>
          </div>
        );
      })}
    </nav>
  );
}
