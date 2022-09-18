import React from "react";
import { List } from "@mantine/core";

const TodoList = () => {
  return (
    <>
      <List>
        <List.Item>Clone or download repository from GitHub</List.Item>
        <List.Item>Install dependencies with yarn</List.Item>
        <List.Item>To start development server run npm start command</List.Item>
        <List.Item>
          Run tests to make sure your changes do not break the build
        </List.Item>
        <List.Item>Submit a pull request once you are done</List.Item>
      </List>
    </>
  );
};

export default TodoList;
