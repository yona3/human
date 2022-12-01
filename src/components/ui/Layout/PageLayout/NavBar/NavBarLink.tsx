import { Tooltip, UnstyledButton } from "@mantine/core";
import type { TablerIcon } from "@tabler/icons";
import Link from "next/link";
import type { FC } from "react";
import { useMemo } from "react";

import { useNavBarStyles } from "./hooks/useNavbarStyles";

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
  const { classes, cx } = useNavBarStyles();
  const jsx = useMemo(
    () => (
      <Tooltip label={label} position="right" transitionDuration={0}>
        <UnstyledButton
          onClick={handleClick}
          className={cx(classes.link, { [classes.active]: active })}
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
