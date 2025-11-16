import Dinechef from "../Components/Dine/Dinechef";
import Dinehero from "../Components/Dine/Dinehero";
import DiningIntro from "../Components/Dine/DiningIntro";
import Italian from "../Components/Dine/italian";
import RestaurantBarList from "../Components/Dine/RestaurantBarList";

import FeaturedOffers from "../Components/FeaturedOffers";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function Dining() {
  return (
    <>
      <Header />
      <Dinehero />
      <DiningIntro />
      <RestaurantBarList />
      <Italian />
      <Dinechef />
      <FeaturedOffers />
      <Footer />
    </>
  );
}

export default Dining;
