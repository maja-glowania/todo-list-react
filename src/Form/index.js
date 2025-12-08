import { useState } from "react";
import { FormContainer, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    const trimmedContent = newTaskContent.trim();

    if (trimmedContent === "") {
      setNewTaskContent("");
      return;
    }

    addNewTask(trimmedContent);
    setNewTaskContent("");
  };

  return (
    <FormContainer onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button>Dodaj zadanie</Button>
    </FormContainer>
  );
};

export default Form;
