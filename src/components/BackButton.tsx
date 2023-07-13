"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return <button onClick={handleClick}> Voltar </button>;
}
