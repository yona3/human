import {
  Box,
  Button,
  Center,
  Flex,
  Modal,
  Stack,
  Textarea,
} from "@mantine/core";
import type { FC } from "react";

import { EmojiRating } from "@/components/ui/Parts/EmojiRating";
import { useModal } from "@/hooks/ui/useModal";
import { useNotification } from "@/hooks/ui/useNotification";

/**
 * @package
 */
export const FormModal: FC = () => {
  const { isOpen, handleClose } = useModal("HOME_FORM");
  const { handleShowNotification } = useNotification();

  const handleSubmit = () => {
    // ...
    handleShowNotification({
      type: "success",
      title: "出勤記録を送信しました。",
    });
    handleClose();
  };

  return (
    // eslint-disable-next-line react/jsx-handler-names
    <Modal title="出勤記録" opened={isOpen} onClose={handleClose} centered>
      <Stack spacing="lg">
        <Center>
          <EmojiRating />
        </Center>
        <Box>
          <Textarea minRows={3} placeholder="コメント (任意)" />
        </Box>
        <Flex justify="end">
          <Button onClick={handleSubmit}>送信</Button>
        </Flex>
      </Stack>
    </Modal>
  );
};
