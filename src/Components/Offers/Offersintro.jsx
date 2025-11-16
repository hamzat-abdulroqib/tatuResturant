import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const OffersIntro = () => {
  return (
    <section className="w-full bg-white px-4 py-12 md:py-20 font-serif">
      <div className="mx-auto max-w-4xl text-center">
        {/* Breadcrumbs */}
        <nav className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-gray-500">
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

          <span className="font-medium text-gray-800">Offers</span>
        </nav>

        <h2 className="mt-12 font-serif text-4xl text-gray-900 md:text-5xl">
          EXCLUSIVE OFFERS CURATED{" "}
          <span className="italic font-['Playfair_Display']">for you</span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
          Experience the luxury of Fairmont The Norfolk with our special offers!
          Whether it's a romantic getaway, an unforgettable family vacation, or
          a rejuvenating spa escape, we have a package curated just for you.
        </p>
      </div>
    </section>
  );
};

export default OffersIntro;
