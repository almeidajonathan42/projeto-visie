"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./NoteWrite.module.css";

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
