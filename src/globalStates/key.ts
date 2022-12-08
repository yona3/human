/**
 * @package
 */
export const ATOM_KEY = {
  ["MODAL"]: "MODAL",
  ["WORK_STATUS"]: "WORK_STATUS",
} as const;

/**
 * @package
 */
export const MODAL_KEY = {
  ["HOME_FORM"]: "HOME_FORM",
} as const;

/**
 * @package
 */
export type ModalKey = keyof typeof MODAL_KEY;
