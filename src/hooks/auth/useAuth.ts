import { useCallback } from "react";

import { auth } from "@/lib/auth";

import { useMe } from "./useMe";

export const useAuth = () => {
  const { authState, setMe } = useMe();

  const handleSignInWithGoogle = useCallback(async () => {
    try {
      const { error } = await auth.signInWithGoogle();
      if (error) throw error;
    } catch (error) {
      console.error(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSignOut = useCallback(async () => {
    try {
      const { error } = await auth.signOut();
      if (error) throw error;
      setMe(null);
    } catch (error) {
      console.error(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    authState,
    handleSignInWithGoogle,
    handleSignOut,
  };
};
