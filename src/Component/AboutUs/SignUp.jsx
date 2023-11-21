import { useTranslation } from 'react-i18next';
import './SignUp.css';
import { Link } from 'react-router-dom';
function SignUp (){
    const {t} = useTranslation();
    return(
     <div className="signup-row">
      <div className="signup-row-inner">
        <div className="signup-block driver">
            <Link to='/newAccount'>
             <img src='https://www.talabatak.app/assets/img/page/home/apptype/DeliverallX/deliverall/right-arrow.svg' />
             {t("Sign Up as Driver")}
            </Link>
        </div>
        <div className="signup-block rider">
            <Link to='/newAccount'>
             <img src='https://www.talabatak.app/assets/img/page/home/apptype/DeliverallX/deliverall/right-arrow.svg' />
             {t("Sign Up as User")}
            </Link>
        </div>
      </div>
     </div>
    )
}
export default SignUp;