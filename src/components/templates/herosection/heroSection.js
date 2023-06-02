import { Fragment,useEffect } from "react";
import styles from "./heroSection.module.css"

import {RightSideBar} from "../../organisms/main/rightSideBar/rightSideBar.js"
import {MidSideBar} from "../../organisms/main/midSideBar/midSideBar.js"
import {LeftSideBar} from "../../organisms/main/leftSideBar/leftSideBar"
import { useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";


export function HeroSection(){
  const navigateToLogin=useNavigate();

    const chekhome=useSelector((state,action)=>{
        return state.checkBox
    })


    useEffect(()=>{
   
        if(chekhome){
         navigateToLogin("/");
     
        }
     
        })

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