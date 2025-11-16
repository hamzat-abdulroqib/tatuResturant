import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const DiningIntro = () => {
  return (
    <section className="w-full bg-white px-4 py-12 md:py-20 font-serif">
      <div className="mx-auto max-w-4xl text-center">
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

          <span className="font-medium text-gray-800">Dining</span>
        </nav>

        <p className="mt-12 text-xs font-semibold tracking-widest text-gray-500 uppercase">
          DINING
        </p>

        <h2 className="mt-4 font-serif text-4xl text-gray-900 md:text-5xl leading-tight">
          UNVEIL A{" "}
          <span className="italic font-['Playfair_Display']">paradise</span> OF
          CULINARY EXPERIENCES
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
          Delight in the expertly crafted dishes at Tatu Restaurant, featuring
          premium steaks and seafood prepared with a South American flair. Sip
          on handcrafted cocktails at Cin Cin, where the vibrant tapas and live
          jazz create an unmatched ambiance.
        </p>
      </div>
    </section>
  );
};

export default DiningIntro;
