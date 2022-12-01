import { AppShell } from "@mantine/core";
import Head from "next/head";
import type { FC, ReactNode } from "react";

import { Header } from "./Header";
import { NavBar } from "./NavBar";

type PageLayoutProps = {
  title: string;
  children: ReactNode;
};

export const PageLayout: FC<PageLayoutProps> = ({ title, children }) => {
  return (
    <AppShell navbar={<NavBar />} header={<Header />}>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </AppShell>
  );
};
