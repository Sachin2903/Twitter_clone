import React from 'react'
import { Fragment } from 'react';
import { FaTwitter } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { AiFillApple } from 'react-icons/ai'

import styles from './Sign.module.css'

const Sign = () => {
  return (

    <Fragment>
      <div className={styles.main}>
        
        <div className={styles.firsthead}>
          <FaTwitter className={styles.logo} style={{color:"rgb(27, 169, 225)"}} />
          <h2>
            Join Twitter from today
          </h2>
          <p className={styles.Onelogo}> <FcGoogle /> SignUp with Google</p>
          <p className={styles.Onelogo}> < AiFillApple /> SignUp with Apple</p>
          ----------------or----------------
          <p className={styles.Onelogo}>
            create account
          </p>
        </div> 
          <div className={styles.info}>
          <h5>
            BySigning up are agree to <span> Terms of Services</span>
            and<span>Privacy</span><span>including</span> <span>Cookie Use</span>
          </h5>
          </div>
          <h5>
            Have an account  already ? <span>Login</span>

          </h5>
        </div>
    </Fragment>
  )
}

export default Sign