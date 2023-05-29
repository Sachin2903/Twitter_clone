import { Fragment } from "react";
import styles from "./register.module.css";
import { Login } from "../../organisms/login/login";

export function SignInUp(){
   return (
      <Fragment>
         <div className={styles.mainbox}>

          <Login/>


            {/* <div className={styles.login}>

         
              



            </div> */}
            




          </div>


      </Fragment>

   )

}