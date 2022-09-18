import React, { useState } from "react";
import { TextInput, ActionIcon } from "@mantine/core";

const TodoForm = ({ saveTodo }) => {
  const [value, setValue] = useState([]);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        saveTodo(value);
      }}
    >
      <TextInput
        placeholder="Task Goes Here"
        label="What Needs To Be Done?"
        onChange={(event) => {
          setValue(event.target.value);
        }}
        value={value}
      />
    </form>
  );
};

export default TodoForm;
