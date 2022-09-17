import React from "react";
import {
  ActionIcon,
  Container,
  Center,
  Divider,
  Box,
  Text,
  Space,
  TextInput,
} from "@mantine/core";
import { IconCircleMinus, IconCirclePlus, IconEdit } from "@tabler/icons";

function index() {
  return (
    <Container>
      <Center>
        <Box>
          <Text component="h1" size="xl" weight={600}>
            Todo Maniac
          </Text>
          <Text component="p" lineClamp={2}>
            Todo Maniac is app for a list of tasks you need to complete or
            things that you want to do
          </Text>
          <TextInput
            placeholder="Task Goes Here"
            label="What Needs To Be Done?"
            withAsterisk
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
        </Box>
      </Center>
      <Box>
        <Space h={'md'}/>
        <Divider />
        <Space h={'md'}/>
        <Center>
          <Text component="p" lineClamp={2}>
            Here is a list of things that should be done:
          </Text>
        </Center>
      </Box>
      <Box>
        <Space h={'md'}/>
        <Divider />
        <Space h={'md'}/>
        <Center>
          <Text component="p" lineClamp={2}>
            Here is a list of completed items for the day:
          </Text>
        </Center>
      </Box>
    </Container>
  );
}

export default index;
