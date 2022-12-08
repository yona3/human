import type { CSSObject, MantineSize, Sx } from "@mantine/core";
import { useMantineTheme } from "@mantine/core";
import { useCallback, useMemo } from "react";

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

  const conditional = useCallback(
    (condition: boolean, styles: Sx) => (condition ? styles : {}),
    []
  );

  const light = useCallback(
    (styles: Sx) => conditional(theme.colorScheme === "light", styles),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [theme.colorScheme]
  );

  const dark = useCallback(
    (styles: Sx) => conditional(theme.colorScheme === "dark", styles),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [theme.colorScheme]
  );

  const s = useMemo(
    () => ({
      theme: {
        color,
        light,
        dark,
      },
      conditional,
      responsive,
    }),
    [color, conditional, dark, light, responsive]
  );

  return { s };
};
