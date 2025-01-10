import Link from "next/link";
import NavBarOptions from "./navbar-options";
import { Button } from "../ui/button";
import { RiSearch2Line } from "react-icons/ri";
import ModeSwitch from "../mode-switch";

const NavBar = () => {
  return (
    <main className="fixed top-0 left-0 right-0 m-2 flex gap-2 justify-center max-w-3xl md:mx-auto">
      <nav className="z-50 bg-primary-dark bg-opacity-75 backdrop-blur-lg border border-primary-light/50 flex justify-between items-center py-2.5 px-2.5 rounded-2xl w-full">
        <Link href="/" className="text-2xl font-bold font-pixelify-sans">
          <span className="text-[#8369ff]">re</span>Find
        </Link>
        <div className="flex gap-2">
          <ModeSwitch />
          <Button size="icon">
            <RiSearch2Line />
          </Button>
        </div>
      </nav>
      <div className="z-50 bg-primary-dark bg-opacity-75 backdrop-blur-lg border border-primary-light/50 flex justify-between items-center py-2.5 px-2.5 rounded-2xl">
        <NavBarOptions />
      </div>
    </main>
  );
};

export default NavBar;
