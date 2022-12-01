import type { NextPage } from "next";

import { PageLayout } from "@/components/ui/Layout/PageLayout";

export const HomePage: NextPage = () => {
  return (
    <PageLayout title="Home / human">
      <p>Hello,world!</p>
    </PageLayout>
  );
};
