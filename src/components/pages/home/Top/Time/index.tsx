import { Box, Flex, Text, Title } from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons";
import type { FC } from "react";

import { useTimer } from "@/hooks/utils/useTimer";
import { isDaytime } from "@/utils/date";

export const Time: FC = () => {
  const { today, nowTime } = useTimer();

  return (
    <Box>
      <Text align="center" weight="bold">
        {today}
      </Text>
      <Flex mt="xs" miw="180px" justify="center" sx={{ position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            left: "8px",
            top: "14px",
          }}
        >
          {isDaytime ? (
            <IconSun color="orange" size={18} />
          ) : (
            <IconMoonStars color="violet" size={18} />
          )}
        </Box>
        <Title order={2} size="h1" align="center">
          {nowTime}
        </Title>
      </Flex>
    </Box>
  );
};
