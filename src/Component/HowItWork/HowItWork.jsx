import AppFooter from "../Home/AppFooter";
import DownUp from "../Home/DownUp";
import Navbar from "../Home/navbar";
import WorKComponent from "./WorKComponent";
import './work.css';
function HowItWork (){
    return(
        <>
        <Navbar />
        <WorKComponent />
        <AppFooter />
        <DownUp />
        </>
    )
}
export default HowItWork;