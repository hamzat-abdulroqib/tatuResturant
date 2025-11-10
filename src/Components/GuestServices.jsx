import React from "react";

import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import logo from "../assets/logo.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const services = [
  { label: "DATE NIGHT/ROMANTIC" },
  { label: "CHEF'S TABLE" },
  { label: "HEALTH-CONSCIOUS DINERS" },
  { label: "OUTDOOR SEATING" },
  { label: "OPEN KITCHEN" },
];

const ServiceItem = ({ label }) => (
  <div className="flex h-full flex-col items-center justify-center p-8 text-center">
    <img src={logo} alt="" className="h-30 w-40 mb-4" />
    <p className="text-xl font-semibold tracking-wider text-gray-800">
      {label}
    </p>
  </div>
);

const GuestServices = () => {
  return (
    <section className="w-full bg-white font-serif border-t border-b border-gray-200">
      <button
        type="button"
        className="flex w-full items-center justify-between px-4 py-4 md:px-8"
      >
        <span className="text-4xl font-semibold tracking-widest text-gray-900">
          GUEST SERVICES AND INFORMATION
        </span>
        <ChevronDown size={20} className="text-gray-800" />
      </button>

      <div className="border-t border-gray-200">
        <div className="hidden md:grid md:grid-cols-5 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="border-r border-gray-200 last:border-r-0"
            >
              <ServiceItem label={service.label} />
            </div>
          ))}
        </div>

        <div className="md:hidden relative py-8">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            loop={false}
            navigation={{
              nextEl: ".swiper-button-next-services",
              prevEl: ".swiper-button-prev-services",
            }}
            pagination={{
              el: ".swiper-pagination-services",
              type: "fraction",
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <ServiceItem label={service.label} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              className="swiper-button-prev-services 
                               flex h-10 w-10 items-center justify-center rounded-full
                               bg-gray-100 text-gray-700 hover:bg-gray-200"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="swiper-pagination-services w-auto text-sm font-medium text-gray-700"></div>

            <button
              className="swiper-button-next-services
                               flex h-10 w-10 items-center justify-center rounded-full
                               bg-gray-800 text-white hover:bg-gray-700"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestServices;
