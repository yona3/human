/**
 * @package
 */
export const ATOM_KEY = {
  ["MODAL_STATE"]: "MODAL_STATE",
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
