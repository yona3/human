import { Center, Loader } from "@mantine/core";
import { useRouter } from "next/router";
import type { FC, ReactNode } from "react";
import { useEffect } from "react";

import { PageLayout } from "@/components/ui/Layout/PageLayout";
import { useSession } from "@/hooks/auth/useSession";

type Props = {
  children: ReactNode;
};

export const Auth: FC<Props> = ({ children }) => {
  const { authState } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (authState === "isNotAuthenticated") router.push("/signin");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authState]);

  return (
    <>
      {authState === "isAuthenticated" && children}
      {authState === "isNotAuthenticated" &&
        router.pathname === "/signin" &&
        children}
      {authState === "shouldCheck" && (
        <PageLayout title="human" isHideNavBar>
          <Center>
            <Loader mt="lg" size="sm" />
          </Center>
        </PageLayout>
      )}
    </>
  );
};
