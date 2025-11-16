import React from "react";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
const Italian = () => {
  return (
    <section className="w-full bg-white px-4 sm:px-8 py-12 md:py-20 font-serif">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl text-gray-900">
            <span className="italic font-['Playfair_Display']">
              A landscape of delicious discoveries
            </span>
          </h2>
          <p className="mt-4 text-base text-gray-600">
            From exquisite dining and cocktails to a rich history and live
            entertainment, our F&B offerings are designed to delight you.
          </p>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="md:order-2">
            <h3 className="text-3xl font-semibold tracking-widest text-gray-900">
              Taste of Italy Tuesdays
            </h3>
            <p className="mt-6 text-base leading-relaxed text-gray-600">
              Every Tuesday we transform into a slice of Italy with our
              enchanting Italy Tuesdays. Our chefs prepare a feast of
              traditional Italian dishes, from rich pastas to delicate risottos,
              all crafted with authentic flavors and passion
            </p>
          </div>

          <div className="md:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <img
                src={img2}
                alt="Tatu Restaurant dining room"
                className="w-full h-full object-cover"
              />
              <img
                src={img1}
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

export default Italian;
