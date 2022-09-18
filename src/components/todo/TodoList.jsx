import React from "react";
import {
  ActionIcon,
  Box,
  Center,
  Checkbox,
  SimpleGrid,
  Tooltip,
} from "@mantine/core";
import { IconSquarePlus, IconTrash, IconEdit } from "@tabler/icons";

const TodoList = () => {
  return (
    <>
      <SimpleGrid
        cols={2}
        spacing="lg"
        breakpoints={[
          { maxWidth: 980, cols: 3, spacing: "md" },
          { maxWidth: 755, cols: 2, spacing: "sm" },
          { maxWidth: 600, cols: 1, spacing: "sm" },
        ]}
      >
        <Box>
          <Checkbox label="Clone or download repository from GitHub" />
        </Box>
        <Box>
          <Center>
            <Tooltip label="Edit List Item">
              <ActionIcon color="blue">
                <IconEdit />
              </ActionIcon>
            </Tooltip>
            <Tooltip label="Remove Item">
              <ActionIcon color="red">
                <IconTrash />
              </ActionIcon>
            </Tooltip>
            <Tooltip label="Add extra items for more complex task">
              <ActionIcon color="green">
                <IconSquarePlus />
              </ActionIcon>
            </Tooltip>
          </Center>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default TodoList;
