import { useTranslation } from 'react-i18next';
import './NewAccount.css';
import { Link } from 'react-router-dom';
import face from '../images/facebook-new.png';
import { useEffect } from 'react';
import { spaceChildren } from 'antd/es/button';
function NewAccount (){
    const {t} = useTranslation();
    const msgspan =t("magEmail");
    const msgspan1 =t("magpassword");
    const msgspan2 =t("magFirst");
    const msgspan3 =t("magLast");
    useEffect(() =>{
      const lis = document.querySelectorAll('.login-tabholder .tab-switch li');
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

    //   const forms = document.querySelectorAll(".form-group");
    //   const formInputs = document.querySelectorAll(".form-group input");
    // formInputs.forEach((input) =>{
    //      input.addEventListener('focus' , ()=>{
    //      forms.forEach((form)=>{
    //          form.classList.add("floating");
    //      })
    //    })

    //    input.addEventListener('blur' , ()=>{
    //      forms.forEach((form)=>{
    //          form.classList.remove("floating");
    //          if(input.value !== ""){
    //              form.classList.add("floating");
    //          }
    //      })

         
    //      })

    //   })

      const inputValues = document.querySelectorAll(".create-account-input");
      const spanValues = document.querySelector(".regValue");
      const spanpass = document.querySelector(".regValue.span1");
      const spanfirst = document.querySelector(".regValue.span2");
      const spanlast = document.querySelector(".regValue.span3");
       inputValues.forEach((inputValue) =>{
        inputValue.addEventListener('change' , (e)=>{
          const  valueReg = /\w+@\w+/ig;
          const  valuePass = /\w+/ig;
          const validation = valueReg.test(inputValue.value);
          const validationPass = valuePass.test(inputValue.value);
         if(validation === false){
          spanValues.innerText = msgspan;
              }else{
          spanValues.innerText = "";
              }

              if(validationPass === false){
              spanpass.innerText = msgspan1;
              spanfirst.innerText = msgspan2;
              spanlast.innerText = msgspan3;
                    }else{
              spanpass.innerText = "";
              spanfirst.innerText = "";
              spanlast.innerText = "";
                    }

        })
       })

 } , [])
    return(
       <div className="dashboard" id="wrapper">
         <div className="login-main parallax-window">
          <div className="login-inner">
            <div className="login-block">
                <div className="login-block-heading  login-newblock">
                 <label className="loginlabel">{t("Register As")}</label>
                 <div className="tabhold login-tabholder">
                    <ul className="tab-switch">
                    <li  className="active">
                            <a rel="canonical" style={{color:"white"}}  data-set="user" >{t("user")}</a>
                    </li>

                        <li>
                            <a rel="canonical" data-set="provider" style={{color:"white"}} >{t("Delivery representative")}</a>
                        </li>

                        <li>
                            <a rel="canonical" data-set="resturant" style={{color:"white"}} >{t("Shop")}</a>
                        </li>
                    </ul>
                 </div>
                 <div className="login-right full-width">
                    <div className="login-data-inner">
                        <div className="gen-forms provider active">
                            <form name="frmsignup" id="frmsignupd" className=" clearfix">
                              <div className="partation">
                                <h1>{t("Account Infation")}</h1>
                                <div className="form-group onethird newrow floating ">
                                    <label>{t("EmailId")}
                                    <span className="red">*</span>
                                    </label>
                                    <input className="create-account-input"  />
                                    <span className='regValue'></span>
                                </div>
                                <div className="form-group onethird newrow floating ">
                                    <label>{t("password")}
                                    <span className="red">*</span>
                                    </label>
                                    <input type="password" className="create-account-input password" />
                                    <span className='regValue span1'></span>
                                </div>
                                <div className="form-group onethird newrow floating ">
                                    <label>{t("Referral")}
                                    <span className="red">*</span>
                                    </label>
                                    <input type="text" className="create-account-input"  />
                                   
                                </div>
                              </div>

                              <div className="partation">
                                <h1>{t("Basic Information")}</h1>
                                <div className="form-group onethird newrow floating ">
                                    <label>{t("first name")}
                                    <span className="red">*</span>
                                    </label>
                                    <input type="text" className="create-account-input"  />
                                    <span className='regValue span2'></span>
                                </div>
                                <div className="form-group onethird newrow floating ">
                                    <label>{t("last name")}
                                    <span className="red">*</span>
                                    </label>
                                    <input  className="create-account-input" />
                                    <span className='regValue span3'></span>
                                </div>
                                <div className="form-group onethird newrow floating">
                                    <select className="valid" required name="vCountry">
                                     <option>Select</option>
                                     <option value="EG">مصر</option>
                                    </select>
                                </div>
                                <div className="form-group onethird phone-column newrow floating">
                                <label>{t("phone number")}
                                    <span className="red">*</span>
                                </label>
                                <input value="20" aria-invalid="false"  id="code" className="phonecode" readonly />
                                <input type="text" style={{paddingLeft: 90}} id="vPhone"  aria-required="true" className="create-account-input create-account-input1 vPhone_verify" />
                                </div>
                                <div className="form-group onethird newrow floating">
                                    <select name="vLang" required >
                                     <option value="AR">عربى</option>
                                     <option value="EG">English</option>
                                    </select>
                                </div>
                                <div className="form-group onethird newrow floating ">
                                    <select name="vCurrencyPassenger" aria-describedby="vCurrencyPassenger-error" aria-invalid="false" className="valid" required >
                                     <option value="EGP">EGP</option>
                                    </select>
                                </div>
                                <div style={{width:"100%"}}>
                                <div className="rc-anchor-normal">
                                <div className="checkbox-wrapper">
                                <input id="terms-checkbox-37" name={t("robot")} type="checkbox" />
                                <label className="terms-label" for="terms-checkbox-37">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 200 200" className="checkbox-svg">
                                 <mask fill="white" id="path-1-inside-1_476_5-37">
                                 <rect height="200" width="200"></rect>
                                 </mask>
                                <rect mask="url(#path-1-inside-1_476_5-37)" stroke-width="40" className="checkbox-box" height="200" width="200"></rect>
                                <path stroke-width="15" d="M52 111.018L76.9867 136L149 64" className="checkbox-tick"></path>
                                </svg>
                                <span style={{fontSize:14}} className="label-text">{t("robot")}</span>
                              </label>
                              </div>


                                 <div className="robot">
                                 <div className="rc-anchor-left"> </div>
                                 <div className="rc-anchor-logo-text">reCAPTCHA</div>
                                 <div className="rc-anchor-pt">
                                    <a target="_blank" href="https://www.google.com/intl/en/policies/privacy/">Privacy</a>
                                    <span aria-hidden="true" role="presentation">-</span>
                                    <a target="_blank" href="https://www.google.com/intl/en/policies/terms/">Terms</a>
                                 </div>
                                 </div>
                                </div>
                                </div>

                                <div className="onethird check">
                                <div class="center">
		                            <input name="" type="checkbox" />
                                </div>
                                
                                <label className="agree">
                                <Link to="/condition" className="linkAgree">
                                    {t("Agree to Terms")}
                                    </Link>
                                    </label>
                                
                                </div>

                            <div style={{marginTop:20}} className="button-block">
                            <div className="btn-hold">
                                <input tabindex="3" type="submit" value={t("sign in")} />
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                 </svg>
                            </div>
                
                                </div>
                              </div>
                                  
                        <div className="member-txt hotelhide">
                            {t("Already have")}
                            <Link className='linkbef' to="/login" >{t("Sign in")}</Link>
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
                        <div className="login-left">

                    <div className="login-caption active" id="user">
                      <p><strong>{t("Register as User")}</strong></p>
                      <ul>
                        <li>{t("Provide Name")}</li>
                        <li>{t("Enter the app")}</li>
                        <li>{t("Provide Location")}</li>
                        <li>{t("Select Stores")}</li>
                        <li>{t("Track your")}</li>
                      </ul>
                    </div>

                    <div className="login-caption" id="provider">
                      <p><strong>{t("Register as Delivery")}</strong></p>
                      <ul>
                        <li>{t("Enter details")}</li>
                        <li>{t("Upload")}</li>
                        <li>{t("Select the type")}</li>
                        <li>{t("Receive")}</li>
                      </ul>
                    </div>

                    <div className="login-caption" id="resturant">
                      <p><strong>{t("Register as Store")}</strong></p>
                      <ul>
                        <li>{t("Provide details")}</li>
                        <li>{t("Select the service")}</li>
                        <li>{t("Enter basic")}</li>
                        <li>{t("Make your store")}</li>
                        <li>{t("Start receiving")}</li>
                      </ul>
                    </div>


                </div>
                    </div>
                 </div>
                </div>
            </div>
          </div>
         </div>
       </div>
    )
}
export default NewAccount;