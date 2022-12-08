import { Box, Text } from "@mantine/core";
import type { FC } from "react";

import { useMessage } from "./hooks";

/**
 * @package
 */
export const Message: FC = () => {
  const { message } = useMessage();

  return (
    <Box>
      <Text size="xs" align="center" color="dimmed">
        {message}
      </Text>
    </Box>
  );
};
