import { meState } from "@/globalStates";

import { useGlobalState } from "./useGlobalState";

/**
 * @package
 */
export const useMeState = () => {
  return useGlobalState(meState);
};
