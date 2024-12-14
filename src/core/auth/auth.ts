import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/core/db";
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
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    },
  },
  advanced: {
    cookiePrefix: "refind",
    generateId: false,
  },
  user: {
    deleteUser: {
      enabled: true,
    },
  },
  account: {
    accountLinking: {
      trustedProviders: ["google", "github"],
    },
  },
});
