import { useTranslation } from "react-i18next";
import rez from '../images/rsz_unnamed_AR.png';
import './HowWorks.css'
function HowWorks (){
    const {t} = useTranslation();
    return(
       <div className="how-it-works-section " style={{padding:"30px 0"}}>
        <div className="how-it-works-section-inner container-fluid" style={{display:"flex" , justifyCotent:"spaceAround"}}>
            <div className="how-it-works-left">
               <strong  style={{ color:"#a7234d" , fontSize:"20px" , paddingLeft:100 , marginBottom:20 }}>{t("work")}</strong>
               <ul style={{marginTop:20}}>
                <li data-number="1" className="listInner" style={{position:"relative"}}>
                  <strong className="pragText">{t("new account")}</strong>
                  <p className="spanText">{t("Download")}</p>
                </li>
                <li data-number="2" className="listInner" style={{position:"relative"}}>
                  <strong className="pragText">{t("you need")}</strong>
                  <p className="spanText">{t("Discover Aswan")}</p>
                </li>
                <li data-number="3" className="listInner" style={{position:"relative"}}>
                  <strong className="pragText">{t("Follow")}</strong>
                  <p className="spanText">{t("orders moment")}</p>
                </li>
                <li data-number="4" className="listInner" style={{position:"relative"}}>
                  <strong className="pragText">{t("Enjoy your order")}</strong>
                  <p className="spanText">{t("The delivery")}</p>
                </li>
               </ul>
            </div>
            <div className="how-it-works-right">
                <img src={rez} style={{width:"100%"}} />
            </div>
        </div>
       </div>
    )
}
export default HowWorks;