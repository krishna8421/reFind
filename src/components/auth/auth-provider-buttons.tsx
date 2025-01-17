"use client";

import { Button } from "@/components/ui/button";
import { IoLogoGithub, IoLogoGoogle } from "react-icons/io5";
import { signIn } from "@/core/auth/client";

export const GithubAuthButton = () => {
  return (
    <Button
      className="w-5/6"
      onClick={async () => {
        try {
          await signIn.social(
            { provider: "github" },
            {
              onRequest: (ctx) => {
                console.log("github:onRequest", ctx);
              },
              onSuccess: (ctx) => {
                console.log("github:onSuccess", ctx);
              },
              onError: (ctx) => {
                console.log("github:onError", ctx);
              },
            }
          );
        } catch (e) {
          console.log({ e });
        }
      }}
    >
      <IoLogoGithub /> Github
    </Button>
  );
};

export const GoogleAuthButton = () => {
  return (
    <Button
      className="w-5/6"
      onClick={async () => {
        try {
          await signIn.social(
            { provider: "google" },
            {
              onRequest: (ctx) => {
                console.log("github:onRequest", ctx);
              },
              onSuccess: (ctx) => {
                console.log("github:onSuccess", ctx);
              },
              onError: (ctx) => {
                console.log("github:onError", ctx);
              },
            }
          );
        } catch (e) {
          console.log({ e });
        }
      }}
    >
      <IoLogoGoogle /> Google
    </Button>
  );
};
