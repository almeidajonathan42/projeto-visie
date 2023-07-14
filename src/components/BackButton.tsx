"use client";

import Link from 'next/link';
import styles from "./BackButton.module.css";

export default function BackButton() {
  return <Link className={styles.back} href="/"> Voltar para página inicial </Link>;
}
