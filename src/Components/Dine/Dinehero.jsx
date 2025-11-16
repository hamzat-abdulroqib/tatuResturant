import React from "react";
// import about from "../Pages/About";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

import dinehero from "../../assets/dineimg.jpg";
import heroImageMobile from "../../assets/dinemobile.jpg";
const Dinehero = () => {
  return (
    <div className="relative h-[90vh] md:h-[85vh] w-full text-white">
      <picture className="absolute inset-0 -z-20">
        <source media="(min-width: 768px)" srcSet={dinehero} />

        <img
          src={heroImageMobile}
          alt="Tatu Restaurant dining room"
          className="h-full w-full object-cover"
        />
      </picture>

      <div className="absolute inset-0 -z-10 bg-black/50"></div>

      <nav className="relative z-10 hidden items-center justify-between px-8 py-4 md:flex">
        <div className="flex items-center gap-6">
          {[
            { label: "STAY", path: "/stay" },
            { label: "OFFERS", path: "/offers" },
            { label: "DINE", path: "/dine" },
            { label: "EVENTS", path: "/events" },
            { label: "ABOUT THE HOTEL", path: "/about" },
          ].map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="flex items-center gap-1 text-xs font-semibold tracking-wider hover:opacity-80"
            >
              <span>{item.label}</span>
              {(item.label === "STAY" ||
                item.label === "DINE" ||
                item.label === "EVENTS" ||
                item.label === "ABOUT THE HOTEL") && (
                <ChevronDown className="h-4 w-4" />
              )}
            </Link>
          ))}
        </div>

        <Link to="/booking">
          <button
            type="button"
            className="bg-white px-5 py-3 text-xs font-bold tracking-wider text-black hover:bg-gray-200"
          >
            CHECK RATES
          </button>
        </Link>
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
        <Link to="/booking" className="w-full">
          <button
            type="button"
            className="w-full bg-white px-5 py-4 text-xs font-bold tracking-wider text-black hover:bg-gray-200"
          >
            CHECK RATES
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Dinehero;
