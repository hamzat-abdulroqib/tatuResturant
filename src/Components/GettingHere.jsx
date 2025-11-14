import React, { useState } from "react";

import { ChevronUp, ChevronDown } from "lucide-react";

const accordionItems = [
  {
    title: "NEARBY AIRPORTS",

    content:
      "<strong>Jomo Kenyatta International Airport:</strong><br />We are conveniently located just 10 minutes from the airport. To enhance your stay, we offer various transportation options for our guests.",
  },
  {
    title: "AIRPORT SHUTTLE",
    content:
      "We offer the most comfortable shuttle service for your airport pick-up and drop-off. To guarantee a smooth experience, please share your arrival and departure details in advance. Our mission is to help you enjoy the beauty of Kenya and leave with unforgettable memories",
  },
  {
    title: "METRO & RAIL STATIONS",
    content:
      "TWe arrange metro and train transportation tailored to your destination. For a smooth journey, please provide your travel details, including arrival and departure times, so we can book in advance. Our aim is to ensure you have an adventurous and memorable experience",
  },
  {
    title: "CHAFFEUR ARRANGEMENTS",
    content:
      "We provide exceptional chauffeur services to any destination you desire. To ensure a seamless experience, please communicate your transportation needs in advance. Our goal is to take care of our guests with the utmost hospitality and attention to detail.",
  },
  {
    title: "TAXIS",
    content:
      "While we don’t provide taxis directly, we’re happy to assist you by using taxi applications to request one on your behalf. Your comfort is our top priority.",
  },
];

const GettingHere = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white px-4 sm:px-8 py-12 md:py-20 font-serif">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl text-gray-900 mb-8">
          <span className="italic font-['Playfair_Display']">Getting Here</span>
        </h2>

        <div className="w-full border-t border-gray-200">
          {accordionItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border-b border-gray-200">
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  className="flex w-full items-center justify-between py-5 text-left"
                >
                  <span className="text-xs font-semibold tracking-widest text-gray-900 font-sans uppercase">
                    {item.title}
                  </span>

                  {isOpen ? (
                    <ChevronUp size={20} className="text-gray-800" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-500" />
                  )}
                </button>

                <div
                  className={`overflow-hidden font-sans text-sm text-gray-600 transition-all duration-300 ease-in-out
                    ${
                      isOpen ? "max-h-96 opacity-100 pb-5" : "max-h-0 opacity-0"
                    }
                  `}
                >
                  <div
                    dangerouslySetInnerHTML={{ __html: item.content }}
                    className="leading-relaxed pr-8"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GettingHere;
