import { useMemo } from "react";

import { timeZone } from "@/utils/date";

const MESSAGES = [
  "おはようございます",
  "こんにちは",
  "こんばんは",
  "おやすみなさい",
];

/**
 * @package
 */
export const useMessage = () => {
  const message = useMemo(() => {
    const index = (() => {
      switch (timeZone) {
        case "morning":
          return 0;
        case "daytime":
        case "any":
          return 1;
        case "night":
          return 2;
        case "late night":
          return 3;
      }
    })();

    return MESSAGES[index];
  }, []);

  return { message };
};
