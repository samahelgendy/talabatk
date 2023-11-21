import AppFooter from "./AppFooter";
import Banner from "./Banner";
import CallSession from "./CallSession";
import DiscoverSite from "./DiscoverSite";
import DownUp from "./DownUp";
import DownloadApplication from "./DownloadApplication";
import HowWorks from "./HowWorks";
import Phrmacy from "./Phrmacy";
import Safty from "./Safty";
import SaftyReserved from "./SaftyReserved";
import Navbar from "./navbar";

function Component_Home (){
    return(
        <>
        <Navbar />
        <Banner />
        <DiscoverSite />
        <HowWorks />
        <DownloadApplication />
        <Safty />
        <SaftyReserved />
        <Phrmacy />
        <CallSession />
        <AppFooter />
        <DownUp />
        </>
    )
}
export default Component_Home;