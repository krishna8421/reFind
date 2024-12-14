"use client";

import { signIn, signOut } from "@/core/auth/client";

const SignIn = () => {
  return (
    <div>
      {" "}
      <button
        className="cursor-pointer"
        onClick={async () => {
          try {
            await signIn.social(
              { provider: "google" },
              {
                onRequest: (ctx) => {
                  console.log("onRequest", ctx);
                },
                onSuccess: (ctx) => {
                  console.log("onSuccess", ctx);
                },
                onError: (ctx) => {
                  console.log("onError", ctx);
                },
              }
            );
          } catch (e) {
            console.log({ e });
          }
        }}
      >
        signin with github
      </button>
      <button
        className="cursor-pointer"
        onClick={async () => {
          try {
            await signOut();
          } catch (e) {
            console.log({ e });
          }
        }}
      >
        signout
      </button>
    </div>
  );
};

export default SignIn;
