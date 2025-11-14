import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";

import why from "../../assets/whyy.jpg";

const allAccommodations = [
  {
    type: "suite",
    slug: "norfolk-signature-suite",
    badge: "SUITE",
    imgSrc: why,
    title: "NORFOLK SIGNATURE SUITE WITH KING BED",
    specs: "King size bed(s) x 1 · 85 m2/914sqft · 3 persons · Courtyard side",
    description:
      "Each signature suite tells a unique story, discover Kenya's rich history and write your own during your stay. Each suite features awe-inspiring views of the serene garden that features exotic birds as well as our vintage decor. This is the pinnacle of luxury, offering a separate living area and an oversized bathroom.",
  },
  {
    type: "suite",
    slug: "superior-suite-queen",
    badge: "SUITE",
    imgSrc: why,
    title: "SUPERIOR SUITE WITH QUEEN BED",
    specs: "Queen size bed(s) x 1 · 40 m2/430sqft · 2 persons",
    description:
      "Our Superior Suite offers a sophisticated open-concept design, seamlessly blending modern luxury with timeless elegance. Nestled in the heart of our iconic property, this suite features a sumptuous queen bed, ensuring a restful night's sleep. The spacious living area is perfect for unwinding after a day of exploration.",
  },
  {
    type: "room",
    slug: "fairmont-room-queen",
    badge: "ROOM",
    imgSrc: why,
    title: "FAIRMONT ROOM WITH QUEEN BED",
    specs: "Queen size bed(s) x 1 · 30 m2/322sqft · 2 persons",
    description:
      "The Fairmont rooms have a beautiful appointed décor that gives them a warm feeling. All rooms are part of Kenya’s rich history and are surrounded by the breathtaking sounds of nature. Enjoy modern amenities and a serene atmosphere, perfect for both business and leisure travelers. The room overlooks the lush courtyard.",
  },
  {
    type: "room",
    slug: "fairmont-room-twin",
    badge: "ROOM",
    imgSrc: why,
    title: "FAIRMONT ROOM WITH 2 SINGLE BEDS",
    specs: "30 m2/322sqft · 2 persons",
    description:
      "The Fairmont rooms have a beautiful appointed décor that gives them a warm feeling. All rooms are part of Kenya’s rich history and are surrounded by the breathtaking sounds of nature. Featuring two comfortable single beds, this room is ideal for friends or family traveling together. Experience comfort and elegance in one.",
  },
  {
    type: "suite",
    slug: "fairmont-room-twin",
    badge: "ROOM",
    imgSrc: why,
    title: "FAIRMONT ROOM WITH 2 SINGLE BEDS",
    specs: "30 m2/322sqft · 2 persons",
    description:
      "The Fairmont rooms have a beautiful appointed décor that gives them a warm feeling. All rooms are part of Kenya’s rich history and are surrounded by the breathtaking sounds of nature. Featuring two comfortable single beds, this room is ideal for friends or family traveling together. Experience comfort and elegance in one.",
  },
  {
    type: "suite",
    slug: "fairmont-room-twin",
    badge: "ROOM",
    imgSrc: why,
    title: "FAIRMONT ROOM WITH 2 SINGLE BEDS",
    specs: "30 m2/322sqft · 2 persons",
    description:
      "The Fairmont rooms have a beautiful appointed décor that gives them a warm feeling. All rooms are part of Kenya’s rich history and are surrounded by the breathtaking sounds of nature. Featuring two comfortable single beds, this room is ideal for friends or family traveling together. Experience comfort and elegance in one.",
  },
  {
    type: "room",
    slug: "fairmont-room-twin",
    badge: "ROOM",
    imgSrc: why,
    title: "FAIRMONT ROOM WITH 2 SINGLE BEDS",
    specs: "30 m2/322sqft · 2 persons",
    description:
      "The Fairmont rooms have a beautiful appointed décor that gives them a warm feeling. All rooms are part of Kenya’s rich history and are surrounded by the breathtaking sounds of nature. Featuring two comfortable single beds, this room is ideal for friends or family traveling together. Experience comfort and elegance in one.",
  },
  {
    type: "room",
    slug: "deluxe-room-king",
    badge: "ROOM",
    imgSrc: why,
    title: "DELUXE ROOM WITH KING BED",
    specs: "King size bed(s) x 1 · 35 m2/377sqft · 2 persons",
    description:
      "Our Deluxe Rooms offer more space and upgraded amenities. Enjoy a plush king bed and a dedicated work area. The large windows provide ample natural light and views of the garden. It's a perfect blend of comfort and functionality for a discerning traveler.",
  },
  {
    type: "suite",
    slug: "presidential-suite",
    badge: "SUITE",
    imgSrc: why,
    title: "PRESIDENTIAL SUITE",
    specs: "King size bed(s) x 1 · 120 m2/1291sqft · 3 persons",
    description:
      "Experience the ultimate in luxury in our Presidential Suite. This expansive suite features a separate bedroom, a large living and dining area, a private kitchenette, and a marble bathroom with a soaking tub. Unparalleled service and exquisite decor await.",
  },
];

