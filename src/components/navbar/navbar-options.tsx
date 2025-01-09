"use client";

import { useSession } from "@/core/auth/client";
import LoginButton from "../auth/login-button";
import Image from "next/image";
import NavBarOptionsMenu from "./navbar-options-menu";

const NavBarOptions = () => {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return (
      <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-primary-light animate-pulse" />
    );
  }
  return !session ? (
    <LoginButton />
  ) : (
    <NavBarOptionsMenu
      imgAlt={session.user.name}
      imgSrc={session.user.image!}
      username={session.user.username}
    />
  );
};

export default NavBarOptions;
