import AppFooter from "../Home/AppFooter";
import DownUp from "../Home/DownUp";
import Navbar from "../Home/navbar";
import OrderEarning from "./OrderEarning";
import Order_Component from "./Order_Component";

function Order (){
    return(
        <>
        <Navbar />
        <Order_Component />
        <OrderEarning />
        <AppFooter />
        <DownUp />
        </>
    )
}
export default Order;