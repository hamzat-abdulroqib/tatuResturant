import React from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  MapPin,
  Calendar,
  Clock,
  Users,
  Edit2,
  XCircle,
} from "lucide-react";

import tatu from "../assets/tatubooking2.jpeg";
import tatu1 from "../assets/tatubooking1.jpg";

const recommendations = [
  {
    id: 1,
    title: "Cin Cin Bar",
    subtitle: "Experience the art of mixology",
    image: { tatu },
    slug: "/dine/cin-cin",
  },
  {
    id: 2,
    title: "Lord Delamere Terrace",
    subtitle: "Classic all-day dining",
    image: { tatu1 },
    slug: "/dine/terrace",
  },
];

const BookingSuccess = () => {
  const bookingDetails = {
    restaurant: "Tatu",
    location: "Harry Thuku Road, Nairobi, Nairobi Central",
    guests: 2,
    date: "Friday, 21 Nov",
    time: "6:00 PM",
  };

  return (
    <div className="bg-white min-h-screen flex flex-col font-serif">
      <main className="grow w-full max-w-3xl mx-auto px-4 py-8 md:py-16">
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden mb-12">
          <div className="bg-green-50 border-b border-green-100 p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <CheckCircle size={32} className="text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Booking Confirmed!
            </h1>
            <p className="text-sm text-gray-600">
              We've sent a confirmation email to{" "}
              <span className="font-semibold">your@email.com</span>
            </p>
          </div>

          <div className="p-6 md:p-8">
            <div className="text-center mb-8">
              <h2
                className="text-3xl font-light text-[#8B5E3C] mb-2"
                style={{ fontFamily: "sans-serif" }}
              >
                tatu
              </h2>
              <p className="text-sm text-gray-500 flex items-center justify-center gap-1">
                <MapPin size={14} />
                {bookingDetails.location}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-b border-gray-100 py-8 mb-8">
              <div className="flex flex-col items-center text-center">
                <span className="text-gray-400 mb-2">
                  <Users size={20} />
                </span>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                  Guests
                </span>
                <span className="text-lg font-bold text-gray-900">
                  {bookingDetails.guests} People
                </span>
              </div>

              <div className="flex flex-col items-center text-center md:border-l md:border-r border-gray-100">
                <span className="text-gray-400 mb-2">
                  <Calendar size={20} />
                </span>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                  Date
                </span>
                <span className="text-lg font-bold text-gray-900">
                  {bookingDetails.date}
                </span>
              </div>

              <div className="flex flex-col items-center text-center">
                <span className="text-gray-400 mb-2">
                  <Clock size={20} />
                </span>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                  Time
                </span>
                <span className="text-lg font-bold text-gray-900">
                  {bookingDetails.time}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                <Edit2 size={16} />
                Modify Booking
              </button>
              <button className="flex items-center justify-center gap-2 px-6 py-3 border border-red-200 text-red-600 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors">
                <XCircle size={16} />
                Cancel Booking
              </button>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900">
              You might also like
            </h3>
            <Link
              to="/dine"
              className="text-sm font-medium text-[#8B5E3C] hover:underline"
            >
              View all
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {recommendations.map((item) => (
              <Link
                key={item.id}
                to={item.slug}
                className="group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = { tatu };
                    }}
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-base font-bold text-gray-900 mb-1 group-hover:text-[#8B5E3C] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500">{item.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link to="/">
            <button className="bg-gray-900 text-white text-sm font-bold tracking-wider px-8 py-4 rounded hover:bg-gray-800 transition-colors uppercase">
              Back to Home
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default BookingSuccess;
