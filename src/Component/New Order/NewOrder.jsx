import AppFooter from "../Home/AppFooter";
import DownUp from "../Home/DownUp";
import Navbar from "../Home/navbar";
import HowitWork from "./HowitWork";
import NewOrders from "./NewOrders";

function NewOrder (){
    return(
       <>
       <Navbar />
       <NewOrders />
       <HowitWork />
       <AppFooter />
       <DownUp />
       </>
    )
}
export default NewOrder;