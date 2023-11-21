import { useTranslation } from "react-i18next";
import './Contact.css'
import { useEffect } from "react";
function Contact (){
    const {t} = useTranslation();
    useEffect(() =>{
        const forms = document.querySelectorAll(".form-group");
        const formInputs = document.querySelectorAll(".form-group input");

      formInputs.forEach((input) =>{
           input.addEventListener('focus' , ()=>{
           forms.forEach((form)=>{
               form.classList.add("floating");
           })

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
    } , [])
    return(
     <div className="about-main">
            <div className="about-main">
            <div className="heading-area">
             <div className="heading-area-inner">
                <h1>{t("Contact")}</h1>
             </div>
            </div>

            <div className="main-page-wrap">
                <div className="contact-section">
                <div className="contact-inner">
                    <div className="contact-left">
                        <h1>{t("Get in Touch")}</h1>
                        <p>{t("You can submit")}</p>
                        <p>{t("Welcome to Talabatak")}</p>
                        <form name="frmsignup" method="get" className="contact-form" novalidate="novalidate">
                          <div className="partation">
                           <div className="form-group half newrow form1">
                            <label>{t("first name")}</label>
                            <input type="text" />
                           </div>

                           <div className="form-group half newrow">
                            <label>{t("last name")}</label>
                            <input type="text" />
                           </div>

                           <div className="form-group half newrow">
                            <label>{t("EmailId")}</label>
                            <input type="email" />
                           </div>

                           <div className="form-group half newrow">
                            <label>{t("phone number")}</label>
                            <input type="tel" />
                           </div>

                           <div className="form-group newrow write">
                            <label>{t("write here")}</label>
                            <input type="text" />
                           </div>
                           <div class="form-group textarea newrow">
                              <textarea cols="61" rows="5"></textarea>
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

                            <div style={{marginTop:20}} className="button-block">
                            <div className="btn-hold">
                                <input tabindex="3" type="submit" value={t("submit")} />
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                 </svg>
                            </div>
                
                                </div>
                          </div>
                        </form>
                    </div>

                    <div className="contact-right">
                        <div className="cont-det-block">
                            <strong>{t("Address")}</strong>
                            <address>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                           </svg>
                           ش الشاوربي، عمارة الصاوي، الدور الثاني - أسوان
                            </address>
                        </div>

                        <div className="cont-det-block">
                            <strong>{t("Phone & Email")}</strong>
                            <ul>
                           <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                            <a target="_blank" href="tel:+01101109198 / 01101299297">01101109198 / 01101299297</a>
                           </li>

                           <li>
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                           </svg>
                            <a target="_blank" href="mailto:info@talabatak.app">info@talabatak.app</a>
                           </li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
     </div>

    )
}
export default Contact;