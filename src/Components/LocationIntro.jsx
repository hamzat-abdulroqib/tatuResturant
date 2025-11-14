import React from "react";

import { ChevronDown, ChevronRight } from "lucide-react";

const LocationIntro = () => {
  return (
    <div className="w-full bg-white font-serif">
      <nav className="hidden md:flex w-full max-w-7xl mx-auto items-center justify-between px-8 py-4 border-b border-gray-200">
        <div className="flex items-center gap-6">
          {["STAY", "OFFERS", "DINE", "EVENTS", "ABOUT THE HOTEL"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="flex items-center gap-1 text-xs font-semibold tracking-wider text-gray-900 hover:text-gray-600"
              >
                <span>{item}</span>
                <ChevronDown className="h-4 w-4" />
              </a>
            )
          )}
        </div>

        <button
          type="button"
          className="bg-black px-5 py-3 text-xs font-bold tracking-wider text-white hover:bg-gray-800"
        >
          CHECK RATES
        </button>
      </nav>

      <section className="w-full px-4 py-12 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <nav className="flex items-center justify-center space-x-1 text-xs text-gray-500 flex-wrap">
            <a href="#" className="hover:underline">
              Home
            </a>
            <ChevronRight size={14} className="shrink-0" />

            <a href="#" className="hover:underline">
              Hotels & Resorts
            </a>
            <ChevronRight size={14} className="shrink-0" />

            <a href="#" className="hover:underline">
              Fairmont The Norfolk
            </a>
            <ChevronRight size={14} className="shrink-0" />

            <span className="font-medium text-gray-800">
              Location & Contact
            </span>
          </nav>

          <h2 className="mt-12 font-serif text-4xl text-gray-900 md:text-5xl">
            IN THE{" "}
            <span className="italic font-['Playfair_Display']">bustling</span>{" "}
            CITY OF NAIROBI
          </h2>

          {/* Paragraph */}
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
            Fairmont The Norfolk enjoys a prime location, just 5 minutes from
            Nairobi's City Center and 10 minutes from the airport. For over 120
            years, we've been a true icon of hospitality. Whether for business
            or leisure, we provide a timeless yet modern retreat for our guests,
            embodying luxury and heritage in every stay.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LocationIntro;
