import { Fragment } from "react";
import styles from "./register.module.css";
import { Login } from "../../organisms/login/login";
import {CreateAccOfTwitter} from "../../organisms/CreateAcc/createAccount"


export function SignInUp() {
   return (
      <Fragment>
         <div className={styles.mainbox}>

     
           <CreateAccOfTwitter/>
            {/* min-width : 280px 
            widith : 280px
               height : 90%  */}

            {/* <div className={styles.login}>

            </div> */}







         </div>


      </Fragment>

   )

}