import AppFooter from "../Home/AppFooter";
import DownUp from "../Home/DownUp";
import NavLogin from "../Login/NavLogin";
import NewAccount from "./NewAccount";

function Component_Account(){
    return(
       <>
       <NavLogin />
       <NewAccount />
       <AppFooter />
       <DownUp />
       </>
    )
}
export default Component_Account;