import type { CSSObject, MantineSize, Sx } from "@mantine/core";
import { useMantineTheme } from "@mantine/core";
import { useCallback } from "react";

export const useStyling = () => {
  const theme = useMantineTheme();

  const color = useCallback(
    <PropertyName extends keyof CSSObject>(
      property: PropertyName,
      {
        light,
        dark,
      }: { light: CSSObject[PropertyName]; dark: CSSObject[PropertyName] }
    ) => ({
      [property]: theme.colorScheme === "light" ? light : dark,
    }),
    [theme.colorScheme]
  );

  const responsive = useCallback(
    (size: MantineSize, styles: Sx) =>
      ({
        [`@media (max-width: ${theme.breakpoints[size]}px)`]: styles,
      } as Sx),
    [theme.breakpoints]
  );

  const s = {
    theme: {
      color,
    },
    responsive,
  };

  return { s };
};
