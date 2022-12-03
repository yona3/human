import { Tooltip, UnstyledButton } from "@mantine/core";
import type { TablerIcon } from "@tabler/icons";
import Link from "next/link";
import type { FC } from "react";
import { useMemo } from "react";

import { useStyling } from "@/hooks/ui/useStyling";

type NavbarLinkProps = {
  icon: TablerIcon;
  label: string;
  path?: string;
  active?: boolean;
  onClick?(): void;
};

/**
 * @package
 */
export const NavbarLink: FC<NavbarLinkProps> = ({
  icon: Icon,
  label,
  path,
  active,
  onClick: handleClick,
}) => {
  const { s } = useStyling();

  const jsx = useMemo(
    () => (
      <Tooltip label={label} position="right" transitionDuration={0}>
        <UnstyledButton
          onClick={handleClick}
          sx={(theme) => ({
            width: 50,
            height: 50,
            borderRadius: theme.radius.md,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            ...s.theme.color("color", {
              light: theme.colors.gray[7],
              dark: theme.colors.dark[0],
            }),
            ["&:hover"]: {
              ...s.theme.color("backgroundColor", {
                light: theme.colors.gray[0],
                dark: theme.colors.dark[5],
              }),
            },
            ...s.conditional(!!active, {
              ["&, &:hover"]: {
                backgroundColor: theme.fn.variant({
                  variant: "light",
                  color: theme.primaryColor,
                }).background,
                color: theme.fn.variant({
                  variant: "light",
                  color: theme.primaryColor,
                }).color,
              },
            }),
          })}
        >
          <Icon stroke={1.5} />
        </UnstyledButton>
      </Tooltip>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [active]
  );

  return <>{path ? <Link href={path}>{jsx}</Link> : jsx}</>;
};
