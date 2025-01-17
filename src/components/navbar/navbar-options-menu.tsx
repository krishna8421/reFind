import React from "react";
import { CloudIcon, SettingsIcon, UserIcon } from "lucide-react";
import { LuGithub } from "react-icons/lu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import { GITHUB_URL } from "@/constants/site";
import NavBarLogout from "./navbar-logout";

interface NavBarOptionsMenuProps {
  imgAlt: string;
  imgSrc: string;
  username: string;
}

const NavBarOptionsMenu = ({
  imgAlt,
  imgSrc,
  username,
}: NavBarOptionsMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="border-3 border-primary-light rounded-xl cursor-pointer h-10 w-10 relative overflow-hidden">
          <Image
            src={imgSrc}
            alt={imgAlt}
            fill
            className="object-cover"
            priority
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="">My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href={`/u/${username}`}>
            <DropdownMenuItem>
              <UserIcon className="h-5 w-5" />
              <span>Profile</span>
            </DropdownMenuItem>
          </Link>
          <Link href="/settings">
            <DropdownMenuItem>
              <SettingsIcon className="h-5 w-5" />
              <span>Settings</span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <a href={GITHUB_URL} target="_blank" rel="noreferrer">
          <DropdownMenuItem>
            <LuGithub className="h-5 w-5" />
            <span>GitHub</span>
          </DropdownMenuItem>
        </a>
        {/* <DropdownMenuItem>
          <LifeBuoy />
          <span>Support</span>
        </DropdownMenuItem> */}
        <DropdownMenuItem disabled className="flex">
          <CloudIcon className="h-5 w-5" />
          <span>API</span>
          <span className="flex-1 text-right text-xs text-zinc-400">
            Coming Soon
          </span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <NavBarLogout />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavBarOptionsMenu;
