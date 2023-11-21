import { useTranslation } from 'react-i18next';
import slide1 from '../images/1597164583_28875.png';
import slide2 from '../images/1597166586_24577.jpg';
import slide3 from '../images/1599703873_55336.jpg';
import slide4 from '../images/1599847322_96305.jpg';
import slide5 from '../images/1600554737_88306.jpg';
import slide6 from '../images/1601635966_23931.jpg';
import slide7 from '../images/1608943690_69304.jpg';
import slide8 from '../images/1610212179_30964.jpg';
import './Restaurants.css';
import { Link } from 'react-router-dom';
function ResturantSlide (){
    const {t} = useTranslation();
    return(
        <div classNameName="dashboard">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="1000">
      <img src={slide1} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h1>{t("The king")}</h1>
        <p>
        <Link className="button1"><span>{t("request")}</span></Link>
        </p>
      </div>
    </div>
    <div className="carousel-item " data-bs-interval="1000">
      <img src={slide2} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
      <h1>{t("Hatti Al-Harif")}</h1>
        <p>
        <Link className="button1"><span>{t("request")}</span></Link>
        </p>
      </div>
    </div>
    <div className="carousel-item " data-bs-interval="1000">
      <img src={slide3} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
      <h1>{t("Hatti Al-Harif")}</h1>
        <p>
        <Link className="button1"><span>{t("request")}</span></Link>
        </p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="1000">
      <img src={slide4} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
      <h1>{t("Hatti Al-Harif")}</h1>
        <p>
        <Link className="button1"><span>{t("request")}</span></Link>
        </p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="1000">
      <img src={slide5} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
      <h1>{t("fragrance")}</h1>
        <p>
        <Link className="button1"><span>{t("request")}</span></Link>
        </p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="1000">
      <img src={slide6} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
      <h1>{t("Mandarin shrimp")}</h1>
        <p>
        <Link className="button1"><span>{t("request")}</span></Link>
        </p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="1000">
      <img src={slide7} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
      <h1>{t("Mandarin shrimp")}</h1>
        <p>
        <Link className="button1"><span>{t("request")}</span></Link>
        </p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="1000">
      <img src={slide8} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
      <h1>{t("Damascen")}</h1>
        <p>
        <Link className="button1"><span>{t("request")}</span></Link>
        </p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
        </div>

        <div>
           <p><Link className="button1 button-see-all"><span>{t("All Aswan")}</span></Link></p>
        </div>
        <div id="banner_section_id" className="exclude_addressbar" style={{marginTop:"-17px" , marginBottom:"-50px"}}>
           <div className="banner-section-inner">
            <div className="banner-top">
              <div className="banner-caption blocktext">
               <h1>{t("Download the application")}</h1>
               <p>{t("The Talabat application")}</p>
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
export default ResturantSlide;