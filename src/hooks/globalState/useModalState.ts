import { modalState } from "@/globalStates";

import { useGlobalState } from "./useGlobalState";

export const useModalState = () => {
  return useGlobalState(modalState);
};
