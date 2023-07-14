"use client"

import styles from "./Navbar.module.css";
import { usePathname, useSearchParams } from "next/navigation";

const items = [
  { title: "Página Inicial", url: "/?categories=1309,1288,1317" },
  { title: "Desenvolvimento Pessoal", url: "/?categories=1309" },
  { title: "Estratégia e Gestão", url: "/?categories=1288" },
  { title: "Gestão de Pessoas", url: "/?categories=1317" },
  { title: "Ler Depois", url: "/ler-depois" },
  { title: "Favoritos", url: "/favoritos" },
  { title: "Anotações", url: "/anotacoes" },
];

export default function Navbar() {
  const path = usePathname();
  const params = useSearchParams();

  return (
    <nav className={styles.navbar}>
      {items.map((item) => {
        let isSelected = false;
        if (params.get("categories") == null) {
          console.log("comparando itemurl e path = " + item.url == path);
          isSelected = item.url == path;
        } else {
          isSelected = item.url == "/?categories=" + params.get("categories");
        }

        return (
          <div key={item.title} className={isSelected ? styles.selected : ""}>
            <a href={item.url}>{item.title}</a>
          </div>
        );
      })}
    </nav>
  );
}
