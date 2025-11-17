import React from "react";

import img1 from "../../assets/stay.jpg";
import img2 from "../../assets/image.jpg";

const Menu2 = () => {
  return (
    <section className="w-full bg-white px-4 sm:px-8 py-12 md:py-20 font-serif">
      <div className="mx-auto max-w-6xl">
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="md:order-1">
            <h3 className="text-2xl font-semibold tracking-widest text-gray-900">
              A WEDDING TO REMEMBER
            </h3>
            <p className="mt-6 text-base leading-relaxed text-gray-600">
              Imagine walking down the aisle in a lush garden that’s been the
              backdrop to Nairobi’s most glamorous celebrations for over a
              century, or hosting your reception in a grand ballroom where
              colonial charm meets modern luxury.You will not be enchanted not
              just by the setting, but by the seamless experience that make
              every event feel like a one-of-a-kind celebration.
            </p>
          </div>

          <div className="md:order-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <img
                src={img1}
                alt="Tatu Restaurant dining room"
                className="w-full h-full object-cover"
              />
              <img
                src={img2}
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

export default Menu2;
