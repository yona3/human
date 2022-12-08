import { Center, Container } from "@mantine/core";
import type { NextPage } from "next";

import { PageLayout } from "@/components/ui/Layout/PageLayout";
import { GoogleButton } from "@/components/ui/Parts/SocialButton/GoogleButton";

export const SignIn: NextPage = () => {
  return (
    <PageLayout title="Sign In / human" isHideNavBar>
      <Container pt="xl">
        <Center>
          <GoogleButton size="md">Sign In with Google</GoogleButton>
        </Center>
      </Container>
    </PageLayout>
  );
};
