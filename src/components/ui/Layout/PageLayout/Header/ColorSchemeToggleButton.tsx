import { ActionIcon, Group } from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons";
import type { FC } from "react";

import { useColorScheme } from "@/hooks/ui/useColorScheme";
import { useStyling } from "@/hooks/ui/useStyling";

/**
 * @package
 */
export const ColorSchemeToggleButton: FC = () => {
  const { s } = useStyling();
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
          ...s.theme.color("backgroundColor", {
            light: theme.colors.gray[0],
            dark: theme.colors.dark[6],
          }),
          ...s.responsive("sm", {
            display: "none",
          }),
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
