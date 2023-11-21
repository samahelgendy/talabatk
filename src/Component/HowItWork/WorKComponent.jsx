import { useTranslation } from "react-i18next";
import down from '../images/logoDown.png';
import img1 from '../images/ta_Page_1.jpg';
import img2 from '../images/ta_Page_2.jpg';
import img3 from '../images/ta_Page_3.jpg';
import img4 from '../images/ta_Page_4.jpg';
import img5 from '../images/ta_Page_5.jpg';
import img6 from '../images/ta_Page_6.jpg';
import img7 from '../images/ta_Page_7.jpg';
import './work.css';
function WorKComponent (){
    const {t} = useTranslation();
    return(
      <div className="dashboard">
       <div className="gen-cms-page">
        <div className="gen-cms-page-inner">
         <h2 className="header-page">{t("work")}</h2>
         <div className="static-page">
            <h1 style={{textAlign:"center" , color: "#757575"}}>{t("How to use")}</h1>
            <div style={{textAlign:"center"}}>
                <strong>{t("Enter the app")}</strong><br />
                <a href="http://onelink.to/talabatak">
                    <img style={{width:"150px" , height:"72px"}} src={down} />
                </a>
            </div>
            <ul>
                <li>{t("Create a new account")}</li>
            </ul>
            <img className="ta_Page" src={img1} />
            <br />
            <div style={{textAlign:"center"}}>{t("Click on Profile")}</div>
            <br />
            <div style={{textAlign:"center"}}>
                <img className="ta_Page" src={img2} />
            </div>
            <br />
            <strong>{t("Click on New")}</strong>
            <ul>
                <li><strong>{t("Ask for everything")}</strong></li>
                <li>{t("Discover restaurants, pharmacies")}</li>
                <li><strong>{t("Follow your order")}</strong></li>
                <li>{t("You can follow")}</li>
                <li><strong>{t("Enjoy your")}</strong></li>
                <li>{t("The delivery representative will")}</li>
            </ul>
            <img className="ta_Page" src={img3} />
            <div style={{textAlign:"center"}}>
            &nbsp;{t("Select section")}
            <br />
            &nbsp;{t("Choose the store")}
                
            </div>
            <img className="ta_Page" src={img4} />
            <div style={{textAlign:"center"}}>
            &nbsp;{t("Choose the store or")}
            <br />
            &nbsp;{t("Choose the required")}
                
            </div>
            <img className="ta_Page" src={img5} />

            <div style={{textAlign:"center"}}>
            &nbsp;{t("Enter the delivery address")}
            <br />
            &nbsp;{t("Delivery fees")}
                
            </div>
            <img className="ta_Page" src={img6} />
            <div style={{textAlign:"center"}}>
            &nbsp;{t("Choose the payment")}
                
            </div>
            <img className="ta_Page" src={img7} />
            <div style={{textAlign:"center"}}>
            &nbsp;{t("Keep track")}<br />
            &nbsp;{t("Connected successfully")}<br />
            &nbsp;{t("Enjoy")}<br />
                
            </div>
         </div>
        </div>
       </div>
      </div>
    )
}
export default WorKComponent;