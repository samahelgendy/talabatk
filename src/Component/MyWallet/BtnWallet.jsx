import { useTranslation } from "react-i18next";
import './BtnWallet.css'
import { useEffect } from "react";
function BtnWallet (){
    const {t} = useTranslation();
    const overLay = document.querySelector(".over");

    const close = () =>{
      overLay.style.display='none'
    }
    const open = () =>{
      overLay.style.display='block'
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
    } ,[])
    return(
        <>
        <div className="over">
        <div className="form-content">
         <div className="topwallet">
          <div className="withdraw" >
          <span>{t("Withdraw Request")}</span>
          <svg onClick={close} style={{cursor:"pointer"}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
          </div>
          <div className="withdrawBot">
          <div class="form-group ">           
            <label className="hotelhide">{t("Account Holder Name")}</label>
            <input type="text" name="vEmail"/>
            </div>
            <div class="form-group ">           
            <label className="hotelhide">{t("Name Of Bank")}</label>
            <input type="text" name="vEmail"/>
            </div>
            <div class="form-group ">           
            <label className="hotelhide">{t("Account Number")}</label>
            <input type="text" name="vEmail"/>
            </div>
            <div class="form-group ">           
            <label className="hotelhide">{t("BIC/SWIFT Code")}</label>
            <input type="text" name="vEmail"/>
            </div>
            <div class="form-group ">           
            <label className="hotelhide">{t("Bank Location")}</label>
            <input type="text" name="vEmail"/>
            </div>
            <div class="form-group ">           
            <label className="hotelhide">{t("Enter Amount")}</label>
            <input type="text" name="vEmail"/>
            </div>
            <div style={{display:"flex" , justifyContent:"center" , paddingBottom:30}}>

        <div className="btn-hold" style={{marginRight:20}}>
        <button style={{padding: "10px 30px"}} className="driver-trip-btn">{t("send")}</button>
        </div>

        <div className="btn-hold">
        <button onClick={close} style={{padding: "10px 30px"}} className="driver-trip-btn">{t("cansel")}</button>
        </div>
      </div>

          </div>
         </div>
        </div>
        </div>
        <div className="dashboard ">
        <div className="button-block wallet" onClick={open}>
        <div className="btn-hold">
        <button className="driver-trip-btn">{t("Withdraw Request")}</button>
        </div>
      </div>
      </div>
      </>
    )
}
export default BtnWallet;