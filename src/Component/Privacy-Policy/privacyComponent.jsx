import AppFooter from "../Home/AppFooter";
import DownUp from "../Home/DownUp";
import Navbar from "../Home/navbar";
import PrivacyPolicy from "./PrivacyPolicy";

function PrivacyComponent (){
    return(
        <>
        <Navbar />
        <PrivacyPolicy />
        <AppFooter />
        <DownUp />
        </>
    )
}
export default PrivacyComponent;