import { Fragment } from "react"
import styles from "./leftSideBar.module.css";
import logo from "../../../../image/logo/logo.png"
import {ImHome} from "react-icons/im"
import {BiHash} from "react-icons/bi"
import {GrNotification} from "react-icons/gr"
import {BiEnvelope} from "react-icons/bi"
import {RiFileListLine} from "react-icons/ri"
import {BiBookmark} from "react-icons/bi"
import {CgProfile} from "react-icons/cg"
import {CiCircleMore} from "react-icons/ci"

export function LeftSideBar(){
    return (
        <Fragment>
            <div className={styles.leftSideBarbox}>
              <img src={logo} className={styles.twitterLogo} alt="Loading"/>
              <button class={styles.button}> <p><ImHome class={styles.logo}/> Home  </p> </button>
              <button class={styles.button}> <p><BiHash class={styles.logo}/> Explore  </p> </button>
              <button class={styles.button}> <p><GrNotification class={styles.logo}/> Notification  </p> </button>
              <button class={styles.button}> <p><BiEnvelope class={styles.logo}/> Messages  </p> </button>
              <button class={styles.button}> <p><RiFileListLine class={styles.logo}/> List  </p> </button>
              <button class={styles.button}> <p><BiBookmark class={styles.logo}/> Bookmark  </p> </button>
              <button class={styles.button}> <p><CgProfile class={styles.logo}/> Profile  </p> </button>
              <button class={styles.button}> <p><CiCircleMore class={styles.logo}/> More  </p> </button>

           
              <button class={styles.tweet}>Tweet</button>
              <div class={styles.profile}>
                 <img class={styles.imge} src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=360&t=st=1685463036~exp=1685463636~hmac=2d5357a2e8f08296abd57f7778b113ef2de9e19b5f273c64e99cc0334cab2ba3" alt="avater"/> 
                 <p> <h3>Tony Stark</h3>  @tony stark </p> 
              </div>
            </div>
            
        </Fragment>

    )
}