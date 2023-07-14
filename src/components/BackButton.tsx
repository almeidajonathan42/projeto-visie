"use client";

import Link from 'next/link';
import styles from "./BackButton.module.css";

export default function BackButton() {
  return <Link className={styles.back} href="/?categories=1309,1288,1317"> Voltar para página inicial </Link>;
}
