"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./NoteReadWrite.module.css";

interface Props {
  articleId: string;
  onSaveNote: (id: string, note: string) => void;
  onDeteleNote: (id: string) => void;
  existingNote: string;
}

export default function NoteReadWrite(props: Props) {
  const [text, setText] = useState(props.existingNote);
  const [isEditable, setIsEditable] = useState(false);

  const router = useRouter();

  return (
    <>
      {isEditable ? (
        <form className={styles.form}>
          <textarea
            className={styles.textarea}
            value={text}
            onChange={(e: any) => {
              setText(e.target.value);
            }}
          />
          <div className={styles.button_container}>
          <button
              className={styles.button}
              onClick={(e: any) => {
                e.preventDefault();
                props.onSaveNote(props.articleId, text);
                setIsEditable(false);
                router.refresh();
              }}
            >
              Salvar
            </button>
            <button
              className={styles.red_button}
              onClick={(e: any) => {
                e.preventDefault();
                setText(props.existingNote);
                setIsEditable(false);
              }}
            >
              Cancelar
            </button>
          </div>
        </form>
      ) : (
        <>
          <p className={styles.note}> {props.existingNote} </p>

          <div className={styles.button_container}>
            <button
              className={styles.button}
              onClick={() => {
                setIsEditable(true);
              }}
            >
              Editar
            </button>

            <button
              className={styles.red_button}
              onClick={() => {
                props.onDeteleNote(props.articleId);
                router.refresh();
              }}
            >
              Deletar
            </button>
          </div>
        </>
      )}
    </>
  );
}
