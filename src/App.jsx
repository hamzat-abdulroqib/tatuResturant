import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import ViewallRoom from "./Pages/ViewallRoom.jsx";
import Dine from "./Pages/Dine.jsx";
// import Booking from './Pages/Booking.jsx';
import Stay from "./Pages/Stay.jsx";
import Offers from "./Pages/Offers.jsx";
import Dining from "./Pages/Dining.jsx";
// import Events from './Pages/Events.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/dine" element={<Dine />} />
        <Route path="dine/dining" element={<Dining />} />
        {/* <Route path="/booking" element={<Booking />} /> */}
        <Route path="/stay" element={<Stay />} />
        <Route path="/offers" element={<Offers />} />
        {/* <Route path="/events" element={<Events />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="stay/viewallRoom" element={<ViewallRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
