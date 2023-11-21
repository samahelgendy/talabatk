import { useTranslation } from 'react-i18next';
import  Quick from '../images/quick-booking.png';
import  Unlimited from '../images/unlimited-store.png';
import  TrackOrder from '../images/track-order.png';
import  FastDelivery from '../images/fast-delivery.png'
import './HowitWork.css';
function HowitWork (){
    const {t} = useTranslation();
    return(
        <div className='dashboard'>
      <div className="howitwork">
        <div className="howitwork-inner">
            <ul>
                <li>
                    <i>
                        <img src={Quick} />
                    </i>
                    <strong>{t("Quick Booking")}</strong>
                    <p>{t("Simply login")}</p>
                </li>

                <li>
                    <i>
                        <img src={Unlimited} />
                    </i>
                    <strong>{t("Unlimited Store")}</strong>
                    <p>{t("Whether it")}</p>
                </li>

                <li>
                    <i>
                        <img src={TrackOrder} />
                    </i>
                    <strong>{t("Track Order")}</strong>
                    <p>{t("As soon as")}</p>
                </li>

                <li>
                    <i>
                        <img src={FastDelivery} />
                    </i>
                    <strong>{t("Fast Delivery")}</strong>
                    <p>{t("Your order")}</p>
                </li>
            </ul>
        </div>
      </div>
      </div>
    )
}
export default HowitWork;