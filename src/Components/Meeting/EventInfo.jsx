import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const EventInfo = () => {
  return (
    <section
      className="w-full bg-white px-4 sm:px-8 py-12 md:py-20 font-serif
                 border-t border-gray-200"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div className="flex flex-col">
            <h3 className="text-xs font-semibold tracking-widest text-gray-800 uppercase">
              IMPORTANT INFORMATION
            </h3>
            <p className="mt-6 text-base leading-relaxed text-gray-600">
              With Nairobi’s key business districts within close proximity,
              location is everything. It is ideally situated for hosting events
              of any kind, offering unparalleled convenience and accessibility
              for both business and social gatherings.
            </p>
          </div>

          <div className="flex flex-col space-y-10 md:pl-12 md:border-l md:border-gray-200">
            <div>
              <h3 className="text-xs font-semibold tracking-widest text-gray-800 uppercase">
                LOCATION
              </h3>
              <div className="flex text-sm mt-6">
                <MapPin
                  size={18}
                  className="mr-4 mt-1 shrink-0 text-gray-500"
                />
                <div className="flex w-full flex-col sm:flex-row sm:justify-between">
                  <span className="text-gray-500">Address</span>
                  <span className="text-left text-gray-800 sm:text-right">
                    00200, PO Box 58581, 00200, NAIROBI, Kenya
                  </span>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xs font-semibold tracking-widest text-gray-800 uppercase">
                CONTACT
              </h3>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between text-sm mt-6">
                <div className="flex items-center text-gray-600">
                  <Phone size={18} className="mr-3 shrink-0" />
                  <span>Telephone</span>
                </div>
                <a
                  href="tel:+254202265000"
                  className="text-gray-800 hover:underline font-medium mt-1 md:mt-0"
                >
                  +254 202265000
                </a>
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between text-sm mt-4">
                <div className="flex items-center text-gray-600">
                  <Mail size={18} className="mr-3 shrink-0" />
                  <span>Email</span>
                </div>
                <a
                  href="mailto:norfolk.reservations@fairmont.com"
                  className="text-gray-800 hover:underline font-medium break-all mt-1 md:mt-0 md:text-right"
                >
                  norfolk.reservations@fairmont.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;
