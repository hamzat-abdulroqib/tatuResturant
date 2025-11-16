import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Pause, Play } from "lucide-react";
import why from "../../assets/dineimg.jpg";
import why1 from "../../assets/dinemobile.jpg";
import slide1 from "../../assets/hero.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const navLinks = [
  { label: "STAY", path: "/stay", hasDropdown: true },
  { label: "OFFERS", path: "/offers", hasDropdown: false },
  { label: "DINE", path: "/dine", hasDropdown: true },
  { label: "EVENTS", path: "/events", hasDropdown: true },
  { label: "ABOUT THE HOTEL", path: "/about", hasDropdown: true },
];

const slides = [
  {
    desktop: { why },
    mobile: { why1 },
    alt: "View of Fairmont The Norfolk hotel exterior",
  },
  {
    desktop: { slide1 },
    mobile: { slide1 },
    alt: "Close-up of a relaxing spa treatment",
  },
];

const OffersHero = () => {
  const swiperRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const handlePauseToggle = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      if (isPaused) {
        swiperRef.current.swiper.autoplay.start();
      } else {
        swiperRef.current.swiper.autoplay.stop();
      }
      setIsPaused(!isPaused);
    }
  };

  return (
    <div className="relative h-[90vh] md:h-[85vh] w-full text-white font-serif">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        loop={true}
        slidesPerView={1}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{
          el: ".swiper-pagination-custom",
          type: "fraction",
        }}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <picture className="w-full h-full">
              <source media="(min-width: 768px)" srcSet={slide.desktop} />
              <img
                src={slide.mobile}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 -z-10 bg-black/50"></div>

      <nav className="absolute top-0 left-0 right-0 z-10 hidden items-center justify-between px-8 py-4 md:flex">
        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="flex items-center gap-1 text-xs font-semibold tracking-wider hover:opacity-80"
            >
              <span>{link.label}</span>
              {link.hasDropdown && <ChevronDown className="h-4 w-4" />}
            </Link>
          ))}
        </div>
        <Link to="/booking">
          <button
            type="button"
            className="bg-white px-5 py-3 text-xs font-bold tracking-wider text-black hover:bg-gray-200"
          >
            CHECK RATES
          </button>
        </Link>
      </nav>

      <div className="absolute bottom-16 left-4 right-4 md:left-8 z-10 text-center md:text-left">
        <p className="text-sm font-light tracking-widest text-gray-200">
          FAIRMONT THE NORFOLK
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-medium text-white mt-2">
          OFFERS EXCLUSIVE TO FAIRMONT
        </h1>
      </div>

      <div className="absolute bottom-16 right-4 md:right-8 z-10 flex items-center gap-4">
        <div className="swiper-pagination-custom text-sm font-semibold"></div>
        <button
          onClick={handlePauseToggle}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50"
          aria-label={isPaused ? "Play slider" : "Pause slider"}
        >
          {isPaused ? <Play size={16} /> : <Pause size={16} />}
        </button>
      </div>
    </div>
  );
};

export default OffersHero;
