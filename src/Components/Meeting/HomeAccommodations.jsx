import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ArrowRight, ArrowLeft } from "lucide-react";
import stay from "../../assets/stay.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const roomData = [
  {
    badge: "ROOM",
    imgSrc: { stay },
    title: "FAIRMONT ROOM WITH QUEEN BED",
    specs: "Queen size bed(s) x 1 · 30 m2/322sqft · 2 persons",
    description:
      "The Fairmont rooms have a beautiful appointed décor that gives them a warm feeling. All rooms are part of Kenya’s rich...",
    slug: "/stay/room/fairmont-queen",
  },
  {
    badge: "ROOM",
    imgSrc: { stay },
    title: "FAIRMONT ROOM WITH 2 SINGLE BEDS",
    specs: "30 m2/322sqft · 2 persons",
    description:
      "The Fairmont rooms have a beautiful appointed décor that gives them a warm feeling. All rooms are part of Kenya’s rich...",
    slug: "/stay/room/fairmont-twin",
  },
  {
    badge: "ROOM",
    imgSrc: { stay },
    title: "DELUXE ROOM WITH KING BED",
    specs: "King size bed(s) x 1 · 35 m2/376sqft · 3 persons",
    description:
      "Feel at home in the comfortable surroundings of our deluxe rooms. Enriched with historical surroundings and contemporary luxury, each...",
    slug: "/stay/room/deluxe-king",
  },
];

const suiteData = [
  {
    badge: "SUITE",
    imgSrc: { stay },
    title: "NORFOLK SIGNATURE SUITE WITH KING BED",
    specs: "King size bed(s) x 1 · 85 m2/914sqft · 3 persons · Courtyard side",
    description:
      "Each signature suite tells a unique story, discover Kenya’s rich history and write your own during your stay. Each suite features awe...",
    slug: "/stay/suite/norfolk-signature",
  },
  {
    badge: "SUITE",
    imgSrc: { stay },
    title: "SUPERIOR SUITE WITH QUEEN BED",
    specs: "Queen size bed(s) x 1 · 40 m2/430sqft · 2 persons",
    description:
      "Our Superior Suite offers a sophisticated open-concept design, seamlessly blending modern luxury with timeless elegance. Nestled in the...",
    slug: "/stay/suite/superior-queen",
  },
  {
    badge: "SUITE",
    imgSrc: { stay },
    title: "DELUXE SUITE WITH KING BED",
    specs: "King size bed(s) x 1 · 50 m2/538sqft · 3 persons · Courtyard side",
    description:
      "Staying in a 1937 Room means immersing yourself in the rich history of Fairmont the Norfolk. These rooms are a tribute to the...",
    slug: "/stay/suite/deluxe-king",
  },
];

const AccommodationCard = ({ item }) => (
  <div className="flex h-full flex-col font-serif">
    <div className="relative">
      <img
        src={item.imgSrc}
        alt={item.title}
        className="w-full h-64 object-cover"
        onError={(e) => {
          e.target.src = { stay };
        }}
      />
      <span className="absolute top-4 left-4 bg-black/70 text-white text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full">
        {item.badge}
      </span>
    </div>

    <div className="grow p-6 border border-t-0 border-gray-200">
      <h3 className="text-sm font-semibold tracking-wider text-gray-900 uppercase">
        {item.title}
      </h3>
      <p className="text-sm text-gray-600 mt-2">{item.specs}</p>
      <p className="text-sm text-gray-700 leading-relaxed mt-4">
        {item.description}
      </p>
    </div>

    <div className="flex items-center gap-6 p-6 border border-t-0 border-gray-200 bg-gray-50">
      <Link to="/booking">
        <button className="text-xs font-bold tracking-wider border border-gray-800 px-5 py-3 text-gray-900 hover:bg-gray-100">
          CHECK RATES
        </button>
      </Link>
      <Link
        to={item.slug}
        className="flex items-center gap-2 text-xs font-bold tracking-wider text-gray-900 hover:underline"
      >
        <span>SEE DETAILS</span>
        <ArrowRight size={14} />
      </Link>
    </div>
  </div>
);

const AccommodationCarousel = ({ items, swiperInstance }) => (
  <Swiper
    modules={[Navigation, Pagination]}
    spaceBetween={30}
    slidesPerView={1}
    breakpoints={{
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
    navigation={{
      nextEl: `.swiper-button-next-${swiperInstance}`,
      prevEl: `.swiper-button-prev-${swiperInstance}`,
    }}
    pagination={{
      el: `.swiper-pagination-${swiperInstance}`,
      type: "fraction",
    }}
    className="w-full"
  >
    {items.map((item) => (
      <SwiperSlide key={item.slug} className="h-full">
        <AccommodationCard item={item} />
      </SwiperSlide>
    ))}
  </Swiper>
);

const HomeAccommodations = () => {
  const [activeTab, setActiveTab] = useState("ROOMS");

  return (
    <section className="w-full bg-white py-12 md:py-20 font-serif">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl text-gray-900">
              <span className="italic font-['Playfair_Display']">
                Stay in style
              </span>
            </h2>
          </div>
          <div className="flex items-center gap-8 border-b border-gray-200 mt-8 md:mt-0 w-full md:w-auto justify-center">
            <TabButton
              label="ROOMS"
              activeTab={activeTab}
              onClick={setActiveTab}
            />
            <TabButton
              label="SUITES"
              activeTab={activeTab}
              onClick={setActiveTab}
            />
          </div>
          <Link
            to="/stay"
            className="hidden md:flex items-center gap-2 text-xs font-bold tracking-wider text-gray-900 hover:underline"
          >
            <span>SEE ALL ACCOMMODATIONS</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="relative">
          <div className={activeTab === "ROOMS" ? "block" : "hidden"}>
            <AccommodationCarousel items={roomData} swiperInstance="rooms" />
          </div>

          <div className={activeTab === "SUITES" ? "block" : "hidden"}>
            <AccommodationCarousel items={suiteData} swiperInstance="suites" />
          </div>

          <div className="flex items-center justify-end gap-4 mt-8">
            <div className={activeTab === "ROOMS" ? "block" : "hidden"}>
              <CarouselControls swiperInstance="rooms" />
            </div>
            <div className={activeTab === "SUITES" ? "block" : "hidden"}>
              <CarouselControls swiperInstance="suites" />
            </div>
          </div>
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            to="/stay"
            className="flex items-center justify-center gap-2 text-xs font-bold tracking-wider text-gray-900 hover:underline"
          >
            <span>SEE ALL ACCOMMODATIONS</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};

const TabButton = ({ label, activeTab, onClick }) => (
  <button
    onClick={() => onClick(label)}
    className={`pb-4 text-sm font-semibold tracking-wider uppercase transition-colors relative
      ${activeTab === label ? "text-black" : "text-gray-500 hover:text-black"}
    `}
  >
    {label}
    {activeTab === label && (
      <span className="absolute -bottom-px left-0 w-full h-0.5 bg-black"></span>
    )}
  </button>
);

const CarouselControls = ({ swiperInstance }) => (
  <>
    <button
      className={`swiper-button-prev-${swiperInstance} flex items-center justify-center h-10 w-10 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50`}
    >
      <ArrowLeft size={18} />
    </button>
    <div
      className={`swiper-pagination-${swiperInstance} w-auto text-sm font-medium text-gray-700`}
    ></div>
    <button
      className={`swiper-button-next-${swiperInstance} flex items-center justify-center h-10 w-10 rounded-full bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-50`}
    >
      <ArrowRight size={18} />
    </button>
  </>
);

export default HomeAccommodations;
