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

export default function BookmarkStar(props: Props) {
  if (localStorage.getItem("bookmarks") == null) {
    localStorage.setItem("bookmarks", "");
  }

  const isBookmarked = localStorage.getItem("bookmarks")?.includes(props.articleId.toString());

  const [state, setState] = useState(isBookmarked);

  const handleClick = () => {
    if (isBookmarked) {
      let bookmarks = localStorage.getItem("bookmarks") || "";
      bookmarks = bookmarks?.replace(props.articleId + " ", "");
      localStorage.setItem("bookmarks", bookmarks);
      setState(false);
    } else {
      localStorage.setItem(
        "bookmarks",
        localStorage.getItem("bookmarks") + props.articleId.toString() + " "
      );
      setState(true);
    }
  };

  return (
    <Container onClick={handleClick}>
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
