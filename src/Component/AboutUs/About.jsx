import { useTranslation } from 'react-i18next';
import './About.css'
function About (){
    const {t} = useTranslation();
    return(
      <div className="dashboard">
        <div className="about-main">
            <div className="heading-area">
             <div className="heading-area-inner">
                <h1>{t("About Us")}</h1>
             </div>
            </div>
            <div className='main-page-wrap' style={{paddingBottom:50}}>
                <div className="about-caption">
                    <div className="about-caption-inner">
                       <h3>{t("One App")}</h3>
                       <p>{t("What if one app")}</p>
                    </div>
                </div>
                <article>
                 <div className="article-inner">
                    <div className="artical-left">
                        <div className='article-image'>
                            <div className="article-image-inner">

                            </div>
                        </div>
                    </div>
                    <div className="artical-right">
                        <h4>{t("Innumerable")}</h4>
                        <p>{t("With innumerable")}</p>
                        <h4>{t("Scan")}</h4>
                        <p>{t("We understand")}</p>
                        <h4>{t("Mark Store")}</h4>
                        <p>{t("Liked the delivery")} <br />{t("So now that")} </p>
                    </div>
                 </div>
                </article>

                <article className='inverse'>
                 <div className="article-inner">

                    <div className="artical-right">
                        <h4>{t("Real Time")}</h4>
                        <p>{t("With our Talabatak")}</p>
                        <h4>{t("Easy Payment")}</h4>
                        <p>{t("With our pre-integrated")}</p>
                        <h4>{t("Saved Location")}</h4>
                        <p>{t("We understand the monotony")} </p>
                    </div>
                    <div className="artical-left">
                        <div className='article-image'>
                            <div className="article-image-inner img1">

                            </div>
                        </div>
                    </div>
                 </div>
                </article>

                <article >
                 <div className="article-inner">
                    <div className="artical-left">
                        <div className='article-image'>
                            <div className="article-image-inner img2">

                            </div>
                        </div>
                    </div>
                    <div className="artical-right">
                        <h4>{t("Operation of Talabatak")}</h4>
                        <p>{t("Talabatak is extremely")}</p>
                        <div className="login-caption active" id="user">
                      <ul>
                        <li>{t("Enter the app and select")}</li>
                        <li>{t("Provide location")}</li>
                        <li>{t("Tap on the items")}</li>
                        <li>{t("Get order confirmed")}</li>
                        <li>{t("Provide feedback")}</li>
                      </ul>
                    </div>
                    </div>
                 </div>
                </article>

            </div>

        </div>
      </div>
    )
}
export default About;