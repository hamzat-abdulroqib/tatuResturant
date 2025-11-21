import React, { useState } from "react";
import {
  X,
  Calendar,
  User,
  ChevronDown,
  ChevronUp,
  BedDouble,
} from "lucide-react";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isSpecialRatesOpen, setIsSpecialRatesOpen] = useState(true);

  return (
    <div className="relative min-h-screen bg-[url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center font-sans">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {!isModalOpen && (
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 bg-white text-black font-bold tracking-widest hover:bg-gray-100 transition shadow-2xl uppercase"
          >
            Book Your Stay
          </button>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] px-4 md:px-0 overflow-y-auto md:overflow-visible">
          <div
            className="fixed inset-0"
            onClick={() => setIsModalOpen(false)}
          ></div>

          <div className="relative w-full max-w-6xl bg-white shadow-2xl animate-in fade-in zoom-in duration-300 rounded-sm md:rounded-none overflow-hidden">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-500 transition z-10"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col md:flex-row w-full border-b border-gray-200">
              <div className="flex flex-col md:flex-row grow">
                <div className="flex-1 p-6 md:border-r border-gray-200 hover:bg-gray-50 cursor-pointer group transition-colors relative">
                  <div className="flex items-start gap-4">
                    <Calendar className="w-5 h-5 text-gray-600 mt-1" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1 group-hover:text-black transition-colors">
                        Check-In
                      </p>
                      <p className="text-lg font-light text-gray-800">
                        21/11/2025
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex-1 p-6 md:border-r border-gray-200 hover:bg-gray-50 cursor-pointer group transition-colors relative">
                  <div className="flex items-start gap-4">
                    <Calendar className="w-5 h-5 text-gray-600 mt-1" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1 group-hover:text-black transition-colors">
                        Check-Out
                      </p>
                      <p className="text-lg font-light text-gray-800">
                        22/11/2025
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex-1 p-6 hover:bg-gray-50 cursor-pointer group transition-colors relative">
                  <div className="flex items-start gap-4">
                    <BedDouble className="w-5 h-5 text-gray-600 mt-1" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1 group-hover:text-black transition-colors">
                        Rooms & Guests
                      </p>
                      <p className="text-lg font-light text-gray-800">
                        1 Room(s) - 1 Guest(s)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-0 md:w-auto flex items-center bg-white md:pr-16">
                <Link to="/book-stay">
                  {" "}
                  <button className="w-full md:w-auto bg-black text-white font-bold text-sm tracking-widest px-8 py-4 hover:bg-gray-800 transition uppercase">
                    Check Rates
                  </button>
                </Link>
              </div>
            </div>

            <button
              onClick={() => setIsSpecialRatesOpen(!isSpecialRatesOpen)}
              className="w-full flex items-center justify-center py-3 bg-gray-50/50 border-b border-gray-100 hover:bg-gray-100 transition-colors gap-2 text-sm text-gray-500"
            >
              <span>Special Rates & Accessibility</span>
              {isSpecialRatesOpen ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </button>

            {isSpecialRatesOpen && (
              <div className="p-6 md:p-10 bg-white animate-in slide-in-from-top-2 duration-200">
                <div className="mb-8">
                  <label className="inline-flex items-center cursor-pointer gap-3 group">
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        className="peer h-5 w-5 border-2 border-gray-300 rounded-sm checked:bg-black checked:border-black transition-all appearance-none"
                      />
                      <svg
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none opacity-0 peer-checked:opacity-100 text-white"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M3 8L6 11L11 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-base text-gray-700 group-hover:text-black transition-colors">
                      Accessible Room Required
                    </span>
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                  <div className="space-y-4">
                    <h3 className="text-sm font-bold tracking-wider uppercase text-black">
                      Travellers
                    </h3>
                    <div>
                      <label className="block text-sm text-gray-500 mb-2 font-light">
                        Loyalty or subscription number <br />
                        <span className="text-xs text-gray-400">
                          16-digit number on your card
                        </span>
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm font-bold tracking-wider uppercase text-black">
                      Professional Travellers
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-500 mb-2 font-light">
                          Business client with contract <br />
                          <span className="text-xs text-gray-400">
                            Client code (SC, AS...)
                          </span>
                        </label>
                        <input
                          type="text"
                          className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-black transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-500 mb-2 font-light">
                          Access code <br />
                          <span className="text-xs text-gray-400">
                            10 characters
                          </span>
                        </label>
                        <input
                          type="text"
                          className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-black transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm font-bold tracking-wider uppercase text-black">
                      Other Special Rates and Promo Code
                    </h3>
                    <div>
                      <label className="block text-sm text-gray-500 mb-2 font-light">
                        Choose a rate
                      </label>
                      <div className="relative">
                        <select className="w-full border border-gray-300 p-3 pr-10 rounded-sm appearance-none bg-white focus:outline-none focus:border-black text-gray-600 cursor-pointer">
                          <option>None</option>
                          <option>AAA/CAA</option>
                          <option>Senior Citizen</option>
                          <option>Government</option>
                          <option>Military</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
