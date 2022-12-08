import { useInterval } from "@mantine/hooks";
import { useEffect, useMemo, useState } from "react";

import { getDate, getTime } from "@/utils/date";

export const useTimer = () => {
  const [now, setNow] = useState(Date.now());
  const interval = useInterval(() => setNow(Date.now()), 1000);
  const isActive = useMemo(() => interval.active, [interval.active]);

  useEffect(() => {
    interval.start();
    return interval.stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const today = useMemo(() => (isActive ? getDate(now) : "-"), [now, isActive]);
  const nowTime = useMemo(
    () => (isActive ? getTime(now) : "-"),
    [now, isActive]
  );

  return { today, nowTime };
};
