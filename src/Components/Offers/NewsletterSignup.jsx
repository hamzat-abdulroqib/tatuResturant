import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/news.jpg";
const NewsletterSignup = () => {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh]  mb-20 text-white font-serif">
      <picture className="absolute inset-0 -z-20">
        <source media="(min-width: 768px)" srcSet={image} />
        <img
          src={image}
          alt="Person reading Fairmont Magazine with city view"
          className="h-full w-full object-cover"
        />
      </picture>

      <div className="absolute inset-0 -z-10 bg-black/50"></div>

      <div className="flex  justify-end items-center h-full px-4 sm:px-8">
        <div className="w-full max-w-sm md:max-w-md bg-black/70 p-8 md:p-10 text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-semibold leading-tight mb-4">
            UNLOCK INSIDER ACCESS: FAIRMONT'S EXCLUSIVE NEWSLETTER
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed mb-6">
            Sign up to our newsletter to be the first to hear about great
            offers, new openings and events for you.
          </p>

          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-light mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email address"
                className="w-full bg-transparent border border-gray-600 px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-white"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-white text-black text-xs font-bold tracking-wider px-6 py-4 hover:bg-gray-200 transition-colors"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
