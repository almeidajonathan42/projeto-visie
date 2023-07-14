"use client";

import styles from "./Pagination.module.css";
import { useRouter } from "next/navigation";

interface Props {
    currentPage: number;
    pageTotal: number;
}

export default function BackButton(props: Props) {
  const route = useRouter();

  return (
    <div className={styles.container}>
      <p> Página </p>
      <input className={styles.page} type="number" value={props.currentPage} />
      <p> de {props.pageTotal} </p>
      <button
        className={styles.button}
        onClick={(e: any) => {
          console.log("bora");
          route.refresh();
        }}
      >
        Ir
      </button>
    </div>
  );
}
