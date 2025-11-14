import React from "react";
import meet from "../assets/meet.webp";
const TransportSection = () => {
  return (
    <section className="w-full bg-black text-white font-serif py-12 md:py-16 mb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="w-full">
            <img
              src={meet}
              alt="Concierge helping guest into a car"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h2 className="text-3xl md:text-4xl text-white">
              Let us{" "}
              <span className="italic font-['Playfair_Display']">
                take care of your transport
              </span>
            </h2>

            <p className="mt-4 text-base leading-relaxed text-gray-300 max-w-md">
              Our Concierge is pleased to arrange your transportation to help
              you pleasantly reach your destination.
            </p>

            <button
              type="button"
              className="mt-8 bg-white text-black text-xs font-bold tracking-wider
                         px-6 py-4 hover:bg-gray-200"
            >
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransportSection;
