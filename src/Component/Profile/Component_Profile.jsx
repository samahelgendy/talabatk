import AppFooter from "../Home/AppFooter";
import DownUp from "../Home/DownUp";
import Navbar from "../Home/navbar";
import RrofileEarning from "./ProfileEarning";
import ProfileSession from "./ProfileSession";

function Profile (){
    return(
        <>
        <Navbar />
        <ProfileSession />
        <RrofileEarning />
        <AppFooter />
        <DownUp />
        </>
    )
}
export default Profile;