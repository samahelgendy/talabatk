import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import './Restaurants.css'
function RestaurantCom (){
    const {t} = useTranslation();
    return(
        <div id="wrapper">
          <div id="banner_section_id" className="exclude_addressbar">
           <div className="banner-section-inner">
            <div className="banner-top">
              <div className="banner-caption blocktext">
               <h1>{t("Aswan restaurants at")}</h1>
               <p>{t("One application")}</p>
               <p>
                <Link to='/' className="button1"><span>{t("sign in")}</span></Link>
               </p>
              </div>
            </div>
           </div>
          </div>


        </div>
    )
}
export default RestaurantCom;