import type { User } from "@supabase/supabase-js";
import { atom } from "recoil";

import { ATOM_KEY } from "./key";

type Me =
  | User
  | null // 未ログイン
  | undefined; // 未チェック

/**
 * @package
 */
export const meState = atom<Me>({
  key: ATOM_KEY.ME,
  default: undefined,
});
