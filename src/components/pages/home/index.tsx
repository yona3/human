import { Center, Container, Flex } from "@mantine/core";
import type { NextPage } from "next";

import { PageLayout } from "@/components/ui/Layout/PageLayout";

import { EngravingHistory } from "./EngravingHistory";
import { Top } from "./Top";

export const HomePage: NextPage = () => {
  return (
    <PageLayout title="Home / human">
      <Container pt="42px">
        <Center h="100%">
          <Flex direction="column" align="center">
            <Top />
            <EngravingHistory />
          </Flex>
        </Center>
      </Container>
    </PageLayout>
  );
};
