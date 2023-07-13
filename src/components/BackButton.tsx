"use client";

import { useRouter } from "next/navigation";
import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #09e1cd;
  border: none;
  border-radius: 3px;
  padding: 10px 25px;
  font-size: 16px;
  font-weight: 500;
  position: absolute;
  right: 234px;
  top: 170px;
`;

export default function BackButton() {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return <Button onClick={handleClick}> Voltar </Button>;
}
