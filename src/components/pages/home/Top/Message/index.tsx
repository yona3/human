import { Box, Text } from "@mantine/core";
import type { FC } from "react";

export const Message: FC = () => {
  return (
    <Box>
      <Text size="xs" align="center" color="dimmed">
        おはようございます
      </Text>
    </Box>
  );
};
