import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, CheckCircle } from "lucide-react";
import eventm from "../../assets/eventm.jpg";

const perks = [
  { text: "8 venues" },
  { text: "250 parking spaces" },
  { text: "202 guests Theater Style" },
];

const Eventsection = () => {
  return (
    <div className="bg-white">
      <main className="w-full font-serif">
        <section className="mx-auto max-w-7xl px-4 sm:px-8 py-12 md:py-20">
          <nav className="flex flex-wrap items-center justify-start gap-x-2 gap-y-1 text-xs text-gray-500 mb-12">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight size={14} className="text-gray-400" />
            <Link to="/hotels" className="hover:underline">
              Hotels & Resorts
            </Link>
            <ChevronRight size={14} className="text-gray-400" />
            <Link to="/hotels/fairmont-norfolk" className="hover:underline">
              Fairmont The Norfolk
            </Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="font-medium text-gray-800">Meetings</span>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="md:order-2">
              <img
                src={eventm}
                alt="Meeting room with round tables at Fairmont The Norfolk"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = { eventm };
                }}
              />
            </div>

            <div className="md:order-1 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl text-gray-900">
                For every{" "}
                <span className="italic font-['Playfair_Display']">event</span>
              </h2>

              <p className="mt-6 text-base leading-relaxed text-gray-600">
                From elegant ballroom galas dinners to intimate exclusive
                parties, our dedicated culinary team charms guests with
                exquisite flavors. Using farm fresh ingredients sourced locally,
                we offer thoughtfully crafted menus that cater to specific
                dietary needs and showcase our historic hotel.
              </p>

              <ul className="mt-8 space-y-3">
                {perks.map((perk, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-gray-700" />
                    <span className="text-sm font-medium text-gray-700">
                      {perk.text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Link to="/events/capacities">
                  <button className="w-full sm:w-auto bg-gray-900 text-white text-xs font-bold tracking-wider px-6 py-4 hover:bg-gray-700 transition-colors">
                    VIEW CAPACITIES
                  </button>
                </Link>
                <Link to="/contact/inquiry">
                  <button className="w-full sm:w-auto bg-white text-gray-900 border border-gray-800 text-xs font-bold tracking-wider px-6 py-4 hover:bg-gray-100 transition-colors">
                    MAKE AN INQUIRY
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Eventsection;
