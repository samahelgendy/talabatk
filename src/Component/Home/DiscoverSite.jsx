
import { useTranslation } from "react-i18next";

function DiscoverSite (){
    const {t} = useTranslation();
    return(
        <div style={{position: "relative"}} >
        <div className="container" >
        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.873)" , padding:"30px 0"}}>
        <strong style={{display: "block",textAlign: "center",marginBottom: "20px",color:"white"}}>{t("Discover")}</strong>
          <div className="eleSearch">
          <input className="seaInput" style={{width: "50%",outline: "none",padding: "11px",borderRadius: "6px",marginRight: "20px",border:"none"}} placeholder={t("placelocation")} />
        <select className="selectLang" style={{color:"#a7234d",
      border: "1px solid",
      borderRadius: "6px",
      width: '100px',
      padding: '5px 15px',
      outline: 'none',
      cursor:"pointer",
      width:"20%",
      marginRight: "20px"
      }}  >
        <option value='option'>{t("Restaurant")}</option>
        <option value='en'>{t("supermarket")}</option>
        <option value='ar'>{t("Vegetables")}</option>
        <option value='ar'>{t("Bakery")}</option>
        <option value='ar'>{t("Pharmacies")}</option>
        <option value='ar'>{t("Meat")}</option>

        </select>
        <button className="btnSear" style={{ border: "none",
    width: "20%",
    padding: "8px 0",
    borderRadius: "6px",
    color:" white",
    backgroundColor: "#a7234d",}}>{t("search")}</button>
          </div>
        </div>
        </div>
        </div>
    )
}
export default DiscoverSite;