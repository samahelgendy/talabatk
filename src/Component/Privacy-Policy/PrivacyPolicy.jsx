import { useTranslation } from "react-i18next";
import './PrivacyPolicy.css';
function PrivacyPolicy (){
    const {t} = useTranslation();
    return(
        <div className="dashboard">
         <div className="gen-cms-page">
          <div className="gen-cms-page-inner">
          <h2 className="header-page">{t("Privacy Policy")}</h2>
          <div className="static-page">
            <p>{t("This Privacy Policy")}</p>
            <h1>{t("We may disclose")}</h1>
            <p>- {t("Information")}</p>
            <p>--- {t("first name")}</p>
            <p>--- {t("last name")}</p>
            <p>--- {t("phone number")}</p>
            <p>--- {t("Basic Information")}</p>
            <p>--- {t("information we collect")}</p>
            <h1>{t("Data protection")}</h1>
            <p>{t("Data protection is our top")}</p>
            <h1>{t("Your rights")}</h1>
            <p>{t("At any time")}</p>
            <ul>
                <li>{t("What data")}</li>
                <li>{t("Amend any")}</li>
                <li>{t("Request that")}</li>
                <li>{t("Inform us")}</li>
            </ul>
            <h1>{t("Cookies")}</h1>
            <p>{t("Cookies are pieces")}</p>
            <p>{t("We collect and analyze")}</p>
            <h1>{t("Advertising")}</h1>
            <p>{t("We may require")}</p>
            <p>{t("If there is any")}</p>
            <h1>{t("Update privacy policy")}</h1>
            <p>{t("Our policies are updated")}</p>
            <p>{t("If you feel that")}</p>
          </div>
          </div>
         </div>
        </div>
    )
}
export default PrivacyPolicy;