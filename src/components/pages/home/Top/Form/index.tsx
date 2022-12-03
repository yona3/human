import { Box, Button, Group, Stack } from "@mantine/core";
import type { FC } from "react";

import { FormModal } from "./FormModal";

export const Form: FC = () => {
  return (
    <Box>
      <FormModal />
      <Stack>
        <Box>
          <Group grow>
            <Button>出勤</Button>
            {/* <Button color={"green"}>中抜け</Button> */}
            <Button disabled>退勤</Button>
          </Group>
        </Box>
      </Stack>
    </Box>
  );
};
