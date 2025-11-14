import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle, X as CloseIcon } from "lucide-react"; // Using X for the 'x'

// Data for the perks
const perks = [
  { label: "Member rates" },
  { label: "Room upgrades" },
  { label: "Free nights" },
  { label: "Limitless experiences & partners" },
];

// Note: This component still receives 'logo' (Fairmont) and 'allLogo' (ALL) as props
const LoyaltySection = ({ logo, allLogo }) => {
  return (
    <section className="w-full bg-neutral-800 text-white font-serif py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 flex flex-col items-center text-center">
        {/* 1. Logos */}
        <div className="flex items-center justify-center gap-4">
          <img
            src={allLogo}
            alt="ALL - Accor Live Limitless"
            className="h-8 md:h-10"
          />
          <CloseIcon size={16} className="text-gray-400" />
          <img src={logo} alt="Fairmont" className="h-5 md:h-6" />
        </div>

        {/* 2. Heading */}
        <h2 className="text-3xl md:text-5xl text-white mt-8">
          Join ALL –{" "}
          <span className="italic font-['Playfair_Display']">
            the limitless hotel loyalty program
          </span>
        </h2>

        {/* 3. Subheading */}
        <p className="text-sm text-gray-300 mt-6 tracking-wider uppercase">
          Unlock the limitless benefits
        </p>

        {/* 4. Perks List (Responsive) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mt-10">
          {perks.map((perk) => (
            <div key={perk.label} className="flex items-center gap-2">
              <CheckCircle size={18} className="text-white" />
              <span className="text-sm font-semibold">{perk.label}</span>
            </div>
          ))}
        </div>

        {/* 5. Buttons (Responsive) */}
        <div className="flex flex-col md:flex-row items-center gap-4 mt-12">
          <Link to="/loyalty/join">
            <button
              type="button"
              className="w-64 bg-white text-black text-xs font-bold tracking-wider
                         px-6 py-4 hover:bg-gray-200"
            >
              JOIN FOR FREE
            </button>
          </Link>
          <Link to="/loyalty/learn-more">
            <button
              type="button"
              className="w-64 bg-transparent text-white border border-white text-xs font-bold tracking-wider
                         px-6 py-4 hover:bg-white hover:text-black"
            >
              LEARN MORE
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LoyaltySection;
