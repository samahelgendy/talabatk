import { useTranslation } from 'react-i18next';
import './HelpContent.css';
import { Link } from 'react-router-dom';
import logo from '../images/logoDown.png'
function HelpContent(){
    const{t} = useTranslation();
    return(
       <div className="dashboard">
        <div className="gen-cms-page">
            <div className="gen-cms-page-inner">
          <h2 className="header-page">{t("Help Center")}</h2>
          <div className="static-page">
           <h2 style={{textAlign:"center"}}>{t("Download the Talabat")}</h2>
           <div>
            <span style={{fontSize:"12pt"}}>{t("While search")}
            <b>
                <u>{t("The best restaurants")}</u>
            </b>
            {t("Which offers delivery")}
            <b>
                <u>{t("Download the Talabat")}</u>
            </b>
            </span>
           </div>&nbsp;
           <div style={{textAlign:"center"}}>
            <Link to="/">
                <img src={logo} style={{ width: "160px" , height: "77px"}} />
            </Link>
           </div><br />
           <div>
            <span>{t("Aswan may")}</span>
           </div><br />
           <h2>{t("Damascene Corner")}</h2>
           <div>
            <span>{t("Al-Wensh Restaurant")}</span>
           </div>
           <h2>{t("The king of")}</h2>
           <div>
            <span>{t("The Syrian")}</span>
           </div>
           <h2>Sushi Gate Aswan – سوشي جيت اسوان</h2>
           <div>
            <span>{t("Sushi Gate Restaurant")}
            <b><u>{t("Sushi Gate menu")}</u></b>
            {t("A wide range")}</span>
           </div>
           <h2>{t("Al-Sham Palace")}</h2>
           <div>
            <span>{t("The best Syrian")}</span>
           </div>
           <h2>{t("Syrian Baron")}</h2>
           <div>
            <span>{t("Syrian Baron menu")}</span>
            <br />
            <span>{t("Syrian Baron number")}</span>
           </div>

           <h2>{t("What is the")}</h2>
           <div>
            <span>{t("What is the name")}</span>
            <br />
            <span>{t("The number")}</span>
           </div>

           <h2>{t("Effendi shrimp")}</h2>
           <div>
            <span>{t("Shrimp Effendi")}</span>
            <br />
            <span>{t("Shrimp Effendi Restaurant")}</span>
           </div>

           <h2>{t("New Sinjari fish")}</h2>
           <div>
            <span>{t("New Sinjari fish menu")}</span>
            <br />
            <span>{t("New Sinjari fish number")}</span>
           </div>

           <h2>{t("Gambrica")}</h2>
           <div>
            <span>{t("Jambrika restaurant menu")}</span>
            <br />
            <span>{t("Jambrika restaurant number")}</span>
           </div>

           <h2>{t("Al-Huda Palace")}</h2>
           <div>
            <span>{t("Qasr Al-Huda")}</span>
            <br />
            <span>{t("Qasr Al-Huda Res")}</span>
           </div>

           <h2>{t("Porto Sono")}</h2>
           <div>
            <span>{t("Porto Sono Res")}</span>
            <br />
            <span>{t("Porto Sono number")}</span>
           </div>

           <h2>{t("Makani Restaurant")}</h2>
           <div>
            <span>{t("Makani Rest")}</span>
            <br />
            <span>{t("Makani Restaurant and")}</span>
           </div>

           <h2>{t("Ali Baba")}</h2>
           <div>
            <span>{t("Ali Baba Res")}</span>
            <br />
            <span>{t("Ali Baba restaurant")}</span>
           </div>

           <h2>{t("Chicken Lovers")}</h2>
           <div>
            <span>{t("Chicken Lovers Res")}</span>
            <br />
            <span>{t("Chicken Lovers number")}</span>
           </div>

           <h2>{t("Zizo Restaurant")}</h2>
           <div>
            <span>{t("Zizo Restaurant menu")}</span>
            <br />
            <span>{t("Zizo restaurant number")}</span>
           </div>

           <h2>{t("Abeer Restaurant")}</h2>
           <div>
            <span>{t("Abeer Restaurant menu")}</span>
            <br />
            <span>{t("Abeer Restaurant number")}</span>
           </div>

           <h2>{t("My dear friend")}</h2>
           <div>
            <span>{t("Haty Al-Harif menu")}</span>
            <br />
            <span>{t("Haty Al-Harif's number")}</span>
           </div>

           <h2>Miss Burger - ميس برجر</h2>
           <div>
            <span>{t("Miss Burger menu")}</span>
            <br />
            <span>{t("Miss Burger number")}</span>
           </div>

           <h2>{t("McDonald's Aswan")}</h2>
           <div>
            <span>{t("McDonald's Aswan menu")}</span>
            <br />
            <span>{t("McDonald's prices")}</span>
            <br />
            <span>{t("McDonald's Aswan phone")}</span>
           </div>

           <h2>كنتاكي اسوان – KFC</h2>
           <div>
            <span>{t("KFC Aswan menu")}</span>
            <br />
            <span>{t("KFC Aswan Menu")}</span>
            <br />
            <span>{t("KFC Aswan prices")}</span>
            <br />
            <span>{t("KFC Aswan phone")}</span>
            <br />
            <br />
            <br />
            <span>{t("Your orders provide")}
            <b>
                <u>{t("Aswan Restaurants")}</u>
           </b>
           </span>
           </div>

          </div>
          </div>
        </div>
       </div>
    )
}
export default HelpContent;