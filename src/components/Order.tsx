"use client";

import styles from "./Order.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";


interface Props {
  order: number;
  onOrderChange: () => void;
}

export default function Order(props: Props) {
  const [state, setState] = useState(props.order);

  const route = useRouter();

  function getOrderString() {
    if (state == 2) {
      return "tamanho ▲";
    } else if (state == 1) {
      return "tamanho ▼";
    } else {
      return "data";
    }
  }

  return (
    <div className={styles.container}>
      <p> Ordenando por: </p>
      <p
        className={styles.order_text}
        onClick={() => {
          if (state == 2) {
            setState(0);
          } else if (state == 0) {
            setState(1);
          } else {
            setState(2);
          }
          props.onOrderChange();
          route.refresh();
        }}
      >
        {getOrderString()}
      </p>
    </div>
  );
}
