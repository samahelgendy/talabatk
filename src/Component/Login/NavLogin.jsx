import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from '../images/logo.png';
import './NavLogin.css';

function NavLogin(){
    const {t , i18n} = useTranslation();

    const close = () =>{
        const overlay = document.querySelector(".overlay");
        overlay.classList.remove("active");
      }
    return(
        <>
        <div className="overlay">
        <div className="container-fluid translate" >
            <div style={{display:"flex" , justifyContent:"space-between" , paddingTop:30}}>
                <h4>{t("select")}</h4>
                <div className="close" onClick={close} >
                <svg  style={{width: "30px" , height:"30px" , cursor:"pointer"}} xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
               <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
               </svg>
               </div>
            </div>
            <hr style={{opacity:1}} />
            <div  style={{marginBottom:"20px" , transition:"0.5s"}}>
                <button onClick ={() =>{
                    i18n.changeLanguage('ar');
                    }} className="arabic" style={{ border: "none" , padding: "8px 80px 8px 0", backgroundColor: "white" , transition:"0.5s"}} >عربى </button >
            </div>
            <div  >
                <button onClick ={() =>{
                    i18n.changeLanguage('en');
                    }} className="english" style={{ border: "none" , padding: "8px 80px 8px 0", backgroundColor: "white" , transition:"0.5s"}}>English</button >
            </div>
        </div>
        </div>
        <div style={{height:"66px" , width:"100vw" , boxShadow: "4px 4px 4px #80808070",position:"fixed" , width:"100vw" , zIndex:10 , backgroundColor:"white"}}>
       <div className='container-fluid' style={{height:"100%"}}>
       <div style={{display:"flex" , justifyContent:"space-between" , alignItems:"center" , height: "100%"}}>

       <div style={{display:"flex"}}>
       <Link to="/newAccount">
          <div className="NavSess" style={{display:"flex" , marginLeft:"15px" , cursor:"pointer", position:"relative" , transition:"0.5s"}}>
        <h6  className="showText">{t("new acount")}</h6>
        <svg  style={{marginLeft: "5px",height:"20px",width:"20px" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill showIcon" viewBox="0 0 16 16">
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
        </svg>
          </div>
          </Link>
          <Link to="/login">
          <div className="NavSess" style={{display:"flex" , marginLeft:"15px" , cursor:"pointer", position:"relative" , transition:"0.5s"}}>
        <h6 className="showText">{t("sign in")}</h6>
        <svg style={{marginLeft: "5px",height:"20px",width:"30px"}} fill="currentColor" className="bi bi-key-fill showIcon" viewBox="0 0 16 16">
        <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
      </svg>
          </div>
          </Link>
          <div className="NavSess" onClick={()=>{document.querySelector('.overlay').classList.add('active')}} style={{display:"flex" , marginLeft:"20px" , cursor:"pointer", position:"relative" , transition:"0.5s"}}>
        <h6 className="showText">{t("language")}</h6>
        <svg style={{marginLeft: "5px",height:"20px",width:"30px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16">
        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
        </svg>
          </div>

        </div>
      <div className="listLogin">
        <ul  style={{display:"flex" , flexDirection:"row-reverse"}}>
            <Link to="/" className="navLogin">
            <li style={{marginLeft:20}}>{t("home")}</li>
            </Link>
            <Link to="/aboutus" className="navLogin">
            <li style={{marginLeft:20}}>{t("About Us")}</li>
            </Link>
            <Link to="/contact" className="navLogin">
            <li >{t("Contact Us")}</li>
            </Link>
        </ul>
      </div>
      <div style={{display:"flex" , marginRight:30}}>
        <Link to="/" style={{width:"100px"}}>
            <img src={logo} style={{width:"100%"}} />
         </Link>
      </div> 

       </div>
      </div>
      </div>
      </>
    )
}
export default NavLogin;