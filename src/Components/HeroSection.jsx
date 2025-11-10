import React from "react";
import { ChevronDown } from "lucide-react";

import heroImageDesktop from "../assets/hero1.webp";
import heroImageMobile from "../assets/heromobile.webp";
const HeroSection = () => {
  return (
    <div className="relative h-[90vh] md:h-[85vh] w-full text-white">
      <picture className="absolute inset-0 -z-20">
        <source media="(min-width: 768px)" srcSet={heroImageDesktop} />

        <img
          src={heroImageMobile}
          alt="Tatu Restaurant dining room"
          className="h-full w-full object-cover"
        />
      </picture>

      <div className="absolute inset-0 -z-10 bg-black/50"></div>

      <nav className="relative z-10 hidden items-center justify-between px-8 py-4 md:flex">
        <div className="flex items-center gap-6">
          {["STAY", "OFFERS", "DINE", "EVENTS", "ABOUT THE HOTEL"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="flex items-center gap-1 text-xs font-semibold tracking-wider hover:opacity-80"
              >
                <span>{item}</span>
                {(item === "STAY" ||
                  item === "DINE" ||
                  item === "EVENTS" ||
                  item === "ABOUT THE HOTEL") && (
                  <ChevronDown className="h-4 w-4" />
                )}
              </a>
            )
          )}
        </div>

        <button
          type="button"
          className="bg-white px-5 py-3 text-xs font-bold tracking-wider text-black hover:bg-gray-200"
        >
          CHECK RATES
        </button>
      </nav>

      <div className="absolute bottom-32 left-8 right-8 z-10 text-center md:bottom-16 md:left-8 md:right-auto md:text-left">
        <p className="text-sm font-light tracking-widest text-gray-200">
          FAIRMONT THE NORFOLK
        </p>

        <h1 className="font-serif text-5xl font-medium text-white mt-2 md:text-7xl">
          TATU RESTAURANT
        </h1>
      </div>

      <div className="absolute bottom-8 left-8 right-8 z-10 md:hidden">
        <button
          type="button"
          className="w-full bg-white px-5 py-4 text-xs font-bold tracking-wider text-black hover:bg-gray-200"
        >
          CHECK RATES
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
