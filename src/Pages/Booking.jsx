import React from "react";
import { ChevronDown, Calendar } from "lucide-react";

import { Link } from "react-router-dom";

import imageboooking from "../assets/tatubooking1.jpg";
import tatu from "../assets/tatubooking2.jpeg";
import BookingSuccess from "../Components/BookingSuccess";

const timeSlots = [
  "2:30 PM",
  "3:00 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
];

const Booking = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col font-serif">
      <main className="grow w-full max-w-3xl mx-auto px-4 py-8 md:py-12">
        <div className="border border-gray-200 rounded-t-lg p-6 mb-0">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-light text-[#8B5E3C]">tatu</h1>
            </div>

            <div className="text-right">
              <p className="text-xs font-bold text-gray-800 uppercase mb-1">
                Reservations powered by
              </p>
              <div className="inline-flex items-center justify-center bg-orange-500 text-white font-black text-xl px-2 py-1 leading-none tracking-tighter">
                EAT
                <br />
                OUT
              </div>
            </div>
          </div>

          <div className="text-center mt-6">
            <h2 className="text-xl font-bold text-gray-800">Tatu</h2>
            <p className="text-sm text-gray-500 mt-1">
              Harry Thuku Road, Nairobi, Nairobi Central
            </p>
          </div>
        </div>

        <div className="border border-t-0 border-gray-200 p-6 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                Guests
              </label>
              <div className="relative border border-gray-300 rounded px-3 py-2 flex items-center justify-between cursor-pointer hover:border-gray-400">
                <span className="text-sm text-gray-700">2</span>
                <ChevronDown size={16} className="text-gray-500" />
              </div>
            </div>

            <div className="relative">
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                Date
              </label>
              <div className="relative border border-gray-300 rounded px-3 py-2 flex items-center justify-between cursor-pointer hover:border-gray-400">
                <span className="text-sm text-gray-700">
                  Friday, 21 Nov (Today)
                </span>
                <ChevronDown size={16} className="text-gray-500" />
              </div>
            </div>

            <div className="relative">
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                Select seating option
              </label>
              <div className="relative border border-gray-300 rounded px-3 py-2 flex items-center justify-between cursor-pointer hover:border-gray-400">
                <span className="text-sm text-gray-700">No preference</span>
                <ChevronDown size={16} className="text-gray-500" />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-center text-sm font-bold text-gray-700 mb-4">
              Select a time
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  className="border border-gray-300 rounded py-2 text-sm text-gray-700 font-medium hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border border-t-0 border-gray-200 p-6 bg-white">
          <h3 className="text-center text-sm font-bold text-gray-700 mb-6">
            Featured options
          </h3>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <div className="flex flex-col items-center text-center w-full sm:w-48">
              <div className="w-full aspect-square overflow-hidden rounded-lg shadow-sm mb-3 border border-gray-100">
                <img
                  src={imageboooking}
                  alt="Chats & Bites"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = { imageboooking };
                  }}
                />
              </div>
              <span className="text-sm font-bold text-gray-800">
                Chats & Bites
              </span>
            </div>

            <div className="flex flex-col items-center text-center w-full sm:w-48">
              <div className="w-full aspect-square overflow-hidden rounded-lg shadow-sm mb-3 border border-gray-100">
                <Link to="BookingSuccess">
                  <img
                    src={tatu}
                    alt="Taste The Flame!"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = { tatu };
                    }}
                  />
                </Link>
              </div>
              <span className="text-sm font-bold text-gray-800">
                Taste The Flame!
              </span>
            </div>
          </div>
        </div>

        <div className="border border-t-0 border-gray-200 rounded-b-lg p-4 bg-white">
          <button className="w-full bg-[#bfdbcd] text-white font-bold py-3 rounded hover:bg-[#a8cbb9] transition-colors cursor-pointer">
            Continue
          </button>
        </div>
      </main>
    </div>
  );
};

export default Booking;
