import React from "react";
import { Link } from "react-router-dom";
// 1. Corrected the image import path
import offer from "../../assets/whyy.jpg";

import { ArrowRight, CheckCircle } from "lucide-react";

const offers = [
  {
    title: "UAE, INDIA & UK RESIDENT RATE",
    slug: "uae-india-uk-resident-rate",
    imgSrc: offer,
    perk: "30% discount on spa",
    dates: "Available through December 31, 2025",
    description:
      "As a UAE, India/UK Resident, indulge at Fairmont The Norfolk with a special rate where luxury living meets tranquility. Enjoy 15% off dining and 30% off spa services. Elevate your experience with gourmet delights and revitalizing treatments. Book now to discover true luxury and unforgettable moments.",
  },
  {
    title: "THE PERFECT SPA ESCAPE",
    slug: "perfect-spa-escape",
    imgSrc: offer,
    perk: "30% discount on all spa treatments",
    dates: "Available through December 31, 2025",
    description: "Escape to Pambo Spa and experience pure bliss!",
  },
  {
    title: "A JAZZY FRIDAY NIGHT",
    slug: "jazzy-fr",
    perk: "Live performance",
    dates: "Friday only",
    description:
      "Cin Cin Bar sets the stage for the smoothest jazz, making it the perfect start to your weekend.",
  },
  {
    title: "FAMILY GETAWAY",
    slug: "family-getaway",
    imgSrc: offer,
    perk: "50% off second room",
    dates: "Available year-round",
    description:
      "Create lasting memories with your family. Book one room and get 50% off an interconnecting room for your children, including breakfast for the whole family.",
  },
  {
    title: "ROMANTIC ESCAPE",
    slug: "romantic-escape",
    imgSrc: offer,
    perk: "Champagne & daily breakfast",
    dates: "Available year-round",
    description:
      "Indulge in a romantic stay with daily breakfast in bed, a bottle of champagne on arrival, and a late check-out to make your moments last longer.",
  },
];

const OfferCard = ({ offer }) => (
  <div className="flex h-full flex-col font-serif border border-gray-200">
    <img
      src={offer.imgSrc}
      alt={offer.title}
      className="w-full h-48 object-cover"
      onError={(e) => {
        e.target.src = { offer };
        e.target.onerror = null;
      }}
    />
    <div className="grow p-6 flex flex-col">
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

      <p className="text-sm leading-relaxed text-gray-600 mt-4 grow">
        {offer.description}
      </p>
    </div>

    <div className="flex gap-6 p-6 border-t border-gray-100">
      <Link to="/booking">
        <button className="text-xs font-bold tracking-wider border border-gray-800 px-5 py-3 text-gray-900 hover:bg-gray-100">
          BOOK OFFER
        </button>
      </Link>
      <Link
        to={`/offers/${offer.slug}`}
        className="flex items-center gap-2 text-xs font-bold tracking-wider text-gray-900 hover:underline"
      >
        <span>EXPLORE MORE</span>
        <ArrowRight size={14} />
      </Link>
    </div>
  </div>
);

const FindOffer = () => {
  return (
    <section className="w-full bg-white py-12 md:py-20 font-serif overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl text-gray-900">
            Find an{" "}
            <span className="italic font-['Playfair_Display']">Offer</span>
          </h2>
          <p className="mt-4 text-base text-gray-600">
            Seeking a city escape adventure, a romantic getaway, or a
            hassle-free family vacation? Our exquisite offers have everything
            you need for an unforgettable experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offers.slice(0, 4).map((offer, index) => (
            <OfferCard key={index} offer={offer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FindOffer;
