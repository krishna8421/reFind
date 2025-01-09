import { betterAuth, BetterAuthOptions } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/core/db";
import { openAPI } from "better-auth/plugins";
import {
  sessionsTable,
  usersTable,
  accountsTable,
  verificationsTable,
} from "@/core/db/schema";

export const auth = betterAuth({
  appName: "reFind",
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      users: usersTable,
      sessions: sessionsTable,
      accounts: accountsTable,
      verifications: verificationsTable,
    },
    usePlural: true,
  }),
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      mapProfileToUser: (profile) => {
        return {
          username: profile.email.split("@").join("-").split(".").join("-"),
        };
      },
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      mapProfileToUser: (profile) => {
        return {
          username: profile.email.split("@").join("-").split(".").join("-"),
        };
      },
    },
  },
  advanced: {
    cookiePrefix: "refind",
    generateId: false,
  },
  user: {
    // deleteUser: {
    //   enabled: true,
    // },
    additionalFields: {
      username: {
        type: "string",
        required: true,
        unique: true,
      },
    },
  },
  account: {
    accountLinking: {
      trustedProviders: ["google", "github"],
    },
  },
  plugins: [openAPI()],
} satisfies BetterAuthOptions);
