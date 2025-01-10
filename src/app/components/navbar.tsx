import React from "react";
import Link from "next/link";
import NavBarOptions from "./navbar/navbar-options";

const NavBar = () => {
  return (
    <main className="fixed top-0 left-0 right-0 m-2 flex gap-2 justify-center">
      <nav className="z-50 bg-primary-dark bg-opacity-75 backdrop-blur-lg border border-primary-light/25 flex justify-between items-center py-2.5 px-6 rounded-2xl max-w-4xl w-full">
        <Link href="/" className="text-2xl font-bold font-pixelify-sans">
          <span className="text-[#8369ff]">re</span>Find
        </Link>
        <div className="flex gap-4">
          <Link
            href="/about"
            className="text-base font-medium hover:text-[#8369ff]"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-base font-medium hover:text-[#8369ff]"
          >
            Contact
          </Link>
        </div>
      </nav>
      <div className="z-50 bg-primary-dark bg-opacity-75 backdrop-blur-lg border border-primary-light/25 flex justify-between items-center py-2.5 px-2.5 rounded-2xl">
        <NavBarOptions />
      </div>
    </main>
  );
};

export default NavBar;
