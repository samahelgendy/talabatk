import { useTranslation } from 'react-i18next';
import {useEffect} from 'react'
import './LoginIn.css'
import { Link } from 'react-router-dom';
import talabat from '../images/rsz_unnamed_AR.png';
import face from '../images/facebook-new.png'
function Login (){
    const {t} = useTranslation();
    useEffect(() =>{
         const lis = document.querySelectorAll('.tab-switch li');
         const captions = document.querySelectorAll(".login-caption");
         lis.forEach((li) =>{
           li.addEventListener('click' , (e)=>{
            const listValue = e.target.dataset.set;
            captions.forEach(cap =>{
              const capValue =  cap.getAttribute("id");
                if(listValue !== capValue){   
                    cap.classList.remove("active");     
                    
                 }else{
                    cap.classList.add("active")
                 }
            })
            lis.forEach((li) =>{
                li.classList.remove('active');
            })
            li.classList.add('active');
           })
         })
         const forms = document.querySelectorAll(".form-group");
         const formInputs = document.querySelectorAll(".form-group input");
       formInputs.forEach((input) =>{
            input.addEventListener('focus' , (e)=>{
              e.target.classList.add("floating");
          })

          input.addEventListener('blur' , ()=>{
            forms.forEach((form)=>{
                form.classList.remove("floating");
                if(input.value !== ""){
                    form.classList.add("floating");
                }
            })       
            })
         })
        // formInputs.addEventListener('focus' , ()=>{
        //         forms.classList.add("floating");
        // })
        // formInputs.addEventListener('blur' , ()=>{
        //     forms.classList.remove("floating");
        //     if(formInputs.value !== ""){
        //         forms.classList.add("floating");
        //     }
            
        //     })
        //  formInputs.forEach((input)=>{
        //     input.addEventListener('focus' , ()=>{

        //         formInputs.forEach(()=>{
        //             forms.forEach((form) =>{
        //                 form.classList.add("floating")
        //             })
        //         })
        //     })
        //  })
    } , [])
    return(
        <div className="dashboard" >
            <div className=" parallax-window" >
            <div className="login-inner">
              <div className="login-block login-newblock">
                <div className="login-block-heading login-newblock">
                <label className="loginlabel">{t("Log in")}</label>
                <div className="tabholder login-tabholder">
                    <ul className="tab-switch login-tab-switch">
                        <li className="active">
                            <a rel="canonical"  data-set="user" style={{color:"white"}} >{t("user")}</a>
                        </li>
                        <li>
                            <a rel="canonical" data-set="provider" style={{color:"white"}} >{t("Delivery representative")}</a>
                        </li>
                        <li>
                            <a rel="canonical" data-set="resturant" style={{color:"white"}} >{t("Shop")}</a>
                        </li>
                    </ul>
                </div>
                </div>
                <div className="login-left">
                    <img src={talabat} />
                    <div className="login-caption active" id="user">
                      <p><strong>{t("user")}</strong></p>
                      <ul>
                        <li>{t("personal data")}</li>
                        <li>{t("Discover restaurants")}</li>
                        <li>{t("Follow your orders")}</li>
                        <li>{t("The delivery representative")}</li>
                      </ul>
                    </div>

                    <div className="login-caption" id="provider">
                      <p><strong>{t("Delivery representative")}</strong></p>
                      <ul>
                        <li>{t("Login or register")}</li>
                        <li>{t("Receive delivery")}</li>
                        <li>{t("Reach store")}</li>
                        <li>{t("Get paid")}</li>
                      </ul>
                    </div>

                    <div className="login-caption" id="resturant">
                      <p><strong>{t("Shop")}</strong></p>
                      <ul>
                        <li>{t("Provide your mobile")}</li>
                        <li>{t("Store can be grocery")}</li>
                        <li>{t("Update the items")}</li>
                        <li>{t("Earn")}</li>
                      </ul>
                    </div>


                </div>
                <div className="login-right" id="login_div">
                
                    <div className="login-data-inner">
                        <h1>{t("requests")}</h1>
                        <p>{t("user")}</p>
                        <form action="dashboard.php" onsubmit="return chkValid()" id="login_box" name="login_form">
                          <div class="form-group ">
                        
                            <label className="hotelhide">{t("placeEmail")}</label>
                            <input tabindex="1" type="text" name="vEmail" required />
                          </div>
                          <div className="mobile-info">{t("mobile number")}</div>
                          <div className="form-group">
                            <div className="relative_ele">
                                <label>{t("password")}</label>
                                <input tabindex="2" type="password" name="vPassword" id="vPassword" required />
                            </div>
                          </div>
                          <div className="button-block">
                            <div className="btn-hold">
                                <input tabindex="3" type="submit" value={t("sign in")} />
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                 </svg>
                            </div>
                            <Link className='linkbef' to="/forgetPassword">{t("Forgot your password")}</Link>
                          </div>
                          <div className="member-txt hotelhide">
                            {t("Make a new")}
                            <Link className='linkbef' to="/newAccount">{t("make")}</Link>
                          </div>
                          <span id="rider-social">
                            <div className="aternate-login" data-name="OR"></div>
                          </span>
                          <div className="soc-login-row">
                            <span >{t("using social")}</span>
                            <ul style={{marginTop:"10px"}} className="social-list">
                                <a target="_blank" href="https://www.facebook.com/v2.2/dialog/oauth?client_id=653498918864052&redirect_uri=https%3A%2F%2Fwww.talabatak.app%2Ffb-login%2Ffbconfig-rider.php&state=61cc6a6a59d4213a78d21408aa9a53fb&sdk=php-sdk-4.0.15&scope=email"><img src={face}  /></a>
                            </ul>
                          </div>
                        </form>
                    </div>
                
              </div>
              </div>

            </div>
            </div>
        </div>
    )
}


export default Login;