const RoomCard = ({ room }) => (
  <div className="flex flex-col font-serif border border-gray-200 h-full">
    <div className="relative">
      <img
        src={room.imgSrc}
        alt={room.title}
        className="w-full h-64 object-cover"
        onError={(e) => {
          e.target.src = why;
          e.target.onerror = null;
        }}
      />
      <span className="absolute top-4 left-4 bg-black/70 text-white text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full">
        {room.badge}
      </span>
    </div>

    <div className="p-6 flex flex-col grow">
      <h3 className="text-lg font-semibold text-gray-900">{room.title}</h3>
      <p className="text-sm text-gray-600 mt-2">{room.specs}</p>
      <p className="text-sm text-gray-700 leading-relaxed mt-4 grow">
        {room.description}
      </p>

      <div className="flex items-center gap-6 pt-6 mt-6 border-t border-gray-100">
        <Link to="/booking">
          <button className="text-xs font-bold tracking-wider border border-gray-800 px-5 py-3 text-gray-900 hover:bg-gray-100">
            CHECK RATES
          </button>
        </Link>
        <Link
          to={`/stay/${room.slug}`}
          className="flex items-center gap-2 text-xs font-bold tracking-wider text-gray-900 hover:underline"
        >
          <span>SEE DETAILS</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  </div>
);

const RoomList = () => {
  const [activeTab, setActiveTab] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const filteredAccommodations = allAccommodations.filter((room) => {
    if (activeTab === "ALL") return true;
    return room.type === activeTab.toLowerCase();
  });

  const totalItems = filteredAccommodations.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredAccommodations.slice(startIndex, endIndex);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const goToPrev = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : 1));
    window.scrollTo(0, 0);
  };

  const goToNext = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : totalPages));
    window.scrollTo(0, 0);
  };

  const TabButton = ({ label }) => (
    <button
      onClick={() => handleTabClick(label)}
      className={`pb-2 text-sm font-semibold tracking-wider uppercase
        ${
          activeTab === label
            ? "border-b-2 border-black text-black"
            : "text-gray-500 hover:text-black"
        }
      `}
    >
      {label}
    </button>
  );

  const PageButton = ({ number }) => (
    <button
      onClick={() => goToPage(number)}
      className={`flex items-center justify-center h-10 w-10 rounded-full text-sm font-semibold
        ${
          currentPage === number
            ? "bg-gray-800 text-white"
            : "bg-white text-gray-700 hover:bg-gray-100"
        }
      `}
    >
      {number}
    </button>
  );

  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex items-center justify-center gap-8 mb-12 border-b border-gray-200">
          <TabButton label="ALL" />
          <TabButton label="ROOMS" />
          <TabButton label="SUITES" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentItems.map((room) => (
            <RoomCard key={room.slug} room={room} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 md:gap-4 mt-16">
            <button
              onClick={goToPrev}
              disabled={currentPage === 1}
              className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft size={20} />
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <PageButton key={index} number={index + 1} />
            ))}

            <button
              onClick={goToNext}
              disabled={currentPage === totalPages}
              className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default RoomList;
