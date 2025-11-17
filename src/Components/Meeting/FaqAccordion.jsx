import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "WHAT TYPE OF MEETING ROOMS ARE AVAILABLE?",
    answer:
      "We offer a variety of meeting spaces, including boardrooms, ballrooms, and versatile event spaces suitable for both small gatherings and large conferences.",
  },
  {
    question: "WHAT IS THE CAPACITY OF OUR MEETING ROOMS?",
    answer:
      "Our meeting rooms can accommodate a range of group sizes, from intimate meetings of 10 people to larger events for up to 200 guests.",
  },
  {
    question:
      "ARE THERE ACCOMMODATION OPTIONS FOR GUESTS ATTENDING THE MEETINGS?",
    answer:
      "Yes, we offer luxury accommodations ensuring a comfortable stay for your attendees, with special rates for group bookings.",
  },
  {
    question: "WHAT IS THE PROCESS OF BOOKING A MEETING?",
    answer:
      "You can contact our events team directly to check availability and discuss your requirements, or you can submit a request through our website for more details.",
  },
  {
    question: "DO YOU OFFER EVENT PLANNING ASSISTANCE?",
    answer:
      "Yes, our dedicated events team is available to assist with all aspects of planning, from room setup to catering and technical support.",
  },
  {
    question: "Did you offer any packages for corporate meetings?",
    answer:
      "Yes, we have a variety of packages designed for corporate meetings and events, which can include meeting room rentals, catering, and accommodation options.",
  },
];

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white px-4 sm:px-8 py-12 md:py-20 font-serif">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl text-gray-900 mb-8">
          <span className="italic font-['Playfair_Display']">
            Frequently asked questions
          </span>
        </h2>

        <div className="w-full border-t border-gray-200">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border-b border-gray-200">
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  className="flex w-full items-center justify-between py-5 text-left gap-4"
                >
                  <span className="text-xs font-semibold tracking-widest text-gray-900 font-sans uppercase">
                    {item.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp size={20} className="text-gray-800 shrink-0" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-500 shrink-0" />
                  )}
                </button>

                <div
                  className={`overflow-hidden font-sans text-sm text-gray-600 transition-all duration-300 ease-in-out
                    ${
                      isOpen ? "max-h-96 opacity-100 pb-5" : "max-h-0 opacity-0"
                    }
                  `}
                >
                  <p className="leading-relaxed pr-8">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;
