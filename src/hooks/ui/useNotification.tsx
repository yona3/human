import { showNotification } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons";
import { useCallback } from "react";

const notificationStyles = {
  success: {
    icon: <IconCheck size={16} />,
    color: "green",
  },
  error: {
    icon: <IconX size={16} />,
    color: "red",
  },
};

type NotificationType = keyof typeof notificationStyles;

type ShowNotificationArgs = {
  type: NotificationType;
  title: string;
  isLoading?: boolean;
  message?: string;
};

export const useNotification = () => {
  const handleShowNotification = useCallback(
    ({ type, title, isLoading, message }: ShowNotificationArgs) => {
      const { icon, color } = notificationStyles[type];
      showNotification({
        title,
        loading: isLoading,
        message,
        icon,
        color: isLoading ? "blue" : color,
      });
    },
    []
  );

  return { handleShowNotification };
};
