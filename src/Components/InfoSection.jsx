import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const InfoSection = () => {
  return (
    <section
      className="w-full bg-white px-4 sm:px-8 py-12 md:py-20 font-serif 
                 border-t border-b border-gray-200"
    >
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col">
            <h3 className="text-xs font-semibold tracking-widest text-gray-800">
              LUNCH & DINNER
            </h3>

            <div className="mt-6 space-y-3 text-sm text-gray-500">
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <span className="text-gray-800">MONDAY - FRIDAY</span>
                <span className="mt-1 sm:mt-0">
                  12.00 PM - 3.00 PM / 6.00 PM - 10.00 PM
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <span className="text-gray-800">SATURDAYS</span>
                <span className="mt-1 sm:mt-0">6.00 PM - 10.00 PM</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <span className="text-gray-800">SUNDAYS</span>
                <span className="mt-1 sm:mt-0">Closed</span>
              </div>
            </div>

            <div className="mt-10">
              <button
                type="button"
                className="bg-gray-900 px-6 py-4 text-xs font-bold tracking-wider text-white hover:bg-gray-700"
              >
                BOOK A TABLE
              </button>
            </div>
          </div>

          <div className="flex flex-col space-y-10">
            <div>
              <h3 className="text-xs font-semibold tracking-widest text-gray-800">
                LOCATION
              </h3>
              <div className="mt-6 flex text-sm">
                <MapPin
                  size={18}
                  className="mr-4 mt-1 shrink-0 text-gray-500"
                />
                {/* This part now stacks on mobile */}
                <div className="flex w-full flex-col sm:flex-row sm:justify-between">
                  <span className="text-gray-500">Address</span>
                  <span className="text-left text-gray-800 sm:text-right">
                    Harry Thuku Road
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold tracking-widest text-gray-800">
                CONTACT
              </h3>
              <div className="mt-6 flex text-sm">
                <Phone size={18} className="mr-4 mt-1 shrink-0 text-gray-500" />
                <div className="flex w-full flex-col sm:flex-row sm:justify-between">
                  <span className="text-gray-500">Telephone</span>
                  <a
                    href="tel:0795737786"
                    className="text-left text-gray-800 hover:underline sm:text-right"
                  >
                    0795 737 786
                  </a>
                </div>
              </div>
              <div className="mt-4 flex text-sm">
                <Mail size={18} className="mr-4 mt-1 shrink-0 text-gray-500" />
                <div className="flex w-full flex-col sm:flex-row sm:justify-between">
                  <span className="text-gray-500">Email</span>
                  <a
                    href="mailto:norfolk.reservation@fairmont.com"
                    className="break-all text-left text-gray-800 hover:underline sm:break-normal sm:text-right"
                  >
                    norfolk.reservation@fairmont.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
