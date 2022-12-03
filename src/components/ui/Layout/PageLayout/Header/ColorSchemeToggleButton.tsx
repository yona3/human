import { ActionIcon, Group } from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons";
import type { FC } from "react";

import { useColorScheme } from "@/hooks/ui/useColorScheme";

/**
 * @package
 */
export const ColorSchemeToggleButton: FC = () => {
  const { colorScheme, handleToggleColorScheme, isDark } = useColorScheme();

  return (
    <Group position="center">
      <ActionIcon
        variant="outline"
        color={isDark ? "yellow" : "blue"}
        onClick={() => handleToggleColorScheme()}
        size="lg"
        radius={"md"}
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        })}
      >
        {colorScheme === "dark" ? (
          <IconSun size={18} />
        ) : (
          <IconMoonStars size={18} />
        )}
      </ActionIcon>
    </Group>
  );
};
