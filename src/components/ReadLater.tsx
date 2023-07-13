"use client";

import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

interface Props {
  articleId: number;
  size: number;
}

export default function ReadLater(props: Props) {
  if (localStorage.getItem("readLater") == null) {
    localStorage.setItem("readLater", "");
  }

  const isBookmarked = localStorage.getItem("readLater")?.includes(props.articleId.toString());

  const [state, setState] = useState(isBookmarked);

  const handleClick = () => {
    if (isBookmarked) {
      let readLater = localStorage.getItem("readLater") || "";
      readLater = readLater?.replace(props.articleId + " ", "");
      localStorage.setItem("readLater", readLater);
      setState(false);
    } else {
      localStorage.setItem(
        "readLater",
        localStorage.getItem("readLater") + props.articleId.toString() + " "
      );
      setState(true);
    }
  };

  return (
    <Container onClick={handleClick}>
      {state ? (
        <>
          <Image
            src="/read-later-full.svg"
            alt="Arquivo vazio"
            width={props.size}
            height={props.size}
          />
          <p> Marcado para ler mais tarde </p>
        </>
      ) : (
        <>
          <Image
            src="/read-later-empty.svg"
            alt="Arquivo cheio"
            width={props.size}
            height={props.size}
          />
          <p> Ler mais tarde </p>
        </>
      )}
    </Container>
  );
}
