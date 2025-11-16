import React from "react";
import { ChevronRight, Utensils, Users, Clock } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="w-full bg-white px-4 sm:px-8 py-14 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <nav className="flex flex-wrap items-center justify-center gap-1 text-[10px] sm:text-xs font-serif text-gray-500">
          <a href="#" className="hover:underline">
            Home
          </a>
          <ChevronRight size={14} className="text-gray-400" />

          <a href="#" className="hover:underline">
            Hotels & Resorts
          </a>
          <ChevronRight size={14} className="text-gray-400" />

          <a href="#" className="hover:underline">
            Fairmont The Norfolk
          </a>
          <ChevronRight size={14} className="text-gray-400" />

          <a href="#" className="hover:underline">
            Dining
          </a>
          <ChevronRight size={14} className="text-gray-400" />

          <span className="font-medium text-gray-800">TATU RESTAURANT</span>
        </nav>

        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-[10px] sm:text-xs font-semibold tracking-widest text-gray-500">
            RESTAURANT
          </p>

          <h2 className="mt-4 font-serif text-3xl sm:text-5xl leading-tight text-gray-900">
            EVERY <span className="italic font-['Playfair_Display']">meal</span>{" "}
            IS A MASTERPIECE
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm sm:text-base font-serif leading-relaxed text-gray-600">
            Step into Tatu Restaurant, where every meal is a masterpiece.
            Indulge in our Chef's Table experience, featuring exquisite steak
            and seafood with a South American twist. Set against a backdrop of
            luxury and elegance, Tatu invites you to savor award-winning cuisine
            in style.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 flex flex-col items-center justify-center gap-6 sm:gap-8 border-y border-gray-200 py-6 sm:flex-row sm:justify-around">
          <div className="flex items-center gap-3">
            <Utensils size={20} className="text-gray-800" />
            <span className="text-sm font-semibold tracking-wider text-gray-800">
              STEAKHOUSE
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Users size={20} className="text-gray-800" />
            <span className="text-sm font-semibold tracking-wider text-gray-800">
              FAMILY-STYLE
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Clock size={20} className="text-gray-800" />
            <span className="text-sm font-semibold tracking-wider text-gray-800">
              RESERVATIONS REQUIRED
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
