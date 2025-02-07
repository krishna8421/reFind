import { betterAuth, BetterAuthOptions } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { db } from "@/core/db";
import { openAPI } from "better-auth/plugins";

const emailToUsername = (email: string) => {
  return email.split("@").join("-").split(".").join("-");
};

export const auth = betterAuth({
  appName: "reFind",
  database: prismaAdapter(db, {
    provider: "sqlite",
  }),
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      mapProfileToUser: (profile) => {
        return {
          username: emailToUsername(profile.email),
        };
      },
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      mapProfileToUser: (profile) => {
        return {
          username: emailToUsername(profile.email),
        };
      },
    },
  },
  advanced: {
    cookiePrefix: "refind",
    generateId: false,
  },
  user: {
    deleteUser: {
      enabled: false,
    },
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
