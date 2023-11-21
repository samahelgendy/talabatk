import AppFooter from "../Home/AppFooter";
import DownUp from "../Home/DownUp";
import Navbar from "../Home/navbar";
import BtnWallet from "./BtnWallet";
import WalletEarning from "./WalletEarning";
import Wallet_Component from "./Wallet_Component";

function MyWallet (){
    return(
        <>
        <Navbar />
        <Wallet_Component />
        <WalletEarning />
        <BtnWallet />
        <AppFooter />
        <DownUp />
        </>
    )
}
export default MyWallet;