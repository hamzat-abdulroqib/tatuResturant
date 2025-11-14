// import AboutSection from "../Components/AboutSection";
// import Explore from "../Components/Explore";
// import FeaturedOffers from "../Components/FeaturedOffers";
import Footer from "../Components/Footer";
import GettingHere from "../Components/GettingHere";
// import GuestServices from "../Components/GuestServices";
import Header from "../Components/Header";
import LocationContacts from "../Components/LocationContacts";
// import HeroSection from "../Components/HeroSection";
// import ImageCarousel from "../Components/Imagecarasoul";
// import InfoSection from "../Components/InfoSection";
// import LocationContact from "../Components/LocationContact";
import LocationIntro from "../Components/LocationIntro";
import TransportSection from "../Components/TransportSection";
// import WhyLoveIt from "../Components/WhyLoveIt";

function Home() {
  return (
    <div>
      <Header />
      {/* <HeroSection />
      <AboutSection />
      <InfoSection />
      <ImageCarousel />
      <GuestServices />
      <WhyLoveIt />
      <FeaturedOffers />
      <Explore /> */}
      <LocationIntro />
      <LocationContacts />
      <GettingHere />
      <TransportSection />
      {/* <LocationContact /> */}

      <Footer />
    </div>
  );
}

export default Home;
