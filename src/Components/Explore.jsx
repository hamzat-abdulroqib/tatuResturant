import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import why1 from "../assets/why1.webp";
import image1 from "../assets/image1.webp";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";

const offers = [
  {
    title: "LORD DELAMARE TERRACE",
    imgSrc: { image1 },
    perk: "International",

    description:
      "All day dining restaurant specializing in Pan African cuisine with a strong Kenyan International focus. The restaurant offers an",
  },
  {
    title: "CIN CIN BAR",
    imgSrc: { why1 },
    perk: "Internaltional",

    description:
      "Cin Cin Bar sets the stage for the smoothest jazz, making it the perfect start to your weekend.",
  },
  {
    title: "THE POOL RESTAURANT",
    imgSrc: { why1 },

    description:
      "This elegant and sophisticated social lounge offers a delightful array of refreshments throughout the day. Starting from 8 AM,.",
  },
  {
    title: "CIN CIN BAR",
    imgSrc: { why1 },

    description:
      "Cin Cin Bar serves upscale signature delicacies, extensive array of whiskies and premium alcoholic beverages and wines, a wide selection of Whiskies and cognac. Enjoy bar food that takes on a",
  },
];
const OfferCard = ({ offer }) => (
  <div className="flex h-full flex-col font-serif bg-[#f7f7f7]">
    <img
      src={offer.imgSrc}
      alt={offer.title}
      className="w-full h-48 object-cover"
    />
    <div className="grow p-6 border-x border-b border-gray-200">
      <h3 className="text-xs font-semibold tracking-widest text-gray-900">
        {offer.title}
      </h3>

      <div className="flex items-center gap-2 mt-4">
        <span className="text-sm text-gray-700">{offer.perk}</span>
      </div>

      <p className="mt-4 text-sm text-gray-500"></p>
      <p className="mt-4 text-sm leading-relaxed text-gray-600">
        {offer.description}
      </p>
    </div>

    <div className="flex gap-6 p-6 ">
      <button className="text-xs font-bold tracking-wider border border-gray-800 px-5 py-3 text-gray-900 hover:bg-gray-100">
        SEE DETAILS
      </button>
    </div>
  </div>
);

const Explore = () => {
  return (
    <section className="w-full bg-white py-12 md:py-20 font-serif overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl text-gray-900">
              Explore
              <span className="italic font-['Playfair_Display']">
                more restaurants
              </span>
            </h2>
          </div>
          <a
            href="#"
            className="shrink-0 ml-4 flex items-center gap-2 text-xs font-bold tracking-wider text-gray-900 hover:underline"
          >
            <span>SEE ALL OPTION</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>

      <div className="relative mt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={16}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },

              1024: {
                slidesPerView: 2.5,
                spaceBetween: 24,
              },
            }}
            navigation={{
              nextEl: ".swiper-button-next-offers",
              prevEl: ".swiper-button-prev-offers",
            }}
            pagination={{
              el: ".swiper-pagination-offers",
              type: "fraction",
            }}
            className="overflow-visible!"
          >
            {offers.map((offer, index) => (
              <SwiperSlide key={index} className="h-full">
                <OfferCard offer={offer} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="flex items-center justify-end max-w-7xl mx-auto px-4 sm:px-8 mt-8">
        <div className="flex items-center gap-4">
          <button
            className="swiper-button-prev-offers 
                             flex h-10 w-10 items-center justify-center rounded-full
                             bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50"
          >
            <ArrowLeft size={20} />
          </button>

          <div className="swiper-pagination-offers w-auto text-sm font-medium text-gray-700"></div>

          <button
            className="swiper-button-next-offers
                             flex h-10 w-10 items-center justify-center rounded-full
                             bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-50"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Explore;
