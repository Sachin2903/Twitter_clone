import { Fragment,useLayoutEffect,useRef } from "react";
import styles from "./page404.module.css"
import twitterLogoFor404 from "../../../image/logo/logo.png"

export function Page404(){
    const loaderFor404=useRef("");

    useLayoutEffect(()=>{
        loaderFor404.current.style.display="block";
         let id404loader=setTimeout(()=>{
            loaderFor404.current.style.display="none";
  
         },2000)
      return ()=>{
        clearTimeout(id404loader);
      }
  
     },[])



    return (
        <Fragment>
           <div ref={loaderFor404} className={styles.errorLoader}>
            <img alt="loading.." className={styles.twitterLogoError} src={twitterLogoFor404}/>

           </div>

           
            <div>
               kam yaha karna h

            </div>
        </Fragment>
    )

}