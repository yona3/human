import type { Session } from "@supabase/supabase-js";
import { useCallback, useEffect, useState } from "react";

import { auth } from "@/lib/auth";

import { useMe } from "./useMe";

export const useSession = () => {
  const [session, setSession] = useState<Session | null | undefined>(undefined);
  const { setMe, authState } = useMe();

  const handleGetUser = useCallback(async () => {
    const userResponse = await auth.getUser();
    setMe(userResponse.data.user);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const init = useCallback(async () => {
    const {
      data: { session },
    } = await auth.getSession();
    setSession(session);

    if (authState === "shouldCheck") handleGetUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authState]);

  useEffect(() => {
    init();

    auth.onAuthStateChange((_event, session) => {
      setSession(session);
      handleGetUser();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { session, authState };
};
