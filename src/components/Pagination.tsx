"use client";

import styles from "./Pagination.module.css";
import { useRouter } from "next/navigation";

interface Props {
    currentPage: number;
    pageTotal: number;
    onForward: () => void;
    onBackwards: () => void;
}

export default function BackButton(props: any) {
  const route = useRouter();

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={(e: any) => {
          if (props.currentPage > 1) {
            props.onBackwards();
            route.refresh();
          }
        }}
      >
        Voltar
      </button>
      <p> Página {props.currentPage} de {props.pageTotal} </p>
      <button
        className={styles.button}
        onClick={(e: any) => {
          if(props.currentPage < props.pageTotal) {
            props.onForward();
            route.refresh();
          }
        }}
      >
        Avançar
      </button>
    </div>
  );
}
