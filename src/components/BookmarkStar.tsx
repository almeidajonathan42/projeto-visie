"use client";

import styles from "./BookmarkStar.module.css";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  articleId: string;
  value: boolean;
  toggleValue: (id: string, currentValue: boolean) => void;
  size: number;
}

export default function BookmarkStar(props: Props) {
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
            src="/star-full.svg"
            alt="Estrela preenchida"
            width={props.size}
            height={props.size}
          />
          <p> Favoritado </p>
        </>
      ) : (
        <>
          <Image
            src="/star-empty.svg"
            alt="Estrela vazada"
            width={props.size}
            height={props.size}
          />
          <p> Favoritar </p>
        </>
      )}
    </div>
  );
}
