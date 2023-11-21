import { useTranslation } from 'react-i18next';
import safty from '../images/rsz_1rsz_unnamedd_AR.png';
import './Safty.css'
function Safty (){
    const {t} = useTranslation()
    return(
      <div className="safety-section" style={{padding:"50px 0"}}>
        <div className="safety-section-inner container-fluid">

            <div className="safety-section-right">
              <h3 className="saftyText">{t("Delivery of fresh")}</h3>
              <p className="saftyPrag">{t("easy and simple")}</p>
            </div>
            <div className="safety-section-left">
               <img src={safty} />
            </div>
        </div> 
      </div>
    )
}
export default Safty;