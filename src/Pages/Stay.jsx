import React from "react";
import { Link } from "react-router-dom";
import hero from "../assets/hero.webp";
import { ArrowRight, X } from "lucide-react";

const Stay = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row w-full min-h-screen font-serif">
      <div className="w-full md:w-1/3 bg-white p-8 md:p-16 lg:p-24 flex flex-col justify-center">
        <div>
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-8">
            <span className="italic font-['Playfair_Display']">
              Luxury and comfort await
            </span>
          </h2>

          <nav className="flex flex-col space-y-4">
            <Link
              to="/stay/viewallRoom"
              className="text-lg text-gray-800 hover:text-gray-500"
            >
              Guest Rooms
            </Link>
            <Link
              to="/stay/viewallRoom"
              className="text-lg text-gray-800 hover:text-gray-500"
            >
              Suites
            </Link>

            <Link to="/stay/viewallRoom">
              <button className="bg-gray-900 text-white text-xs font-bold tracking-wider px-6 py-4 mt-6 flex items-center justify-center gap-2 hover:bg-gray-700 max-w-xs">
                VIEW ALL ROOMS
                <ArrowRight size={16} />
              </button>
            </Link>

            <Link
              to="/about"
              className="text-lg text-gray-800 hover:text-gray-500 pt-8"
            >
              Location and Contact
            </Link>
          </nav>
        </div>
      </div>

      <div className="w-full md:w-2/3 h-[50vh] md:h-screen relative bg-gray-200">
        <img
          src="/stay-hero.jpg"
          alt="Luxury hotel room with balcony"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = { hero };
            e.target.onerror = null;
          }}
        />

        <Link
          to="/"
          className="absolute top-6 right-6 bg-white/80 p-2 rounded-full hover:bg-white shadow-md"
          aria-label="Close and go to homepage"
        >
          <X size={24} className="text-gray-900" />
        </Link>
      </div>
    </div>
  );
};

export default Stay;
