import { SITE_URL } from "@/lib/constant";
import { createAuthClient } from "better-auth/react";
import { toast } from "sonner";

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
  fetchOptions: {
    onError(e) {
      if (e.error.status === 429) {
        toast.error("Too many requests. Please try again later.");
      }
    },
  },
});
