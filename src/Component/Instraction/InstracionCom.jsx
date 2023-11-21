import { useTranslation } from "react-i18next";
import './Instraction.css';
import { useEffect } from "react";
function InstracionCom (){
    const {t} = useTranslation();
    useEffect(()=>{
        const lists = document.querySelectorAll(".faq-top-part ul li");
        const bottomPart = document.querySelectorAll(".faq-bottom-part");

        lists.forEach((list)=>{
            list.addEventListener('click' , (e)=>{
                const listValue = e.target.dataset.set;
                bottomPart.forEach((part)=>{
                    const capValue =  part.getAttribute("id");
                    if(listValue !== capValue){   
                        part.classList.remove("active");     
                        
                     }else{
                        part.classList.add("active")
                     }
                })
              lists.forEach((list)=>{
                list.classList.remove("Active")
              })
              list.classList.add("Active");
            })
        });
        const headers = document.querySelectorAll(".faq-bottom-part ul li a");
        const faqAns = document.querySelectorAll(".faq-ans");
          console.log(faqAns)
        headers.forEach((header)=>{
            header.addEventListener('click' , ()=>{
                faqAns.forEach((faq)=>{
                    faq.classList.toggle("active");
                })
            })
        })

    },[])
    return(
        <div >
          <div className="gen-cms-page">
           <div className="gen-cms-page-inner">
             <h1 className="header-page">{t("Faq")}</h1>
             <div className="faq-page">
                <div className="faq-top-part">
                    <ul>
                        <li className="Active"><a data-set="general">{t("general")}</a></li>
                        <li ><a data-set="FEEDBACK">{t("FEEDBACK")}</a></li>
                    </ul>
                </div>
                <div className="faq-bottom-part active" id="general">
                    <ul>
                        <li class="has-sub">
                            <a>
                            <span>
                                <b>Q.</b>
                                <h3>{t("Can I order")}</h3>
                            </span>
                            <span></span>
                            </a>
                                <ul className="faq-ans">
                                    <li>
                                        <span>{t("Currently")}</span>
                                    </li>
                                </ul>
                        </li>
                        <li class="has-sub">
                            <a>
                            <span>
                                <b>Q.</b>
                                <h3>{t("How do I download")}</h3>
                            </span>
                            <span></span>
                            </a>
                                <ul className="faq-ans">
                                    <li>
                                        <span>{t("The application is supported")}</span>
                                    </li>
                                </ul>
                        </li>

                        <li class="has-sub">
                            <a>
                            <span>
                                <b>Q.</b>
                                <h3>{t("How much is the delivery")}</h3>
                            </span>
                            <span></span>
                            </a>
                                <ul className="faq-ans">
                                    <li>
                                        <span>{t("Delivery fees vary")}</span>
                                    </li>
                                </ul>
                        </li>
 
                    </ul>
                </div>
                <div className="faq-bottom-part" id="FEEDBACK">
                    <ul>
                        <li class="has-sub">
                            <a>
                            <span>
                                <b>Q.</b>
                                <h3>{t("How much is the delivery")}</h3>
                            </span>
                            <span></span>
                            </a>
                                <ul className="faq-ans">
                                    <li>
                                        <span>{t("Delivery fees vary")}</span>
                                    </li>
                                </ul>
                        </li>
                    </ul>
                </div>
             </div>
           </div>
          </div>
        </div>
    )
}
export default InstracionCom;