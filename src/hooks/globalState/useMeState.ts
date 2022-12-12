import { meState } from "@/globalStates";

import { useGlobalState } from "./useGlobalState";

export const useMeState = () => {
  return useGlobalState(meState);
};
