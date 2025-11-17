import Footer from "../Components/Footer";
import GuestServices from "../Components/GuestServices";
import Header from "../Components/Header";
import ImageCarousel from "../Components/Imagecarasoul";
import EventInfo from "../Components/Meeting/EventInfo";
import Eventsection from "../Components/Meeting/Eventsection";
import FaqAccordion from "../Components/Meeting/FaqAccordion";
import HomeAccommodations from "../Components/Meeting/HomeAccommodations";
import MeetingHeading from "../Components/Meeting/MeetingHeading";
import Menu from "../Components/Meeting/Menu";

function Meeting() {
  return (
    <>
      <Header />
      <MeetingHeading />
      <Eventsection />
      <GuestServices />
      <EventInfo />

      <ImageCarousel />
      <Menu />
      <FaqAccordion />
      <HomeAccommodations />

      <Footer />
    </>
  );
}

export default Meeting;
