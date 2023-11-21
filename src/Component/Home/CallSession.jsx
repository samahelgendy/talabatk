import './SaftyReserver.css';
import safty from '../images/unnamedc_AR.jpg'
import { useTranslation } from 'react-i18next';
function CallSession (){
    const {t} = useTranslation();
    return(
        <div className="safety-section reverse ">
            <div className="safety-section-inner container-fluid">
                <div className="safety-section-left" style={{maxWidth:"50%"}}>
                    <img src={safty} style={{width:"100%"}} />
                </div>
                <div className="safety-section-right">
                <h3 className="saftyText">{t("Damascus")}</h3>
              <p className="saftyPrag">{t("Syrian-style")}</p>
                </div>
            </div>
        </div>
    )
}
export default CallSession;