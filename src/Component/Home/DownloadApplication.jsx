import { useTranslation } from "react-i18next";
import './DownloadApplication.css';
import google from '../images/google-play.png';
import istore from '../images/istore.png'
function DownloadApplication (){
    const {t} = useTranslation();
    return(
      <div className="download-section">
        <div className="download-section-inner container-fluid">
             <h3 style={{ marginBottom: 40}}>{t("Download the application")}</h3>
             <p style={{ marginBottom: 40}}>{t("The Talabat")}</p>
             <div className="download-links">
                <a style={{marginRight: 20}} href="https://play.google.com/store/apps/details?id=app.talabatak.customer" target="_blank"><img src={google} /></a>
                <a href="https://apps.apple.com/us/app/%D8%AA%D8%B7%D8%A8%D9%8A%D9%82-%D8%B7%D9%84%D8%A8%D8%A7%D8%AA%D9%83/id1522427283" target="_blank"><img src={istore} /></a>
             </div>
        </div>
      </div>
    )
}
export default DownloadApplication;