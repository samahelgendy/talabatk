import './Banner.css'
import talabat from '../images/talabatak_AR.png'
import { useTranslation } from 'react-i18next';

function Banner (){
    const {t} = useTranslation();
    return(
      <div className="banner-section ">
       <div className="bannerCon" style={{display:"flex" , justifyContent:"space-between" }}>
       <div className="banner-img">
        <img style={{width:"100%" , height:"100%"}} src={talabat}/>
        </div>
       
        <div className="textRes" style={{color:"white"}}>
            <h3>{t("restaurants")}</h3>
            <span>{t("application")}</span>
        </div>
       </div>
      </div>
    )
}
export default Banner;