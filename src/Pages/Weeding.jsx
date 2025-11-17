import Footer from "../Components/Footer";
import GuestServices from "../Components/GuestServices";
import Header from "../Components/Header";
import ImageCarousel from "../Components/Imagecarasoul";
import EventInfo from "../Components/Meeting/EventInfo";
import Eventsection from "../Components/Meeting/Eventsection";
import FaqAccordion from "../Components/Meeting/FaqAccordion";
import HomeAccommodations from "../Components/Meeting/HomeAccommodations";
import Menu from "../Components/Meeting/Menu";
import Menu2 from "../Components/Meeting/Menu2";
import WeedingHeader from "../Components/Meeting/WeedingHeader";

function Weeding() {
  return (
    <>
      <Header />
      <WeedingHeader />
      <Eventsection />
      <GuestServices />
      <EventInfo />

      <ImageCarousel />
      <Menu />
      <Menu2 />
      <FaqAccordion />
      <HomeAccommodations />
      <Footer />
    </>
  );
}

export default Weeding;
