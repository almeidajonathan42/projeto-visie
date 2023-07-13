"use client";

import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { useRouter } from 'next/navigation';

const Container = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

interface Props {
  articleId: number;
  value: boolean;
  toggleValue: (id: string, currentValue: boolean) => void;
  size: number;
}

export default function BookmarkStar(props: Props) {
  const [state, setState] = useState(props.value);

  const router = useRouter();

  return (
    <Container
      onClick={() => {
        props.toggleValue(props.articleId.toString(), state);
        setState(prev => !prev);
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
    </Container>
  );
}
