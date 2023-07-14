"use client";

import styles from "./ReadLater.module.css";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";


interface Props {
  articleId: string;
  value: boolean;
  toggleValue: (id: string, currentValue: boolean) => void;
  size: number;
}

export default function ReadLater(props: Props) {
  const [state, setState] = useState(props.value);

  const router = useRouter();

  return (
    <div
      className={styles.container}
      onClick={() => {
        props.toggleValue(props.articleId, state);
        setState((prev) => !prev);
        router.refresh();
      }}
    >
      {state ? (
        <>
          <Image
            src="/read-later-full.svg"
            alt="Arquivo vazio"
            width={props.size}
            height={props.size}
          />
          <p> Marcado para ler depois </p>
        </>
      ) : (
        <>
          <Image
            src="/read-later-empty.svg"
            alt="Arquivo cheio"
            width={props.size}
            height={props.size}
          />
          <p> Ler depois </p>
        </>
      )}
    </div>
  );
}
