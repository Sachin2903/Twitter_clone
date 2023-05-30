import { Fragment } from "react";
import styles from "./heroSection.module.css"

import {RightSideBar} from "../../organisms/main/rightSideBar/rightSideBar.js"
import {MidSideBar} from "../../organisms/main/midSideBar/midSideBar.js"
import {LeftSideBar} from "../../organisms/main/leftSideBar/leftSideBar"

export function HeroSection(){
    return (
        <Fragment>
            <div className={styles.herosectionbox}>
            <LeftSideBar/>
                
                <MidSideBar/>
                <RightSideBar/>
                
 
            </div>

        </Fragment>
    )
}