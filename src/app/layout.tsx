import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "./layout.module.css";
import Navbar from "../components/Navbar";

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

        <Navbar />

        {children}

        <footer className={styles.footer}>
          <p> Teste executado por Jonathan Rocha de Almeida </p>
        </footer>
      </body>
    </html>
  );
}
