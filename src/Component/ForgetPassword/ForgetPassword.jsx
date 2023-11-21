import { useTranslation } from 'react-i18next';
import './ForgetPassword.css';
import login from '../images/login-img_20190912115724.jpg'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
function ForgetPassword (){
    const {t} = useTranslation();
    useEffect(()=>{
        const forms = document.querySelector(".form-group");
        const formInputs = document.querySelector(".form-group input");

        formInputs.addEventListener('focus' , ()=>{
        forms.classList.add("floating");
        })
        formInputs.addEventListener('blur' , ()=>{
            forms.classList.remove("floating");
            if(formInputs.value !== ""){
                forms.classList.add("floating");
            }
            
            })

    } , [])
    return(
     <div className="dashboard" id="wrapper">
      <div className="parallax">
        <div class="login-inner">
           <div className="login-block for-forgot">
            <div className="login-block-heading login-newblock forget_label">
             <label id="forgotlabel">{t("Forgot your password")}</label>
            </div>

            <div className="login-img">
                <img src={login} />
            </div>

            <div className="login-text">
                <div className="login-data-inner">
                    <h1 id="forgot-user-label">{t("user")}</h1>
                    <span id="forgot_div_desc">{t("You just need")}</span>
                </div>
                <form method="post" action class="form-signin">
                <div className="form-group">
                    <label>{t("EmailId")}</label>
                    <input type="email" name="femail" tabindex="1" id="femail" required />
                </div>
                <div className="button-block">
                            <div className="btn-hold">
                                <button>{t("Recover Password")}</button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                 </svg>
                        </div>
                       </div>

                <div className="aternate-login" data-name="OR"></div>
                <div className="member-txt hotelhide" >
                    {t("Already have")}
                <Link className='linkbef' to="/login">{t("Sign in")}</Link>
                </div>
               </form>
  

             </div>

            </div>  

        </div>
      </div>
     </div>
    )
}
export default ForgetPassword;