import {
  Box,
  Container,
  Divider,
  Stack,
  Text,
  Timeline,
  Title,
} from "@mantine/core";
import type { FC } from "react";

import { useStyling } from "@/hooks/ui/useStyling";

type EngravingHistory = {
  title: string;
  time: string;
};

const HISTORY: EngravingHistory[] = [
  {
    title: "退勤",
    time: "2022年12月03日(土) 19:01",
  },
  {
    title: "出勤",
    time: "2022年12月03日(土) 9:03",
  },
  {
    title: "退勤",
    time: "2022年12月02日(土) 19:01",
  },
  {
    title: "出勤",
    time: "2022年12月02日(土) 9:03",
  },
];

/**
 * @package
 */
export const EngravingHistory: FC = () => {
  const { s } = useStyling();

  return (
    <Container
      px="lg"
      py="md"
      sx={(theme) => ({
        marginTop: "42px",
        border: "1px solid",
        ...s.theme.color("borderColor", {
          light: theme.colors.gray[4],
          dark: theme.colors.gray[8],
        }),
        borderRadius: theme.radius.sm,
        width: "420px",
        ...s.responsive("sm", {
          width: "70vw",
        }),
      })}
    >
      <Stack>
        <Box>
          <Title order={3} size="h4">
            履歴
          </Title>
          <Divider mt="sm" />
        </Box>
        <Timeline py="sm" active={1} bulletSize={18} lineWidth={4}>
          {HISTORY.map(({ title, time }, index) => (
            <Timeline.Item key={time} tabIndex={index} title={title}>
              <Text mt="sm" color="dimmed" size="xs">
                {time}
              </Text>
            </Timeline.Item>
          ))}
        </Timeline>
      </Stack>
    </Container>
  );
};
