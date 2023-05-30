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
              <button className={styles.button}> <p><ImHome className={styles.logo}/> Home  </p> </button>
              <button className={styles.button}> <p><BiHash className={styles.logo}/> Explore  </p> </button>
              <button className={styles.button}> <p><GrNotification className={styles.logo}/> Notification  </p> </button>
              <button className={styles.button}> <p><BiEnvelope className={styles.logo}/> Messages  </p> </button>
              <button className={styles.button}> <p><RiFileListLine className={styles.logo}/> List  </p> </button>
              <button className={styles.button}> <p><BiBookmark className={styles.logo}/> Bookmark  </p> </button>
              <button className={styles.button}> <p><CgProfile className={styles.logo}/> Profile  </p> </button>
              <button className={styles.button}> <p><CiCircleMore className={styles.logo}/> More  </p> </button>

           
              <button className={styles.tweet}>Tweet</button>
              <div className={styles.profile}>
                 <img className={styles.imge} src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=360&t=st=1685463036~exp=1685463636~hmac=2d5357a2e8f08296abd57f7778b113ef2de9e19b5f273c64e99cc0334cab2ba3" alt="avater"/> 
                 <div> <h3>Tony Stark</h3>  @tony stark </div> 
              </div>
            </div>
            
        </Fragment>

    )
}