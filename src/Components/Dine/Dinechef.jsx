import React from "react";

import img1 from "../../assets/stay.jpg";
import img2 from "../../assets/image.jpg";

const Dinechef = () => {
  return (
    <section className="w-full bg-white px-4 sm:px-8 py-12 md:py-20 font-serif">
      <div className="mx-auto max-w-6xl">
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="md:order-1">
            <h3 className="text-3xl font-semibold tracking-widest text-gray-900">
              Dine on Chef's Table
            </h3>
            <p className="mt-6 text-base leading-relaxed text-gray-600">
              Our Chef’s Table offers a behind-the-scenes journey into the heart
              of our kitchen, where you witness the artistry of cooking and
              savor dishes designed to delight and surprise. This exclusive
              experience transforms your meal into a memorable adventure,
              celebrating the very essence of gourmet dining.
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

export default Dinechef;
