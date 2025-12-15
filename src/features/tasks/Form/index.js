import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { FormContainer, Input, Button } from "./styled";
import { addTask } from "../tasksSlice";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    const trimmedContent = newTaskContent.trim();

    if (trimmedContent === "") {
      setNewTaskContent("");
      return;
    }

    dispatch(
      addTask({
        content: trimmedContent,
        done: false,
        id: nanoid(),
      })
    );

    setNewTaskContent("");

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <FormContainer onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
        ref={inputRef}
      />
      <Button>Dodaj zadanie</Button>
    </FormContainer>
  );
};

export default Form;
