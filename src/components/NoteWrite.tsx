"use client";

import { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import styles from "./NoteWrite.module.css";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  align-items: flex-end;
`;

const Textarea = styled.textarea`
  height: 200px;
  width: 700px;
  margin-bottom: 15px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
  font-family: inherit;
  margin-top: 20px;
`;

const Button = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #09e1cd;
  border: none;
  border-radius: 3px;
  padding: 10px 15px;
  font-size: 16px;
  font-weight: 500;
`;

interface Props {
  handleSaveNote: (note: string) => void;
  existingNote: string;
}

export default function NoteWrite(props: Props) {
  const [text, setText] = useState(props.existingNote);

  const router = useRouter();

  return (
    <form className={styles.form}>
      <textarea
        className={styles.textarea}
        value={text}
        onChange={(e: any) => {
          setText(e.target.value);
        }}
      />
      <button
        className={styles.button}
        onClick={(e: any) => {
          e.preventDefault();
          props.handleSaveNote(text);
          router.refresh();
        }}
      >
        Criar anotação
      </button>
    </form>
  );
}
