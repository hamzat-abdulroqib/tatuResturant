import React from "react";

import { Phone, Mail } from "lucide-react";

const LocationContact = () => {
  return (
    <section
      className="w-full bg-white px-4 sm:px-8 py-12 md:py-20 font-serif
                 border-t border-b border-gray-200"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <h2 className="text-3xl md:text-4xl text-gray-900">
              Location &{" "}
              <span className="italic font-['Playfair_Display']">Contact</span>
            </h2>
          </div>

          <div className="md:col-span-2 md:border-l md:border-gray-200 md:pl-12">
            <div className="flex flex-col space-y-10">
              <div>
                <h3 className="text-xs font-semibold tracking-widest text-gray-800">
                  HOTEL LOCATION
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-gray-600">
                  00200, PO box 58581
                  <br />
                  00200 NAIROBI
                  <br />
                  Kenya
                </p>
                <a
                  href="#"
                  className="mt-3 inline-block text-sm font-semibold text-gray-800 underline hover:no-underline"
                >
                  Get Directions
                </a>
              </div>

              <div>
                <h3 className="text-xs font-semibold tracking-widest text-gray-800">
                  HOTEL CONTACT
                </h3>

                <div className="flex justify-between items-center text-sm mt-5">
                  <div className="flex items-center text-gray-600">
                    <Phone size={18} className="mr-3 shrink-0" />
                    <span>Telephone</span>
                  </div>
                  <a
                    href="tel:+254202265000"
                    className="text-gray-800 hover:underline"
                  >
                    +254 202265000
                  </a>
                </div>

                <div className="flex justify-between items-center text-sm mt-4">
                  <div className="flex items-center text-gray-600">
                    <Mail size={18} className="mr-3 shrink-0" />
                    <span>Email</span>
                  </div>
                  <a
                    href="mailto:norfolk.reservations@fairmont.com"
                    className="text-gray-800 hover:underline break-all text-right"
                  >
                    norfolk.reservations@fairmont.com
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-xs font-semibold tracking-widest text-gray-800">
                  PARKING LOT
                </h3>
                <div className="mt-5 text-sm space-y-2 text-gray-600">
                  <p>Parking included</p>
                  <p>200 Parking spaces</p>
                  <p>Outdoor parking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[400px] md:h-[500px] mt-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3988.825258303921!2d36.8137597!3d-1.278375!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f172d042c88cb%3A0xf271434404aa8961!2sFairmont%20The%20Norfolk!5e0!3m2!1sen!2sng!4v1762816024272!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full grayscale"
        ></iframe>
      </div>
    </section>
  );
};

export default LocationContact;
