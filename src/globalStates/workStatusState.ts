import { atom } from "recoil";

import { ATOM_KEY } from "./key";

type WorkStatus =
  | "work" // 勤務中
  | "step out" // 中抜け
  | "out" // 勤務時間外
  | "off"; // 休み

/**
 * @package
 */
export const workStatusState = atom<WorkStatus | null>({
  key: ATOM_KEY.WORK_STATUS_STATE,
  default: null,
});
