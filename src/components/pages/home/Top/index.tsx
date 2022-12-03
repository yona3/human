import { Stack } from "@mantine/core";
import type { FC } from "react";

import { Form } from "./Form";
import { Message } from "./Message";
import { Time } from "./Time";

/**
 * @package
 */
export const Top: FC = () => {
  return (
    <Stack>
      <Time />
      <Message />
      <Form />
    </Stack>
  );
};
