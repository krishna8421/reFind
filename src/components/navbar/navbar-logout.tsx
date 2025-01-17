"use client";

import { LogOutIcon } from "lucide-react";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { signOut } from "@/core/auth/client";

const NavBarLogout = () => {
  return (
    <DropdownMenuItem onClick={async () => await signOut()}>
      <LogOutIcon className="h-5 w-5" />
      <span>Log out</span>
    </DropdownMenuItem>
  );
};

export default NavBarLogout;
