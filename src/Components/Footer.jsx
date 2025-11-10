import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  X,
} from "lucide-react";
import logo from "../assets/logo-booking.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/icon4.svg";
import icon5 from "../assets/icon5.svg";
import icon6 from "../assets/icon6.svg";
import icon7 from "../assets/icon7.svg";
import icon9 from "../assets/icon9.svg";
import icon10 from "../assets/icon10.svg";
import icon11 from "../assets/icon11.svg";
const brands = [
  { name: "Sofitel", logoSrc: { logo } },
  { name: "sbe", logoSrc: { icon3 } },
  { name: "onefinestay", logoSrc: { icon4 } },
  { name: "Mantis", logoSrc: { icon5 } },
  { name: "Emblems", logoSrc: { icon2 } },
  { name: "The Plaza", logoSrc: { icon7 } },
  { name: "Delano", logoSrc: { icon9 } },
  { name: "Mondrian", logoSrc: { icon10 } },
  { name: "SLS", logoSrc: { icon6 } },
  { name: "SO/", logoSrc: { icon11 } },
];

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Youtube, href: "#" },
  { icon: X, href: "#" },

  { icon: Linkedin, href: "#" },
];

const legalLinks = [
  { name: "Terms & Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "Do Not Sell My Personal Information", href: "#" },
  { name: "Cookies Preferences", href: "#" },
  { name: "Site Map", href: "#" },
  { name: "Web Accessibility", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 font-serif relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 py-12">
        <div className="flex justify-center mb-8">
          <img src={logo} alt="Fairmont" className="h-6" />
        </div>

        <div className="border-t border-gray-700"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
          <div>
            <h3 className="text-xs font-semibold tracking-widest text-white uppercase mb-4">
              EXCLUSIVE OFFERS
            </h3>
            <p className="text-sm mb-4">
              Unlock Insider Access: Fairmont's Exclusive Newsletter
            </p>
            <form className="flex w-full">
              <input
                type="email"
                placeholder="Email address"
                className="grow bg-black border border-gray-700 p-3 text-sm focus:outline-none focus:border-white"
              />
              <button
                type="submit"
                className="bg-black border border-l-0 border-gray-700 p-3 px-6 text-sm font-semibold tracking-wider text-white hover:bg-gray-800 whitespace-nowrap"
              >
                SIGN UP
              </button>
            </form>
          </div>

          <div className="md:pl-10">
            <h3 className="text-xs font-semibold tracking-widest text-white uppercase mb-4">
              NEED HELP?
            </h3>
            <p className="text-sm mb-2">
              Toll Free room reservations only +1 800-257-7544 (Canada & U.S.)
            </p>
            <a href="#" className="text-sm underline hover:no-underline">
              More numbers
            </a>
            <br />
            <a
              href="#"
              className="text-sm underline hover:no-underline mt-1 inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700"></div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10">
          <div>
            <h3 className="text-xs font-semibold tracking-widest text-white uppercase mb-4">
              COMPANY
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm hover:underline">
                  Best Price Guarantee
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Loyalty Program
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  About Fairmont
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Sustainable Development
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Affiliate Program
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-widest text-white uppercase mb-4">
              PROFESSIONAL SOLUTIONS
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm hover:underline">
                  Travel Agents
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-widest text-white uppercase mb-4">
              CONTACT
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm hover:underline">
                  Press Room
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-widest text-white uppercase mb-4">
              ALL.COM APP
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm hover:underline">
                  iOS app
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Android app
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700"></div>

        <div className="relative py-10">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next-brands",
              prevEl: ".swiper-button-prev-brands",
            }}
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
              640: { slidesPerView: 4 },
              768: { slidesPerView: 6 },
              1024: { slidesPerView: 8 },
            }}
            loop={true}
            className="w-full"
          >
            {brands.map((brand) => (
              <SwiperSlide key={brand.name}>
                <a href="#" title={brand.name}>
                  <img
                    src={brand.logoSrc}
                    alt={brand.name}
                    className="h-6 mx-auto grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="swiper-button-prev-brands hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-full bg-black/50 text-white hover:bg-black/80">
            <ChevronLeft size={20} />
          </button>
          <button className="swiper-button-next-brands hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-full bg-black/50 text-white hover:bg-black/80">
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="border-t border-gray-700"></div>

        <div className="py-10 text-center">
          <div className="flex justify-center items-center space-x-4 mb-6">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} className="hover:text-white">
                <link.icon size={20} />
              </a>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs mb-4">
            {legalLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:underline">
                {link.name}
              </a>
            ))}
          </div>

          <p className="text-xs text-gray-500">
            Fairmont is part of Accor © Copyright 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
