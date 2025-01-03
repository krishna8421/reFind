"use client";

import { useSession } from "@/core/auth/client";
import LoginButton from "./auth/login-button";
import Image from "next/image";

const NavBarOptions = () => {
  const { data: session, isPending } = useSession();

  if (isPending)
    return (
      <div className="w-10 h-10 border-3 border-primary-light rounded-xl" />
    );

  if (session)
    return (
      <Image
        src={session.user.image!}
        alt={session.user.name}
        width={40}
        height={40}
        className="border-3 border-primary-light rounded-xl"
      />
    );

  return <LoginButton />;
};

export default NavBarOptions;
