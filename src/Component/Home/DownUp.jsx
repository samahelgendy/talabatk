import './AppFooter.css';
import {useEffect} from 'react'
function DownUp (){
    useEffect(() =>{
        const btn = document.querySelector(".btn")

        window.addEventListener('scroll' , ()=>{
            if(window.scrollY >= 600){
            btn.style.display="block";
             } else {
          btn.style.display="none";
            }
        });
        btn.onclick=function(){
            window.scrollTo({
                left:0,
                top:0,
                behavior:"smooth"
            })
        };
        
    } , [])
    return(
        <button class="btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
             </svg>
            </button>
    )
}
export default DownUp;