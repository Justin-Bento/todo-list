import React, { useState } from "react";
import {
  Container,
  Center,
  Divider,
  Box,
  Text,
  Space,
  TextInput,
} from "@mantine/core";
import TodoForm from "../components/todo/TodoForm";
import TodoList from "../components/todo/TodoList";

function index() {
  const [todos, setTodos] = useState([]);
  return (
    <Container>
      <Box>
        <Text component="h1" size="xl" weight={600}>
          Todo Maniac
        </Text>
        <Text component="p" lineClamp={2}>
          Todo Maniac is app for a list of tasks you need to complete or things
          that you want to do
        </Text>
        <TodoForm
          saveTodo={(todoText) => {
            const trimmedText = todoText.trim();

            if (trimmedText.length > 0) {
              setTodos([...todos, trimmedText]);
            }
          }}
        />
      </Box>
      {/* End of list of completed actions */}
      <Space h={"md"} />
      <Divider />
      <Space h={"lg"} />
      <Box>
        <Text component="p" lineClamp={2}>
          Here is a list of things that should be done:
        </Text>
        <TodoList
          todos={todos}
          deleteTodo={(todoIndex) => {
            const newTodos = todos.filter((_, index) => index !== todoIndex);

            setTodos(newTodos);
          }}
        />
      </Box>
      {/* End of list of actions */}
      <Space h={"lg"} />
      <Divider />
      <Space h={"md"} />
      <Box>
        <Text component="p" lineClamp={2}>
          Here is a list of completed items for the day:
        </Text>
      </Box>
      {/* End of list of completed actions */}
    </Container>
  );
}

export default index;
