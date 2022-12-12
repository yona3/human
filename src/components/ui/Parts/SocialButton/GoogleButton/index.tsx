import type { ButtonProps } from "@mantine/core";
import { Button } from "@mantine/core";
import type { MouseEventHandler } from "react";

import { GoogleIcon } from "@/components/ui/Icons/GoogleIcon";
import { useStyling } from "@/hooks/ui/useStyling";

export const GoogleButton = (
  // props: PolymorphicComponentProps<"button", ButtonProps>
  props: ButtonProps & { onClick?: MouseEventHandler<HTMLButtonElement> }
) => {
  const { s } = useStyling();

  return (
    <Button
      leftIcon={<GoogleIcon />}
      sx={(theme) => ({
        padding: "0 24px",
        border: "1px solid",
        borderRadius: "6px",
        ...s.theme.light({
          color: theme.colors.gray[7],
          borderColor: theme.colors.gray[3],
          backgroundColor: "#FFF",
          ["&:hover"]: {
            backgroundColor: theme.colors.gray[0],
          },
        }),
        ...s.theme.dark({
          color: theme.colors.dark[0],
          borderColor: theme.colors.gray[8],
          backgroundColor: theme.colors.dark[5],
          ["&:hover"]: {
            backgroundColor: theme.colors.dark[6],
          },
        }),
      })}
      {...props}
    />
  );
};
