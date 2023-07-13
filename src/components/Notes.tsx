"use client";

import { useState } from "react";
import styled from "styled-components";

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

export default function Notes(props: any) {
  const [text, setText] = useState("");

  return (
    <Form>
      <Textarea
        value={text}
        onChange={(e: any) => {
          setText(e.target.value);
        }}
      />
      <Button type="submit"> Criar anotação </Button>
    </Form>
  );
}
