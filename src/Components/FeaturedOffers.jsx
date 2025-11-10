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
    title: "UAE, INDIA & UK RESIDENT RATE",
    imgSrc: { image1 },
    perk: "30% discount on spa",
    dates: "Available through December 31, 2025",
    description:
      "As a UAE, India/UK Resident, indulge at Fairmont The Norfolk with a special rate where luxury living meets tranquility. Enjoy 15% off dining and 30% off spa services. Elevate your experience with gourmet delights and revitalizing treatments. Book now to discover true luxury and unforgettable moments.",
  },
  {
    title: "THE PERFECT SPA ESCAPE",
    imgSrc: { why1 },
    perk: "30% discount on all spa treatments",
    dates: "Available through December 31, 2025",
    description: "Escape to Pambo Spa and experience pure bliss!",
  },
  {
    title: "A JAZZY FRIDAY NIGHT",
    imgSrc: { why1 },
    perk: "Live performance",
    dates: "Friday only",
    description:
      "Cin Cin Bar sets the stage for the smoothest jazz, making it the perfect start to your weekend.",
  },
  {
    title: "A JAZZY FRIDAY NIGHT",
    imgSrc: { why1 },
    perk: "Live performance",
    dates: "Friday only",
    description:
      "Cin Cin Bar sets the stage for the smoothest jazz, making it the perfect start to your weekend.",
  },
  {
    title: "A JAZZY FRIDAY NIGHT",
    imgSrc: { why1 },
    perk: "Live performance",
    dates: "Friday only",
    description:
      "Cin Cin Bar sets the stage for the smoothest jazz, making it the perfect start to your weekend.",
  },
];
const OfferCard = ({ offer }) => (
  <div className="flex h-full flex-col font-serif bg-[#f7f7f7]">
    <img
      src={offer.imgSrc}
      alt={offer.title}
      className="w-full h-48 object-cover"
    />
    <div className="grow p-6 ">
      <h3 className="text-xs font-semibold tracking-widest text-gray-900">
        {offer.title}
      </h3>

      <div className="flex items-center gap-2 mt-4">
        <CheckCircle size={16} className="text-gray-700" />
        <span className="text-sm text-gray-700">{offer.perk}</span>
      </div>

      <p className="mt-4 text-sm text-gray-500">
        <span className="text-gray-800">Booking Dates:</span> {offer.dates}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-gray-600">
        {offer.description}
      </p>
    </div>

    <div className="flex gap-6 p-6 border-x border-b border-gray-200">
      <button className="text-xs font-bold tracking-wider border border-gray-800 px-5 py-3 text-gray-900 hover:bg-gray-100">
        BOOK OFFER
      </button>
      <button className="flex items-center gap-2 text-xs font-bold tracking-wider text-gray-900 hover:underline">
        <span>EXPLORE MORE</span>
        <ArrowRight size={14} />
      </button>
    </div>
  </div>
);

const FeaturedOffers = () => {
  return (
    <section className="w-full bg-white py-12 md:py-20 font-serif overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* 1. Header Section */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl text-gray-900">
              Featured{" "}
              <span className="italic font-['Playfair_Display']">Offers</span>
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Craving the Ultimate Meat Experience? Our 'meet for meat'
              promotion will leave you satisfied and Smiling!
            </p>
          </div>
          <a
            href="#"
            className="shrink-0 ml-4 flex items-center gap-2 text-xs font-bold tracking-wider text-gray-900 hover:underline"
          >
            <span>SEE ALL OFFERS</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>

      {/* 2. Carousel Section */}
      <div className="relative mt-12">
        {/* We use a container with negative margins and padding
            to achieve the "peeking" card look on desktop */}
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <Swiper
            modules={[Navigation, Pagination]}
            // --- This is the responsive magic ---
            slidesPerView={1} // Mobile: 1 slide
            spaceBetween={16} // Space between slides
            breakpoints={{
              // 768px (md) and up
              768: {
                slidesPerView: 2, // Show 2 slides
                spaceBetween: 24,
              },
              // 1024px (lg) and up
              1024: {
                slidesPerView: 2.5, // <-- This creates the "peek"
                spaceBetween: 24,
              },
            }}
            // --- Custom Navigation ---
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

      {/* 3. Custom Navigation Controls */}
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

export default FeaturedOffers;
