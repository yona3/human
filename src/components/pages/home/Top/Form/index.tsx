import { Box, Button, Group, Stack } from "@mantine/core";
import type { FC } from "react";

import { useModal } from "@/hooks/ui/useModal";

import { FormModal } from "./FormModal";

export const Form: FC = () => {
  const { handleOpen } = useModal("HOME_FORM");

  return (
    <Box>
      <FormModal />
      <Stack>
        <Box>
          <Group grow>
            <Button onClick={handleOpen}>出勤</Button>
            {/* <Button color={"green"}>中抜け</Button> */}
            <Button disabled>退勤</Button>
          </Group>
        </Box>
      </Stack>
    </Box>
  );
};
