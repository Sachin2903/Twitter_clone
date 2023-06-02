import { Fragment ,useLayoutEffect,useRef} from "react";
import styles from "./register.module.css";
 import {Login} from "../../organisms/login/login";
 import logo from "../../../image/logo/logo.png"

export function SignInUp(){
   const loaderingscreen=useRef("");

   useLayoutEffect(()=>{
      loaderingscreen.current.style.display="block";
       let idmainloader=setTimeout(()=>{
         loaderingscreen.current.style.display="none";

       },2000)
    return ()=>{
      clearTimeout(idmainloader);
    }

   },[])



   return (
      <Fragment>
        
           <div ref={loaderingscreen} className={styles.mainloading}>
            <img alt="loading.." className={styles.twitterlogo} src={logo}/>

           </div>
           <div className={styles.mainbox}>
        <Login/>
       
          </div>

      </Fragment>

   )

}