import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Teste - Visie Padrões Web",
  description:
    "Teste - Visie Padrões Web executado por Jonathan Rocha de Almeida",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className={styles.header}>
          <a href="/"> Teste - Visie Padrões Web </a>
        </header>

        <nav className={styles.navbar}>
          <a href="/"> Página Inicial </a>
          <a href="/desenvolvimento-pessoal"> Desenvolvimento Pessoal </a>
          <a href="/estrategia-e-gestao"> Estratégia e Gestão </a>
          <a href="/gestao-de-pessoas"> Gestão de Pessoas </a>
          <a href="/ler-depois"> Ler Depois </a>
          <a href="/favoritos"> Favoritos </a>
          <a href="/anotacoes"> Anotações </a>
        </nav>

        {children}

        <footer className={styles.footer}>
          <p> Teste executado por Jonathan Rocha de Almeida </p>
        </footer>
      </body>
    </html>
  );
}
