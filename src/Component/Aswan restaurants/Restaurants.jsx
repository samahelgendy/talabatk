import AppFooter from "../Home/AppFooter";
import Navbar from "../Home/navbar";
import RestaurantCom from "./RestaurantCom";
import ResturantSlide from "./ResturantSlide";

function Restaurants (){
    return(
      <>
      <Navbar />
      <RestaurantCom />
      <ResturantSlide />
      <AppFooter />
      </>
    )
}
export default Restaurants;