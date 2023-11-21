import { useTranslation } from "react-i18next";
import google from '../images/google-play.png';
import istore from '../images/istore.png'
import './AppFooter.css';
import { Link } from "react-router-dom";
function AppFooter (){
    const {t} = useTranslation();
    return(
        <div className="footer">
        <div className="footer-top container-fluid">
            <div className="footer-inner-top ">
                <div className="footer-column">
                    <h4 style={{marginBottom:20 , paddingTop:50}}>{t("support")}</h4>
                    <ul className="contact-data">
                        <Link to="/help" style={{color:"white"}}>
                       <li style={{marginBottom: 7 , fontWeight: 100 , fontSize: 14}}>
                       <svg style={{marginRight: 12}}  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-circle-fill" viewBox="0 0 16 16">
                       <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"/>
                     </svg>{t("Help Center")}</li>
                     </Link>
                       <li style={{marginBottom: 7 , fontWeight: 100 , fontSize: 14}}>
                       <svg style={{marginRight: 12}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe-asia-australia" viewBox="0 0 16 16">
                       <path d="m10.495 6.92 1.278-.619a.483.483 0 0 0 .126-.782c-.252-.244-.682-.139-.932.107-.23.226-.513.373-.816.53l-.102.054c-.338.178-.264.626.1.736a.476.476 0 0 0 .346-.027ZM7.741 9.808V9.78a.413.413 0 1 1 .783.183l-.22.443a.602.602 0 0 1-.12.167l-.193.185a.36.36 0 1 1-.5-.516l.112-.108a.453.453 0 0 0 .138-.326ZM5.672 12.5l.482.233A.386.386 0 1 0 6.32 12h-.416a.702.702 0 0 1-.419-.139l-.277-.206a.302.302 0 1 0-.298.52l.761.325Z"/>
                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM1.612 10.867l.756-1.288a1 1 0 0 1 1.545-.225l1.074 1.005a.986.986 0 0 0 1.36-.011l.038-.037a.882.882 0 0 0 .26-.755c-.075-.548.37-1.033.92-1.099.728-.086 1.587-.324 1.728-.957.086-.386-.114-.83-.361-1.2-.207-.312 0-.8.374-.8.123 0 .24-.055.318-.15l.393-.474c.196-.237.491-.368.797-.403.554-.064 1.407-.277 1.583-.973.098-.391-.192-.634-.484-.88-.254-.212-.51-.426-.515-.741a6.998 6.998 0 0 1 3.425 7.692 1.015 1.015 0 0 0-.087-.063l-.316-.204a1 1 0 0 0-.977-.06l-.169.082a1 1 0 0 1-.741.051l-1.021-.329A1 1 0 0 0 11.205 9h-.165a1 1 0 0 0-.945.674l-.172.499a1 1 0 0 1-.404.514l-.802.518a1 1 0 0 0-.458.84v.455a1 1 0 0 0 1 1h.257a1 1 0 0 1 .542.16l.762.49a.998.998 0 0 0 .283.126 7.001 7.001 0 0 1-9.49-3.409Z"/>
                       </svg>
                       {t("English")}
                       </li>
                       <li style={{marginBottom: 7 , fontWeight: 100 , fontSize: 14}}>
                       <svg style={{marginRight: 12}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                       <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                       </svg>
                       01101109198 / 01101299297
                       </li>
                       <li style={{marginBottom: 7 , fontWeight: 100 , fontSize: 14}}>
                       <svg style={{marginRight: 12}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                       <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                       </svg>
                       info@talabatak.app
                       </li>
                       <li style={{marginBottom: 7 , fontWeight: 100 , fontSize: 14}}>
                        
                       <svg style={{marginRight: 12}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                       <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                       </svg>
                       ش الشاوربي، عمارة الصاوي، الدور الثاني - أسوان
                       </li>
                    </ul>
                    <div className="download-links">
                <a style={{marginRight: 20}} href="https://play.google.com/store/apps/details?id=app.talabatak.customer" target="_blank"><img src={google} /></a>
                <a href="https://apps.apple.com/us/app/%D8%AA%D8%B7%D8%A8%D9%8A%D9%82-%D8%B7%D9%84%D8%A8%D8%A7%D8%AA%D9%83/id1522427283" target="_blank"><img src={istore} /></a>
             </div>
                </div>
                <div className="footer-column">
                    <h4 style={{marginBottom:20 , paddingTop:50}}> {t("Sign up")}</h4>
                    <ul>
                        <Link style={{color:"white"}} to='/profile'><li style={{marginBottom: 7 , fontWeight: 100 , fontSize: 14}}>{t("Become A User")}</li></Link>
                        <Link style={{color:"white"}} to='/profile'><li style={{marginBottom: 7 , fontWeight: 100 , fontSize: 14}}>{t("Become a Driver")}</li></Link>
                        <Link style={{color:"white"}} to='/profile'><li style={{marginBottom: 7 , fontWeight: 100 , fontSize: 14}}>{t("Become A Stor")}</li></Link>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4 style={{marginBottom:20 , paddingTop:50}}>{t("Quick Links")}</h4>
                    <ul>
                        <Link style={{color:"white"}} to='/aboutus'><li style={{marginBottom: 7 , fontWeight: 100 , fontSize: 14}}>{t("About Us")}</li></Link>
                        <Link style={{color:"white"}} to='/how-work'><li style={{marginBottom: 7 , fontWeight: 100 , fontSize: 14}}>{t("How It Works")}</li></Link>
                        <Link style={{color:"white"}} to='/contact'><li style={{marginBottom: 7 , fontWeight: 100 , fontSize: 14}}>{t("Contact Us")}</li></Link>
                        <Link to='/aswan-res' style={{color:"white"}}><li style={{marginBottom: 7 , fontWeight: 100 , fontSize: 14}}>{t("Aswan restaurants")}</li></Link>
                        <Link style={{color:"white"}} to='/instraction'><li style={{marginBottom: 7 , fontWeight: 100 , fontSize: 14}}>{t("Faq")}</li></Link>
                        
                    </ul>
                </div>
            </div>
            <hr style={{marginTop:50}} />
        </div>
        <div className="footer-bottom">
            <div className="footer-inner container-fluid">
                <p style={{textAlign:"center"}}>© Copyright 2023 @Talabatak</p>
                <ul className="quicklinks" >
                    <Link style={{color:"white"}} to='/privacy-policy'><li className="privacy">{t("Privacy Policy")}</li></Link>
                    <Link style={{color:"white"}} to='/condition'><li>{t("Terms & Conditions")}</li></Link>
                </ul>
                <ul style={{display:"flex" , justifyContent:"center" , marginBottom:"-10px"}}>
                    <li className="listLink">
                        <a className="footLink" target="_blank" href="https://www.facebook.com/talabatakapp">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                         </svg>
                        </a>
                    </li>
                    <li className="listLink">
                    <a className="footLink" target="_blank" href="https://twitter.com/i/flow/login?redirect_after_login=%2FTalabatakApp">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                        </a>
                    </li>
                    <li className="listLink">
                    <a className="footLink" target="_blank" href="https://www.linkedin.com/in/talabatak-app-58ba761ab/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                     <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                        </a>
                    </li>
                    <li className="listLink">
                    <a className="footLink" target="_blank" href="https://www.talabatak.app/index.php">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                     <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                     </svg>
                        </a>
                    </li>
                    <li className="listLink">
                    <a className="footLink" target="_blank" href="https://www.instagram.com/talabatakapp/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                     <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                      </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    )
}
export default AppFooter;