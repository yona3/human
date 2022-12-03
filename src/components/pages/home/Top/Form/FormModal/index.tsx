import { Box, Center, Modal, Stack, Textarea } from "@mantine/core";
import type { FC } from "react";
import { useState } from "react";

import { EmojiRating } from "@/components/ui/Parts/EmojiRating";

export const FormModal: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // eslint-disable-next-line react/jsx-handler-names
    <Modal centered opened={isOpen} onClose={() => setIsOpen(false)}>
      <Stack>
        <Center>
          <EmojiRating />
        </Center>
        <Box>
          <Textarea minRows={3} placeholder="コメント" />
        </Box>
      </Stack>
    </Modal>
  );
};
