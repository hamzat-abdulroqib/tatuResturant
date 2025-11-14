import React, { useState } from "react";

import { ChevronDown, User, Menu, X, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const mobileNavItems = [
  {
    label: "Stay",
    path: "/stay",
    subLinks: [
      { label: "Rooms", path: "/stay/rooms" },
      { label: "Suites", path: "/stay/suites" },
    ],
  },
  {
    label: "Offers",
    path: "/offers",
    subLinks: null,
  },
  {
    label: "Dine",
    path: "/dine",
    subLinks: [
      { label: "Tatu Restaurant", path: "/dine/tatu" },
      { label: "Lord Delamere Terrace", path: "/dine/terrace" },
    ],
  },
  {
    label: "Events",
    path: "/events",
    subLinks: [
      { label: "Meetings & Conferences", path: "/events/meetings" },
      { label: "Weddings", path: "/events/weddings" },
      { label: "Social Events & Celebrations", path: "/events/social" },
    ],
  },
  {
    label: "About The Hotel",
    path: "/about",
    subLinks: [
      { label: "Our History", path: "/about/history" },
      { label: "Location", path: "/about/location" },
    ],
  },
];

function MobileMenu({ onClose }) {
  const [openAccordion, setOpenAccordion] = useState("Events");

  const toggleAccordion = (label) => {
    setOpenAccordion(openAccordion === label ? null : label);
  };

  return (
    <div className="fixed inset-0 z-50 bg-white text-gray-900 font-serif md:hidden">
      <div className="flex items-center justify-between px-4 py-3 shadow-sm">
        <button onClick={onClose} aria-label="Close menu">
          <X className="h-6 w-6" />
        </button>
        <Link to="/" onClick={onClose}>
          <img src={logo} alt="Fairmont The Norfolk" className="h-8" />
        </Link>
        <Link to="/my-account" onClick={onClose} aria-label="My Account">
          <User className="h-6 w-6" />
        </Link>
      </div>

      <div className="p-6">
        <Link
          to="/"
          onClick={onClose}
          className="flex items-center gap-2 mb-6 text-lg"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Fairmont home</span>
        </Link>

        <nav className="space-y-4">
          {mobileNavItems.map((item) => {
            const isOpen = openAccordion === item.label;

            if (!item.subLinks) {
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={onClose}
                  className="block py-3 text-xl border-b border-gray-100"
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <div key={item.label} className="border-b border-gray-100">
                <button
                  onClick={() => toggleAccordion(item.label)}
                  className="flex w-full items-center justify-between py-3 text-xl"
                >
                  <span>{item.label}</span>
                  {isOpen ? (
                    <ChevronDown className="h-5 w-5 rotate-180 transition-transform" />
                  ) : (
                    <ChevronDown className="h-5 w-5 transition-transform" />
                  )}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="pl-6 pt-2 pb-4 space-y-3">
                    {item.subLinks.map((subLink) => (
                      <Link
                        key={subLink.label}
                        to={subLink.path}
                        onClick={onClose}
                        className="block text-lg text-gray-700"
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="relative flex w-full items-center justify-between bg-white px-4 py-4 font-serif text-gray-800 shadow-sm md:px-8">
        <div className="flex items-center gap-6">
          <button
            type="button"
            className="md:hidden"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          <div className="hidden items-center gap-6 md:flex">
            <Link
              to="/"
              className="text-sm font-light tracking-widest hover:text-black"
            >
              FAIRMONT HOME
            </Link>
            <div className="h-8 border-l border-gray-300"></div>
            <Link
              to="/hotels"
              className="flex items-center gap-1 text-sm font-light tracking-widest hover:text-black"
            >
              <span>HOTELS & RESORTS</span>
              <ChevronDown className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link to="/" aria-label="Fairmont The Norfolk, Homepage">
            <img
              src={logo}
              alt="Fairmont The Norfolk"
              className="w-28 md:w-36"
            />
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <Link to="/my-account" className="md:hidden" aria-label="My Account">
            <User className="h-6 w-6" />
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            <Link to="/loyalty" className="text-sm font-light hover:text-black">
              All loyalty
            </Link>
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-light hover:text-black"
            >
              <span>EN</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            <Link
              to="/my-account"
              className="flex items-center gap-2 text-sm font-light hover:text-black"
            >
              <User className="h-5 w-5" />
              <span>My Account</span>
            </Link>
          </div>
        </div>
      </header>

      {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
    </>
  );
};

export default Header;
