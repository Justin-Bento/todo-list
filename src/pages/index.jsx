import React from "react";
import {
  Container,
  Center,
  Divider,
  Box,
  Text,
  Space,
  TextInput,
} from "@mantine/core";
import TodoList from "../components/todo/TodoList";

function index() {
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
        <TextInput
          placeholder="Task Goes Here"
          label="What Needs To Be Done?"
          withAsterisk
        />
      </Box>
      {/* End of list of completed actions */}
      <Space h={"md"} />
      <Box>
        <Text component="p" lineClamp={2}>
          Here is a list of things that should be done:
        </Text>
        <TodoList />
      </Box>
      {/* End of list of actions */}
      <Space h={"md"} />
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
