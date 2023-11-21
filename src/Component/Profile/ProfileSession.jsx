import { useTranslation } from 'react-i18next';
import './ProfileSession.css';
import User from '../images/profile-user-img.gif'
import { useEffect } from 'react';
function ProfileSession (){
    const {t} = useTranslation();
    const form = document.querySelector(".profile_edit")
    const Show = ()=>{
     form.style.display ="block";
    }
    const cancel = ()=>{
      form.style.display ="none";
     }

     const save = document.querySelector(".btn-hold.btn_1");
     const savebtn = ()=>{
      console.log("samah")
     }
    useEffect(()=>{
  
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
    <div className="profile-section">
     <div className="profile-section-inner">
     <div className="profile-caption">
      <div className="page-heading">
       <h1>{t("My Profile")}</h1>
      </div>
      <div style={{width: "100%" , margin:"10px 0 30px 0"}}></div>
      <div className="profile-image">
        <img src={User} />
        <a data-toggle="modal" data-target="#uiModal_4">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
        </svg>
        </a>
      </div>
      <div className="profile-block">
        <div className="profile-caption-header">
         <label>أهلا و سهلا, samah mahmoud</label>
         <button className="profile_edit_btn" onClick={Show}>{t("Edit Profile")}</button>
        </div>
        <div className="profile-detail">
            <div className="profile-column">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
            </svg>
            <div className="data_info">
            <strong>{t("EmailId")}</strong>
            <span>samahelgendy131999@gmail.com</span>
            </div>

            </div>
            <div className="profile-column">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-forward" viewBox="0 0 16 16">
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.762.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z"/>
            </svg>
            <div className="data_info">
            <strong>{t("phone number")}</strong>
            <span>(+20) 1097226321</span>
            </div>
            </div>
            <div className="profile-column">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
           <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
           <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
           </svg>
            <div className="data_info">
            <strong>{t("Country")}</strong>
            <span>مصر</span>
            </div>
            </div>
            <div className="profile-column">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-up" viewBox="0 0 16 16">
            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.354-5.854 1.5 1.5a.5.5 0 0 1-.708.708L13 11.707V14.5a.5.5 0 0 1-1 0v-2.793l-.646.647a.5.5 0 0 1-.708-.708l1.5-1.5a.5.5 0 0 1 .708 0ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
            <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"/>
           </svg>
            <div className="data_info">
            <strong>{t("Referral Code")}</strong>
            <span>prxcnka0863</span>
            </div>
            </div>
        </div>
      </div>
     </div>
     <form className="general-form profile_edit" id="frm1" novalidate="novalidate">
     <div className="partation">

     <div className="form-group half newrow">
        <label>{t("EmailId")}</label>
        <input className="create-account-input"  />
        </div>

        <div className="form-group half phone-column newrow">
          <label>{t("phone number")}</label>
          <select>
            <option value="20">+20</option>
          </select>
        <input type="password" className="create-account-input password" />
        </div>

        <div className="form-group half newrow">
        <label>{t("first name")}</label>
        <input className="create-account-input"  />
        </div>

        <div className="form-group half newrow">
        <label>{t("last name")}</label>
        <input className="create-account-input"  />
        </div>

        <div className="form-group half newrow sele">
          <select className="valid" required >
            <option>Select</option>
            <option value="EG">مصر</option>
          </select>
        </div>

        <div className="form-group half newrow sele">
          <select name="vLang" required >
          <option value="AR">عربى</option>
          <option value="EG">English</option>
        </select>
       </div>

       <div className="form-group half newrow">
        <label>{t("currentpass")}</label>
        <input className="create-account-input"  />
        </div>

        <div className="form-group half newrow">
        <label>{t("New Password")}</label>
        <input className="create-account-input"  />
        </div>

        <div className="form-group half newrow">
        <label>{t("confirmpass")}</label>
        <input className="create-account-input"  />
        </div>

        <div style={{marginTop:20}} className="button-block formcan">
          <div className="btn-hold btn_1" onClick={savebtn} >
          <input className='gen-btn' tabindex="3" type="button" value={t("Save")}  />
          </div> 
          <div className="btn-hold" onClick={cancel}>
          <input className='gen-btn' type="button" value={t("Cancel")}  />
          </div>    
          </div>

        </div>                         
                               
     </form>
     </div>
    </div>
    )
}
export default ProfileSession;