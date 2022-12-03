import { Navbar, Stack } from "@mantine/core";
import {
  IconGauge,
  IconHome2,
  IconLogout,
  IconSettings,
  IconUser,
} from "@tabler/icons";
import type { FC } from "react";
import { useState } from "react";

import { useStyling } from "@/hooks/ui/useStyling";

import { NavbarLink } from "./NavBarLink";

const NAV_ITEMS = [
  { icon: IconHome2, label: "Home", path: "/" },
  { icon: IconGauge, label: "Dashboard", path: "/dashbord" },
  { icon: IconUser, label: "Account", path: "/account" },
  { icon: IconSettings, label: "Settings", path: "/setings" },
];

/**
 * @package
 */
export const NavBar: FC = () => {
  const { s } = useStyling();
  const [active, setActive] = useState(0);
  const handleNavLinkClick = (index: number) => setActive(index);

  const links = NAV_ITEMS.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => handleNavLinkClick(index)}
    />
  ));

  return (
    <Navbar
      w="80px"
      p="md"
      sx={{
        ...s.responsive("sm", {
          display: "none",
        }),
      }}
    >
      <Navbar.Section grow>
        <Stack justify="center" spacing={0}>
          {links}
        </Stack>
      </Navbar.Section>
      <Navbar.Section>
        <Stack justify="center" spacing={0}>
          <NavbarLink icon={IconLogout} label="Logout" />
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
};
