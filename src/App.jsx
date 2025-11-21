import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Dine from "./Pages/Dine.jsx";
import Booking from "./Pages/Booking.jsx";
import BookingSuccess from "./Components/BookingSuccess.jsx";
import Stay from "./Pages/Stay.jsx";
import Offers from "./Pages/Offers.jsx";
import Events from "./Pages/Events.jsx";
import HotelBooking from "./Pages/HotelBooking.jsx";
import Login from "./Pages/login.jsx";
import Checkrate from "./Components/Checkrate.jsx";
const ViewallRoom = () => (
  <div className="p-8 text-center text-2xl font-serif">View All Rooms Page</div>
);
const Dining = () => (
  <div className="p-8 text-center text-2xl font-serif">Dining Details Page</div>
);
const Meeting = () => (
  <div className="p-8 text-center text-2xl font-serif">Meeting Page</div>
);
const Weeding = () => (
  <div className="p-8 text-center text-2xl font-serif">Wedding Page</div>
);
const Contact = () => (
  <div className="p-8 text-center text-2xl font-serif">Contact Page</div>
);
const Hotels = () => (
  <div className="p-8 text-center text-2xl font-serif">
    Hotels & Resorts Page
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/dine" element={<Dine />} />
        <Route path="/dine/tatu" element={<Dine />} />
        <Route path="/dine/terrace" element={<Dine />} />
        <Route path="/dine/cin-cin" element={<Dine />} />
        <Route path="/dine/dining" element={<Dining />} />

        <Route path="/booking" element={<Booking />} />
        <Route path="/booking/success" element={<BookingSuccess />} />
        <Route path="/book-stay" element={<HotelBooking />} />

        <Route path="/stay" element={<Stay />} />
        <Route path="/stay/rooms" element={<Stay />} />
        <Route path="/stay/suites" element={<Stay />} />
        <Route path="/stay/viewallRoom" element={<ViewallRoom />} />

        <Route path="/offers" element={<Offers />} />

        <Route path="/events" element={<Events />} />
        <Route path="/events/meeting" element={<Meeting />} />
        <Route path="/events/weeding" element={<Weeding />} />
        <Route path="/events/meetings" element={<Meeting />} />
        <Route path="/events/weddings" element={<Weeding />} />
        <Route path="/events/social" element={<Events />} />
        <Route path="/events/capacities" element={<Events />} />

        <Route path="/about/history" element={<About />} />
        <Route path="/about/location" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/inquiry" element={<Contact />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/book-stay" element={<HotelBooking />} />
        <Route path="/login" element={<Login />} />
        <Route path="checkrate" element={<Checkrate />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
