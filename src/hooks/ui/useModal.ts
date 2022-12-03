import { useCallback, useMemo } from "react";

import type { ModalKey } from "@/globalStates";

import { useModalState } from "../globalState/useModalState";

export const useModal = (modalKey: ModalKey) => {
  const [modalState, setModalState] = useModalState();

  const isOpen = useMemo(
    () => (modalState && modalState[modalKey].isOpen) || false,
    [modalKey, modalState]
  );

  const handleOpen = useCallback(() => {
    setModalState((prev) => ({ ...prev, [modalKey]: { isOpen: true } }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalKey]);

  const handleClose = useCallback(() => {
    setModalState((prev) => ({ ...prev, [modalKey]: { isOpen: false } }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalKey]);

  return { isOpen, handleOpen, handleClose };
};
