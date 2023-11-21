import AppFooter from "../Home/AppFooter";
import DownUp from "../Home/DownUp";
import Navbar from "../Home/navbar";
import About from "./About";
import SignUp from "./SignUp";

function Componet_About (){
    return(
        <>
        <Navbar />
        <About />
        <SignUp />
        <AppFooter />
        <DownUp />
        </>
    )
}
export default Componet_About;