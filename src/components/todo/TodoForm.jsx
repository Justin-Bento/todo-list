import React, { useState } from "react";
import { TextInput, ActionIcon } from "@mantine/core";
import { IconCircleMinus, IconCirclePlus, IconEdit } from "@tabler/icons";

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
      <ActionIcon color={"green"}>
        <IconCirclePlus size={18} />
      </ActionIcon>
      <ActionIcon color={"red"}>
        <IconCircleMinus size={18} />
      </ActionIcon>
      <ActionIcon>
        <IconEdit size={18} />
      </ActionIcon>
    </form>
  );
};

export default TodoForm;
