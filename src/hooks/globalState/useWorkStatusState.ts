import { useEffect } from "react";

import { workStatusState } from "@/globalStates";

import { useGlobalState } from "./useGlobalState";

export const useWorkStatusState = () => {
  const [state, setState] = useGlobalState(workStatusState);

  // 動作確認用
  useEffect(() => {
    setState("out");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [state, setState];
};
