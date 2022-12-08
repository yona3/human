import { Box, Button, Group, Stack } from "@mantine/core";
import type { FC } from "react";
import { useMemo } from "react";

import { useWorkStatusState } from "@/hooks/globalState/useWorkStatusState";
import { useModal } from "@/hooks/ui/useModal";

import { FormModal } from "./FormModal";

/**
 * @package
 */
export const Form: FC = () => {
  const [workStatus] = useWorkStatusState();
  const { handleOpen } = useModal("HOME_FORM");

  const workingActionButton = useMemo(() => {
    switch (workStatus) {
      case "out":
        return {
          left: { name: "出勤", props: { onClick: handleOpen } },
          right: { name: "退勤", props: { disabled: true } },
        };
      case "work":
        return {
          left: {
            name: "中抜け",
            props: { color: "green", onClick: handleOpen },
          },
          right: { name: "退勤", props: { onClick: handleOpen } },
        };
      case "step out":
        return {
          left: {
            name: "戻る",
            props: { color: "green", onClick: handleOpen },
          },
          right: { name: "退勤", props: { onClick: handleOpen } },
        };
      case "off":
      default:
        return {
          left: { name: "", props: { disabled: true } },
          right: { name: "", props: { disabled: true } },
        };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [workStatus]);

  return (
    <Box>
      <FormModal />
      <Stack>
        <Box>
          <Group grow>
            <Button {...workingActionButton.left.props}>
              {workingActionButton.left.name}
            </Button>
            <Button {...workingActionButton.right.props}>
              {workingActionButton.right.name}
            </Button>
          </Group>
        </Box>
      </Stack>
    </Box>
  );
};
