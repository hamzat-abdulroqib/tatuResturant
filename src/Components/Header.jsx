import React from "react";
import logo from "../assets/logo.svg";
import { ChevronDown, User, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="relative flex w-full items-center justify-between bg-white px-4 py-4 font-serif text-gray-800 shadow-sm md:px-8">
      <div className="flex items-center gap-6">
        <button type="button" className="md:hidden">
          <Menu className="h-6 w-6" />
        </button>
        <div className="hidden items-center gap-6 md:flex">
          <a
            href="#"
            className="text-sm font-light tracking-widest hover:text-black"
          >
            FAIRMONT HOME
          </a>
          <div className="h-8 border-l border-gray-300"></div>
          <button
            type="button"
            className="flex items-center gap-1 text-sm font-light tracking-widest hover:text-black"
          >
            <span>HOTELS & RESORTS</span>
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <a href="/" aria-label="Fairmont The Norfolk, Homepage">
          <img src={logo} alt="Fairmont The Norfolk" className="w-28 md:w-36" />
        </a>
      </div>

      <div className="flex items-center gap-6">
        <a href="#" className="md:hidden">
          <User className="h-6 w-6" />
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <a href="#" className="text-sm font-light hover:text-black">
            All loyalty
          </a>
          <button
            type="button"
            className="flex items-center gap-1 text-sm font-light hover:text-black"
          >
            <span>EN</span>
            <ChevronDown className="h-4 w-4" />
          </button>
          <a
            href="#"
            className="flex items-center gap-2 text-sm font-light hover:text-black"
          >
            <User className="h-5 w-5" />
            <span>My Account</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
