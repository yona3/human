import { useMemo } from "react";

import { useMeState } from "../globalState/useMeState";

type AuthState = "shouldCheck" | "isNotAuthenticated" | "isAuthenticated";

export const useMe = () => {
  const [me, setMe] = useMeState();
  const authState: AuthState = useMemo(() => {
    if (me === undefined) return "shouldCheck";
    if (me === null) return "isNotAuthenticated";
    if (me) return "isAuthenticated";
    return "shouldCheck";
  }, [me]);

  return { me, setMe, authState };
};
