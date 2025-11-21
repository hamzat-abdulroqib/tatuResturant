import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Check,
  Plus,
  Minus,
  ChevronRight,
  ChevronUp,
} from "lucide-react";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";

import logo from "../assets/logo.svg";

const HotelBooking = () => {
  const [adults] = useState(1);
  const [children] = useState(0);
  const [specialRate] = useState("none");
  const [loyaltyOption, setLoyaltyOption] = useState(null);
  const [showPreferences, setShowPreferences] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    nationality: "",
    countryCode: "",
    phone: "",
    email: "",
    residenceCountry: "",
    cardType: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    receiveNews: false,
    acceptTerms: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Data:", {
      adults,
      children,
      specialRate,
      loyaltyOption,
      formData,
    });
    alert("Reservation Confirmed! (See console for data)");
  };

  return (
    <div className="bg-gray-50 min-h-screen font-serif text-gray-800">
      <Header />

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-8">
        <div className="flex justify-center mb-12 text-[10px] md:text-xs font-bold tracking-widest text-gray-400 uppercase overflow-x-auto">
          <div className="flex items-center whitespace-nowrap">
            <span className="bg-black text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 text-[8px]">
              1
            </span>{" "}
            SEARCH
          </div>
          <span className="mx-2 sm:mx-4 text-gray-300">{">"}</span>
          <div className="flex items-center whitespace-nowrap">
            <span className="border border-gray-400 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-[8px]">
              2
            </span>{" "}
            STAY
          </div>
          <span className="mx-2 sm:mx-4 text-gray-300">{">"}</span>
          <div className="flex items-center whitespace-nowrap">
            <span className="border border-gray-400 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-[8px]">
              3
            </span>{" "}
            ENHANCE
          </div>
          <span className="mx-2 sm:mx-4 text-gray-300">{">"}</span>
          <div className="flex items-center text-black whitespace-nowrap">
            <span className="border border-black rounded-full w-5 h-5 flex items-center justify-center mr-2 text-[8px]">
              4
            </span>{" "}
            COMPLETE
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl text-center mb-12">
          COMPLETE{" "}
          <span className="italic font-['Playfair_Display']">your BOOKING</span>
        </h1>

        <p className="text-center text-xs text-gray-500 mb-8 uppercase tracking-wider">
          All fields are mandatory, except those marked as optional
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3 space-y-8">
            <div className="bg-white p-6 md:p-8 border border-gray-200 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl italic font-serif text-gray-800">
                  Loyalty program
                </h2>
                <img src={logo} alt="ALL" className="h-5 md:h-6" />
              </div>

              <div className="bg-gray-50 p-6 text-center mb-6">
                <p className="text-sm text-gray-600 mb-4">
                  Already have a loyalty account?
                </p>
                <button className="text-sm font-bold underline hover:no-underline">
                  Sign In
                </button>
              </div>

              <p className="text-sm text-gray-600 mb-4">
                Join the ALL loyalty program for free and enjoy exclusive
                benefits.
              </p>

              <div className="space-y-4">
                <label
                  className={`flex items-start gap-3 cursor-pointer p-4 border transition-colors ${
                    loyaltyOption === "member"
                      ? "border-black bg-gray-50"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <input
                    type="radio"
                    name="loyalty"
                    className="mt-1 accent-black"
                    checked={loyaltyOption === "member"}
                    onChange={() => setLoyaltyOption("member")}
                  />
                  <div className="text-sm text-gray-600">
                    <span className="block font-semibold mb-1 text-black">
                      I become a member.
                    </span>
                    I accept the{" "}
                    <a href="#" className="underline hover:no-underline">
                      ALL - Accor Live Limitless terms and conditions (PDF
                      798Ko)
                    </a>
                  </div>
                </label>

                <label
                  className={`flex items-center gap-3 cursor-pointer p-4 border transition-colors ${
                    loyaltyOption === "guest"
                      ? "border-black bg-gray-50"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <input
                    type="radio"
                    name="loyalty"
                    className="accent-black"
                    checked={loyaltyOption === "guest"}
                    onChange={() => setLoyaltyOption("guest")}
                  />
                  <span className="text-sm text-gray-600 font-semibold">
                    No, I decide to continue as a guest
                  </span>
                </label>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 border border-gray-200 shadow-sm">
              <h2 className="text-xl italic font-serif text-gray-800 mb-8">
                Guest informations
              </h2>

              <h3 className="text-xs font-bold uppercase tracking-widest mb-6">
                LET'S GET ACQUAINTED
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    Title
                  </label>
                  <select
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-black bg-transparent"
                  >
                    <option value="">Choose a prefix</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Ms">Ms</option>
                    <option value="Dr">Dr</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">
                      First name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-black bg-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">
                      Last name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-black bg-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    Nationality
                  </label>
                  <p className="text-[10px] text-gray-400 mb-1">
                    To help the hotelier to welcome you
                  </p>
                  <select
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-black bg-transparent"
                  >
                    <option value="">Select nationality</option>
                    <option value="KE">Kenya</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="NG">Nigeria</option>
                  </select>
                </div>
              </div>

              <h3 className="text-xs font-bold uppercase tracking-widest mt-10 mb-6">
                HOW TO CONTACT YOU ?
              </h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Country Code */}
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">
                      Country code
                    </label>
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleInputChange}
                      className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-black bg-transparent"
                    >
                      <option value="">Select</option>
                      <option value="+254">+254 (Kenya)</option>
                      <option value="+1">+1 (USA/Canada)</option>
                      <option value="+44">+44 (UK)</option>
                      <option value="+234">+234 (Nigeria)</option>
                    </select>
                  </div>
                  {/* Phone Number */}
                  <div className="md:col-span-2">
                    <label className="block text-xs text-gray-500 mb-1">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-black bg-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    Email address
                  </label>
                  <p className="text-[10px] text-gray-400 mb-1">
                    This is where we will send the confirmation email.
                  </p>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@fairmont.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-black bg-transparent"
                  />
                </div>
              </div>

              <h3 className="text-xs font-bold uppercase tracking-widest mt-10 mb-6">
                WHERE DO YOU LIVE?
              </h3>
              <div>
                <label className="block text-xs text-gray-500 mb-1">
                  Country or region
                </label>
                <select
                  name="residenceCountry"
                  value={formData.residenceCountry}
                  onChange={handleInputChange}
                  className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-black bg-transparent"
                >
                  <option value="">Choose a country</option>
                  <option value="KE">Kenya</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="NG">Nigeria</option>
                </select>
              </div>
            </div>

            <div className="bg-white border border-gray-200 shadow-sm">
              <button
                onClick={() => setShowPreferences(!showPreferences)}
                className="w-full flex justify-between items-center p-6 md:p-8 text-left focus:outline-none hover:bg-gray-50 transition-colors"
              >
                <div>
                  <h2 className="text-xl italic font-serif text-gray-800">
                    Stay preferences{" "}
                    <span className="text-sm not-italic text-gray-400 font-sans">
                      (optional)
                    </span>
                  </h2>
                  <p className="text-xs text-gray-500 mt-2">
                    Do you have any requests or special needs to be considered
                    for your stay? Please let us know.
                  </p>
                </div>
                {showPreferences ? (
                  <ChevronUp className="text-gray-500" />
                ) : (
                  <ChevronDown className="text-gray-500" />
                )}
              </button>
              {showPreferences && (
                <div className="p-6 md:p-8 border-t border-gray-100 bg-gray-50">
                  <textarea
                    placeholder="Enter your request here..."
                    className="w-full border border-gray-300 p-4 text-sm rounded h-32 focus:outline-none focus:border-black focus:ring-0"
                  ></textarea>
                </div>
              )}
            </div>

            <div className="bg-white p-6 md:p-8 border border-gray-200 shadow-sm">
              <h2 className="text-xl italic font-serif text-gray-800 mb-2">
                Guarantee your reservation
              </h2>
              <p className="text-xs text-gray-500 mb-8">
                All fields are mandatory, except those marked as optional
              </p>

              <div className="bg-gray-50 p-4 text-sm flex justify-between items-center border border-gray-200 border-b-0">
                <div className="text-gray-500">Pay online today</div>
                <div className="text-right font-bold text-gray-400">
                  $0 NGN{" "}
                  <span className="block text-[10px] font-normal">
                    or $0 USD
                  </span>
                </div>
              </div>
              <div className="bg-white p-4 mb-8 text-sm flex justify-between items-center border border-gray-200 pb-8">
                <div className="text-gray-800 font-bold">Pay at the hotel</div>
                <div className="text-right font-bold text-gray-900">
                  300,755 NGN{" "}
                  <span className="block text-[10px] font-normal text-gray-500">
                    or $207 USD
                  </span>
                </div>
              </div>

              <h3 className="text-xs font-bold uppercase tracking-widest mb-4">
                CREDIT INFORMATION
              </h3>
              <p className="text-xs text-gray-500 mb-6 leading-relaxed">
                A credit card is needed to confirm and guarantee your
                reservation. <br />
                You will not be charged today unless your rate requires a
                deposit or prepayment.
                <a href="#" className="underline ml-1 text-black">
                  Find out more
                </a>
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    Credit card type
                  </label>
                  <div className="relative">
                    <select
                      name="cardType"
                      value={formData.cardType}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 p-3 text-sm rounded bg-white appearance-none focus:outline-none focus:border-black"
                    >
                      <option value="">Select your credit card type</option>
                      <option value="Visa">Visa</option>
                      <option value="Mastercard">Mastercard</option>
                      <option value="Amex">American Express</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    Credit card number
                  </label>
                  <p className="text-[10px] text-gray-400 mb-1">
                    Please omit any spaces when entering your credit card number
                  </p>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="4242 4242 4242 4242"
                    className="w-full border border-gray-300 p-3 text-sm rounded bg-white focus:outline-none focus:border-black"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">
                      Expiration date (Month)
                    </label>
                    <div className="relative">
                      <select
                        name="expiryMonth"
                        value={formData.expiryMonth}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-3 text-sm rounded bg-white appearance-none focus:outline-none focus:border-black"
                      >
                        <option value="">MM</option>
                        {[...Array(12)].map((_, i) => (
                          <option key={i} value={i + 1}>
                            {String(i + 1).padStart(2, "0")}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">
                      Expiration date (Year)
                    </label>
                    <div className="relative">
                      <select
                        name="expiryYear"
                        value={formData.expiryYear}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-3 text-sm rounded bg-white appearance-none focus:outline-none focus:border-black"
                      >
                        <option value="">YYYY</option>
                        {[...Array(10)].map((_, i) => (
                          <option key={i} value={2025 + i}>
                            {2025 + i}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="receiveNews"
                    checked={formData.receiveNews}
                    onChange={handleInputChange}
                    className="mt-1 w-4 h-4 border-gray-300 rounded text-black focus:ring-black accent-black"
                  />
                  <span className="text-sm text-gray-600 group-hover:text-black transition-colors">
                    I would like to receive news and offers by email from
                    Fairmont (Optional)
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleInputChange}
                    className="mt-1 w-4 h-4 border-gray-300 rounded text-black focus:ring-black accent-black"
                  />
                  <span className="text-sm text-gray-600 group-hover:text-black transition-colors">
                    I accept the{" "}
                    <a href="#" className="underline font-medium">
                      Terms and conditions*
                    </a>
                  </span>
                </label>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-black text-white text-sm font-bold tracking-wider py-5 hover:bg-gray-800 transition-colors uppercase shadow-lg"
            >
              CONFIRM THE RESERVATION
            </button>

            <div className="text-[10px] text-gray-500 leading-relaxed">
              <p className="mb-2">
                The collected data is processed by Accor S.A. for the purposes
                of managing your bookings and stays, getting to know you better,
                improving the quality of service...
              </p>
              <p>
                You may at any time object to the sharing of this data by
                writing to{" "}
                <a href="#" className="underline text-black font-medium">
                  data.privacy@accor.com
                </a>
                .
              </p>
              <p className="mt-2">
                For more information, please see our{" "}
                <a href="#" className="underline text-black font-medium">
                  Personal Data Protection Charter
                </a>
                .
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/3 space-y-6">
            <div className="bg-white border border-gray-200 shadow-sm sticky top-4">
              <div className="relative h-48">
                <img
                  src="/stay-hero.jpg"
                  alt="Fairmont The Norfolk"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://placehold.co/600x400/e2e8f0/64748b?text=Hotel";
                  }}
                />
                <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 text-xs rounded backdrop-blur-sm">
                  <span className="font-bold">20</span> photos
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-gray-900">
                  FAIRMONT THE NORFOLK
                </h3>

                <div className="flex justify-between text-xs mb-4 border-b border-gray-100 pb-4">
                  <div>
                    <span className="block text-gray-500 mb-1">Check-in</span>
                    <span className="font-bold text-gray-900 text-sm">
                      Nov 21, 2025
                    </span>
                    <span className="block text-gray-400 mt-1">From 12PM</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-gray-500 mb-1">Check-out</span>
                    <span className="font-bold text-gray-900 text-sm">
                      Nov 22, 2025
                    </span>
                    <span className="block text-gray-400 mt-1">Until 10AM</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between items-center cursor-pointer hover:bg-gray-50 p-2 -mx-2 rounded transition-colors">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-gray-700">
                        Room for 2 adults
                      </span>
                    </div>
                    <ChevronDown size={14} className="text-gray-400" />
                  </div>
                  <p className="text-[10px] text-gray-500 mt-1 px-2">
                    Uae, India And Uk Resident Rates- Bed And Breakfast
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200 p-6">
                <h3 className="text-lg italic font-serif text-gray-800 mb-4 border-b border-gray-100 pb-2">
                  Pricing details
                </h3>

                <div className="flex justify-between text-xs mb-2 text-gray-600">
                  <span>Room</span>
                  <span>300754.41 NGN</span>
                </div>
                <div className="flex justify-between text-[10px] text-gray-400 mb-4">
                  <span>for 1 night</span>
                </div>

                <button className="text-[10px] font-bold text-gray-800 flex items-center gap-1 mb-6 hover:text-black transition-colors">
                  SEE DETAILS <ChevronDown size={10} />
                </button>

                <div className="flex justify-between items-end border-t border-gray-200 pt-4 mb-1">
                  <span className="text-sm font-bold uppercase text-gray-900">
                    TOTAL
                  </span>
                  <div className="text-right">
                    <span className="text-xl font-bold text-gray-900 block">
                      300,755{" "}
                      <span className="text-xs font-normal text-gray-500">
                        NGN
                      </span>
                    </span>
                  </div>
                </div>
                <div className="text-right text-[10px] text-gray-400 mb-6">
                  or $207 USD <br /> Taxes & fees included
                </div>

                <div className="bg-gray-50 p-3 text-[10px] text-gray-600 flex justify-between mb-2 rounded">
                  <span>Pay online today</span>
                  <span className="text-right font-semibold">
                    0 NGN <br /> or $0 USD
                  </span>
                </div>
                <div className="bg-gray-50 p-3 text-[10px] text-gray-600 flex justify-between rounded">
                  <span>Pay at the hotel</span>
                  <span className="text-right font-bold text-gray-900">
                    300,755 NGN <br /> or $207 USD
                  </span>
                </div>

                <p className="text-[10px] text-gray-400 mt-4 leading-tight">
                  You will pay in the local currency of the hotel. The price in
                  NGN is approximate and may vary according to the exchange
                  rate.
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 shadow-sm p-6">
              <h3 className="text-xs font-bold uppercase mb-2 flex items-center gap-2">
                <Check size={14} className="text-green-600" /> BEST PRICE
                GUARANTEE
              </h3>
              <p className="text-xs text-gray-600 mb-2">
                Found a lower rate? We'll match it and give you 10% off.
              </p>
              <a
                href="#"
                className="text-[10px] underline text-gray-500 hover:text-black"
              >
                See conditions
              </a>
            </div>

            {/* Need Help Box */}
            <div className="bg-white border border-gray-200 shadow-sm p-6">
              <h3 className="text-xs font-bold uppercase mb-2">NEED HELP ?</h3>
              <p className="text-xs text-gray-600 mb-4">
                A representative for room reservations is here to help
              </p>
              <p className="text-xs font-bold text-gray-800 mb-4">
                +1-800-257-7544 (Canada & US)
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="block text-[10px] underline text-gray-500 hover:text-black"
                >
                  More numbers
                </a>
                <a
                  href="#"
                  className="block text-[10px] underline text-gray-500 hover:text-black"
                >
                  FAQs
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HotelBooking;
