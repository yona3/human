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

/**
 * @package
 */
export const FormModal: FC = () => {
  const { isOpen, handleClose } = useModal("HOME_FORM");

  const handleSubmit = () => {
    // ...
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
