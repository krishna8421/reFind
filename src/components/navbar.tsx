import React from "react";
import ThemeToggle from "./theme-toggle";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center py-4 max-w-4xl mx-auto px-4">
      <Link
        href="/"
        className="text-xl font-bold text-zinc-950 dark:text-zinc-50"
      >
        <span className="text-[#8369ff]">re</span>Find
      </Link>
      <ThemeToggle />
    </nav>
  );
};

export default NavBar;
