import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import dineimg from "../../assets/dine.jpg";

const restaurantData = [
  {
    title: "LORD DELAMERE TERRACE",
    category: "International",
    description:
      "All day dining restaurant specializing in Pan African cuisine with a strong Kenyan International focus. The restaurant offers an extensive Breakfast Buffet with live cooking stations, All Day a la carte service offering a wide...",
    imgSrc: { dineimg },
    slug: "/dine/terrace",
  },
  {
    title: "TATU RESTAURANT",
    category: "International",
    description:
      "Our award-winning restaurant offers the finest seafood, premium cuts of meat, and delectable vegetarian dishes. Designed in a contemporary African style, the restaurant features a patio perfect for alfresco dining wit...",
    imgSrc: { dineimg },
    slug: "/dine/tatu",
  },
  {
    title: "THE POOL RESTAURANT",
    category: "International",
    description:
      "Offering a casual dining experience serving international comfort food dishes complimented with refreshing signature alcoholic cocktails, mocktails, juices and smoothies in addition to a wide array of soft drinks...",
    imgSrc: { dineimg },
    slug: "/dine/pool",
  },
];

const barData = [
  {
    title: "CIN CIN BAR",
    description:
      "Cin Cin Bar serves upscale signature delicacies, extensive array of whiskies and premium alcoholic beverages and wines, a wide selection of Whiskies and cognac. Enjoy bar food that takes on a Tapas/Meze style and approach.",
    imgSrc: { dineimg },
  },
  {
    title: "CIN CIN BAR",
    description:
      "Cin Cin Bar serves upscale signature delicacies, extensive array of whiskies and premium alcoholic beverages and wines, a wide selection of Whiskies and cognac. Enjoy bar food that takes on a Tapas/Meze style and approach.",
    imgSrc: { dineimg },
  },
];

const DiningCard = ({ item }) => (
  <div className="flex flex-col font-serif border border-gray-200 h-full">
    <div className="relative h-64 md:h-72 overflow-hidden">
      <img
        src={item.imgSrc}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        onError={(e) => {
          e.target.src = { dineimg };
          e.target.onerror = null;
        }}
      />
    </div>

    <div className="flex flex-col grow p-6 md:p-8 bg-white">
      <h3 className="text-lg font-semibold text-gray-900 tracking-wider uppercase">
        {item.title}
      </h3>

      {item.category && (
        <p className="text-sm text-gray-500 mt-1 mb-3">{item.category}</p>
      )}

      <p className="text-sm leading-relaxed text-gray-600 grow">
        {item.description}
      </p>

      <div className="pt-6 mt-4">
        <Link
          to={item.slug}
          className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-gray-900 border border-gray-300 px-6 py-3 hover:bg-gray-900 hover:text-white transition-colors"
        >
          <span>SEE DETAILS</span>
        </Link>
      </div>
    </div>
  </div>
);

const RestaurantBarList = () => {
  const [activeTab, setActiveTab] = useState("RESTAURANTS");

  const currentItems = activeTab === "RESTAURANTS" ? restaurantData : barData;

  return (
    <section className="w-full bg-white py-12 md:py-20 font-serif">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex items-center gap-8 mb-12 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("RESTAURANTS")}
            className={`pb-4 text-sm font-semibold tracking-wider transition-colors relative
              ${
                activeTab === "RESTAURANTS"
                  ? "text-black"
                  : "text-gray-500 hover:text-black"
              }
            `}
          >
            RESTAURANTS
            {activeTab === "RESTAURANTS" && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black"></span>
            )}
          </button>

          <button
            onClick={() => setActiveTab("BARS")}
            className={`pb-4 text-sm font-semibold tracking-wider transition-colors relative
              ${
                activeTab === "BARS"
                  ? "text-black"
                  : "text-gray-500 hover:text-black"
              }
            `}
          >
            BARS
            {activeTab === "BARS" && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black"></span>
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {currentItems.map((item, index) => (
            <DiningCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantBarList;
