import { Fragment } from "react";
import {HeroSection} from "../../templates/herosection/heroSection.js"
import styles from "./home.module.css"
export function Home(){

    return(
        <Fragment>
            <div className={styles.homebox}>
                
              <HeroSection/>
            </div>
         
        </Fragment>
        
    )
}