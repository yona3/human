import { Center, Container } from "@mantine/core";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { PageLayout } from "@/components/ui/Layout/PageLayout";
import { GoogleButton } from "@/components/ui/Parts/SocialButton/GoogleButton";
import { useAuth } from "@/hooks/auth/useAuth";

export const SignIn: NextPage = () => {
  const { authState, handleSignInWithGoogle } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (authState === "isAuthenticated") router.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {authState === "isNotAuthenticated" && (
        <PageLayout title="Sign In / human" isHideNavBar>
          <Container pt="xl">
            <Center>
              <GoogleButton size="md" onClick={() => handleSignInWithGoogle()}>
                Sign In with Google
              </GoogleButton>
            </Center>
          </Container>
        </PageLayout>
      )}
    </>
  );
};
