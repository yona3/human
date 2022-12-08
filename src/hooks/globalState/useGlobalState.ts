import type { RecoilState } from "recoil";
import { useRecoilState } from "recoil";

/**
 * @package
 */
export const useGlobalState = <T>(recoilState: RecoilState<T>) => {
  return useRecoilState(recoilState);
};
