import { AppShell } from "@mantine/core";
import Head from "next/head";
import type { FC, ReactNode } from "react";

import { Header } from "./Header";
import { NavBar } from "./NavBar";

type PageLayoutProps = {
  title: string;
  children: ReactNode;
  isHideNavBar?: boolean;
};

export const PageLayout: FC<PageLayoutProps> = ({
  title,
  children,
  isHideNavBar = false,
}) => {
  return (
    <AppShell navbar={!isHideNavBar ? <NavBar /> : <></>} header={<Header />}>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </AppShell>
  );
};
