import { useTranslation } from 'react-i18next';
import './Condition.css'
function Condition (){
    const {t} = useTranslation();
    return(
        <div className="gen-cms-page">
         <div className="gen-cms-page-inner">
            <h1 className="header-page">{t("Terms & Condit")}</h1>
            <div className="static-page">
                <p>{t("These terms")}</p>
                <h1 className="header-page" style={{color:"#a7234d"}}>{t("Site services")}</h1>
                <span style={{lineHeight: "115%"}}>{t("The site seeks")}</span>
                <br />
                <br />
                <span style={{lineHeight: "115%"}}>{t("The site does not")}</span>
                <br />
                <br />
                <span style={{lineHeight: "115%"}}>{t("responsible or liable")}</span>

                <h1  style={{color:"#a7234d" , paddingTop:20}}>{t("User behaviors")}</h1>
                <span style={{lineHeight: "115%"}}>{t("When you enter any")}</span>
                <br />
                <br />
                <span style={{lineHeight: "115%"}}>{t("Users are fully")}</span>

                <h1  style={{color:"#a7234d" , paddingTop:20}}>{t("Copyrights")}</h1>
                <span style={{lineHeight: "115%"}}>{t("Users are granted full")}</span>

                <h1  style={{color:"#a7234d" , paddingTop:20}}>{t("Pricing policy and")}</h1>
                <span style={{lineHeight: "115%"}}>{t("Each user must pay")}</span>
                <br />
                <br />
                <span style={{lineHeight: "115%"}}>{t("Stores are committed")}</span>

                <h1 style={{color:"#a7234d" , paddingTop:20}}>{t("Availability of products")}</h1>
                <span style={{lineHeight: "115%"}}>{t("Stores update their")}</span>
                <br />
                <br />
                <span style={{lineHeight: "115%"}}>{t("Stores have the right")}</span>
                <br />
                <br />
                <span style={{lineHeight: "115%"}}>{t("Depending on the")}</span>
                
                <h1  style={{color:"#a7234d" , paddingTop:20}}>{t("Cancel or modify orders")}</h1>
                <span style={{lineHeight: "115%"}}>{t("Cancellation")}</span>
                <br />
                <br />
                <span style={{lineHeight: "115%"}}>{t("In the event of an error")}</span>

                <h1  style={{color:"#a7234d" , paddingTop:20}}>{t("Complaints and suggestions")}</h1>
                <span style={{lineHeight: "115%"}}>{t("It is recommended")}</span>

                <h1  style={{color:"#a7234d" , paddingTop:20}}>{t("Limitation of liability")}</h1>
                <span style={{lineHeight: "115%"}}>{t("Talabatak acts")}</span>

                <h1  style={{color:"#a7234d" , paddingTop:20}}>{t("Update terms and conditions")}</h1>
                <span style={{lineHeight: "115%"}}>{t("Only those responsible")}</span>
            </div>
         </div>
        </div>
    )
}
export default Condition;