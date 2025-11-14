import FeaturedOffers from "./FeaturedOffers";
import Footer from "./Footer";
import Header from "./Header";
import LocationIntro from "../Components/ROOM/headerRoom";
import RoomList from "./ROOM/RoomList";
import LoyaltySection from "./ROOM/LoyaltySection";

function Accomodation() {
  return (
    <>
      <Header />
      <LocationIntro />
      <RoomList />
      <LoyaltySection />
      <FeaturedOffers />

      <Footer />
    </>
  );
}
export default Accomodation;
