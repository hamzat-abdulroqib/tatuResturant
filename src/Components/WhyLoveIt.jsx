import React from "react";
import why1 from "../assets/why1.webp";
import why2 from "../assets/why2.webp";
const WhyLoveIt = () => {
  return (
    <section className="w-full bg-white px-4 sm:px-8 py-12 md:py-20 font-serif">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl text-gray-900">
            Why{" "}
            <span className="italic font-['Playfair_Display']">
              you'll love it
            </span>
          </h2>
          <p className="mt-4 text-base text-gray-600">
            This restaurant is a must-attend because it has an elegant ambience,
            tailored dining experience and wine pairings.
          </p>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="md:order-2">
            <h3 className="text-xs font-semibold tracking-widest text-gray-900">
              BE SURE TO TRY THE TOMAHAWK STEAK!
            </h3>
            <p className="mt-6 text-base leading-relaxed text-gray-600">
              Get ready to sink your teeth into our signature Tomahawk steak—a
              true masterpiece for steak lovers. Perfectly grilled, bursting
              with flavor, and served with elegance, this steak is a dining
              experience you won't want to miss. Whether you're planning a
              romantic date or seeking to satisfy your meat cravings, join us
              from 6 p.m. to 10:30 p.m.
            </p>
          </div>

          <div className="md:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <img
                src={why1}
                alt="Tatu Restaurant dining room"
                className="w-full h-full object-cover"
              />
              <img
                src={why2}
                alt="Tatu Restaurant open kitchen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLoveIt;
