import { Fragment } from "react";
import styles from "./dummyHome.module.css";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import {FaSearch} from "react-icons/fa"
import {FiSettings} from "react-icons/fi";
import dummylogo from "../../../image/logo/logo.png";
export function DummyHome() {
    return (
        <Fragment>
            <div className={styles.topbox}>
                <div className={styles.dummyLeftSidediv}>
                <img className={styles.dumlogo} alt="loading" src={dummylogo}/>
                   <div className={styles.dummylogoicons}>
                   <FaSearch/>
                   <FiSettings/>
                   </div>



                </div>
                <div className={styles.dummymidSidediv}>
                    <p className={styles.exploreDumtext}>Explore</p>
                    <FiSettings/>

                </div>
                <div className={styles.dummyRightSidediv}>
                    <p className={styles.newtoptext}>New to Twitter?</p>
                    <p>Sign up now to get your own personalized timeline!</p>

                    <button className={styles.btnGoogleApple}><FcGoogle /> Sign up with Google</button>
                    <button className={styles.btnGoogleApple}><BsApple /> Sign up with Apple</button>
                    <p className={styles.leftdumtext}>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
                    <p className={styles.leftdumtext}>Terms of Service Privacy Policy Cookie Policy Accessibility Ads info More © 2023 X Corp.</p>
                </div>
            </div>
            <div className={styles.bottombox}>
                <div><h2 className={styles.bottomtextdummy}>Don't miss what's happening</h2>
                    <p className={styles.bottomtextdummy}>People on Twitter are the first to know</p>
                </div>
                <div>
                    <button className={styles.dummybtnlogin}>Login</button>
                    <button className={styles.dummybtnsignup}>Sign up</button>

                </div>


            </div>




        </Fragment>

    )

} 