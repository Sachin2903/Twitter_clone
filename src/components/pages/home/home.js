import { Fragment ,useRef,useLayoutEffect} from "react";
import logoForHome from "../../../image/logo/logo.png";
import {HeroSection} from "../../templates/herosection/heroSection.js"
import styles from "./home.module.css"
export function Home(){
    const loadingScreenOnHome=useRef("");

    useLayoutEffect(()=>{
        loadingScreenOnHome.current.style.display="block";
         let idhomeloader=setTimeout(()=>{
            loadingScreenOnHome.current.style.display="none";
  
         },2000)
      return ()=>{
        clearTimeout(idhomeloader);
      }
  
     },[])



    return(
        <Fragment>
            <div className={styles.homebox}>
                
              <HeroSection/>
            </div>

            
           <div ref={loadingScreenOnHome} className={styles.homeloading}>
            <img alt="loading.." className={styles.twitterlogoForHome} src={logoForHome}/>

           </div>
                
         
        </Fragment>
        
    )
}