import AppFooter from "../Home/AppFooter";
import DownUp from "../Home/DownUp";
import Login from "./LoginIn";
import NavLogin from "./NavLogin";

function Component_Login (){
    return(
        <>
        <NavLogin />
        <Login />
        <AppFooter />
        <DownUp />
        </>
    )
}
export default Component_Login;