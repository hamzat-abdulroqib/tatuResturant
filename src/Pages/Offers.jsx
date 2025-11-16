import Footer from "../Components/Footer";
import Header from "../Components/Header";
import FindOffer from "../Components/Offers/Findoffers";
import NewsletterSignup from "../Components/Offers/NewsletterSignup";
import OffersHero from "../Components/Offers/offerHero";
import OffersIntro from "../Components/Offers/Offersintro";

function Offers() {
  return (
    <>
      <Header />
      <OffersHero />
      <OffersIntro />
      <FindOffer />
      <NewsletterSignup />
      <Footer />
    </>
  );
}

export default Offers;
