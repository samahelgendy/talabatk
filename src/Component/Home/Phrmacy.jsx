import { useTranslation } from "react-i18next";
import phramcy from '../images/rsz_1rsz_1rsz_med_AR.jpg';
import './Phrmacy.css'
function Phrmacy (){
    const {t} = useTranslation();
    return(
        <div className="personal-ride">
        <div className="personal-ride-inner">
         <div className="personal-ride-caption container-fluid">
         <div class="personal-ride-right">
                <h3 className="saftyText">{t("Aswan Pharmacies")}</h3>
              <p className="saftyPrag">{t("Order")}</p>
            </div>
            <div className="personal-ride-left">
                <img src={phramcy} />
            </div>

         </div>
        </div>
        </div>
    )
}
export default Phrmacy;