import { SITE_URL } from "@/lib/constant";
import { createAuthClient } from "better-auth/react";
import { inferAdditionalFields } from "better-auth/client/plugins";
import { toast } from "sonner";
import type { auth } from "./auth";

export const {
  signIn,
  signUp,
  deleteUser,
  signOut,
  useSession,
  updateUser,
  listAccounts,
} = createAuthClient({
  baseURL: SITE_URL,
  plugins: [inferAdditionalFields<typeof auth>()],
  fetchOptions: {
    onError(e) {
      if (e.error.status === 429) {
        toast.error("Too many requests. Please try again later.");
      }
    },
  },
});
