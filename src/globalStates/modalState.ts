import { atom } from "recoil";

import type { MODAL_KEY } from "./key";
import { ATOM_KEY } from "./key";

type ModalState = {
  [key in typeof MODAL_KEY[keyof typeof MODAL_KEY]]: {
    isOpen: boolean;
  };
};

/**
 * @package
 */
export const modalState = atom<ModalState | null>({
  key: ATOM_KEY.MODAL_STATE,
  default: null,
});
