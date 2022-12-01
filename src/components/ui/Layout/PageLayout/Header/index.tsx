import { Flex, Header as MantineHeader, Title } from "@mantine/core";
import { Comfortaa } from "@next/font/google";
import type { FC } from "react";

import { ColorSchemeToggleButton } from "./ColorSchemeToggleButton";

const comfortaa = Comfortaa({ weight: "300", subsets: ["latin"] });

const Logo: FC = () => (
  <Title order={1} size="h3" className={comfortaa.className}>
    human
  </Title>
);

export const Header: FC = () => {
  return (
    <MantineHeader height={60} px={"xl"}>
      <Flex h={60} justify={"space-between"} align={"center"}>
        <Logo />
        <ColorSchemeToggleButton />
      </Flex>
    </MantineHeader>
  );
};
