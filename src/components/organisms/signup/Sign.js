import React from 'react'
import { Fragment } from 'react';
import { FaTwitter } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { AiFillApple } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import styles from './Sign.module.css';
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
export const Sign = () => {
  const navigateOnSignUp=useNavigate();
  return (

    <Fragment>
      <div className={styles.signsignbox}>

        <div className={styles.main}>
          <RxCross2 onClick={()=>{navigateOnSignUp("/dummyHome")}} className={styles.crossbtn} />

          <div className={styles.firsthead}>
            <FaTwitter className={styles.logo} style={{ color: "rgb(27, 169, 225)" }} />
            <h2>
              Join Twitter from today
            </h2>
            <p className={`${styles.Onelogo} ${styles.nocursor}`} > <FcGoogle /> SignUp with Google</p>
            <p className={`${styles.Onelogo} ${styles.nocursor}`} > < AiFillApple /> SignUp with Apple</p>
            ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯Or⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

            <Link to="/createaccount" className={styles.Onelogo}>Create account</Link>

          </div>
          <div className={styles.info}>
            <h5 className={styles.haedh5} >
              BySigning up are agree to <span> Terms of Services</span>
              and<span className={styles.specialtext}>Privacy</span><span className={styles.specialtext}>including</span> <span className={styles.specialtext}>Cookie Use</span>
            </h5>
          </div>
          <h5>
            Have an account  already ? <Link className={styles.loginredirect} to={"/"}>Login</Link>

          </h5>
        </div>
      </div>
    </Fragment>
  )
}

