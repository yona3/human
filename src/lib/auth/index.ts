import type { AuthChangeEvent, Session } from "@supabase/supabase-js";

import { supabase } from "../supabase";

export const auth = {
  getSession: async () => {
    const response = await supabase.auth.getSession();
    return response;
  },
  onAuthStateChange: (
    callback: (event: AuthChangeEvent, session: Session | null) => void
  ) => supabase.auth.onAuthStateChange(callback),
  getUser: async () => {
    const response = await supabase.auth.getUser();
    return response;
  },
  signInWithGoogle: async () => {
    const response = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    return response;
  },
  signOut: async () => {
    const response = await supabase.auth.signOut();
    return response;
  },
};
