import { Button, Group } from "@mantine/core";
import type { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <Group mt={50} position="center">
      <Button size="xl">Welcome to Mantine!</Button>
    </Group>
  );
};

export default IndexPage;
