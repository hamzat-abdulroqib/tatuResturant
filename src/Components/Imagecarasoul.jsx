import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { ChevronLeft, ChevronRight } from "lucide-react";

import mobileslide1 from "../assets/mobileside1.webp";
import slide1 from "../assets/side1.webp";
import slide2 from "../assets/side2.webp";
import mobileslide2 from "../assets/mobileside2.webp";
const slidesData = [
  {
    mobile: { mobileslide1 },
    desktop: { slide1 },
    alt: "Sliced steak with red wine",
  },
  {
    mobile: { mobileslide2 },
    desktop: { slide2 },
    alt: "Close-up of a red wine glass",
  },
];

const ImageCarousel = () => {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation]}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        className="h-[50vh] md:h-[85vh]"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <picture className="w-full h-full">
              <source media="(min-width: 768px)" srcSet={slide.desktop} />

              <img
                src={slide.mobile}
                alt={slide.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className="swiper-button-prev-custom
                   absolute top-1/2 left-4 -translate-y-1/2 z-10
                   flex h-10 w-10 items-center justify-center rounded-full
                   bg-black/50 text-white
                   hover:bg-black/80 focus:outline-none"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        className="swiper-button-next-custom
                   absolute top-1/2 right-4 -translate-y-1/2 z-10
                   flex h-10 w-10 items-center justify-center rounded-full
                   bg-black/50 text-white
                   hover:bg-black/80 focus:outline-none"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default ImageCarousel;
