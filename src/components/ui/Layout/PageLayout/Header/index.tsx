import { Burger, Flex, Header as MantineHeader, Title } from "@mantine/core";
import { Comfortaa } from "@next/font/google";
import type { FC } from "react";

import { useStyling } from "@/hooks/ui/useStyling";

import { ColorSchemeToggleButton } from "./ColorSchemeToggleButton";

const comfortaa = Comfortaa({ weight: "300", subsets: ["latin"] });

const Logo: FC = () => (
  <Title order={1} size="h3" className={comfortaa.className}>
    human
  </Title>
);

/**
 * TODO:
 * - NavBarのレスポンシブ対応
 *   - PC版のNavBar別のものにしたい (ex. full pageモーダル)
 */

/**
 * @package
 */
export const Header: FC = () => {
  const { s } = useStyling();

  return (
    <MantineHeader
      height={60}
      sx={{
        padding: "0 24px",
        ...s.responsive("sm", {
          padding: "0 14px",
        }),
      }}
    >
      <Flex align="center">
        <Burger
          opened={false}
          // eslint-disable-next-line react/jsx-handler-names
          onClick={() => {
            console.log("click");
          }}
          size="sm"
          mr="sm"
          sx={{
            display: "none",
            ...s.responsive("sm", {
              display: "block",
            }),
          }}
        />
        <Flex h={60} w="100%" justify={"space-between"} align={"center"}>
          <Logo />
          <ColorSchemeToggleButton />
        </Flex>
      </Flex>
    </MantineHeader>
  );
};
