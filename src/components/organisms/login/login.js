import { Fragment } from "react";
import styles from "./login.module.css";
import { BsTwitter } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc"
import { BsApple } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import { useRef } from "react";
export function Login() {
    const inputbox = useRef("");
    const inputboxalert = useRef("");

    
        const userDetailsToMatch=localStorage.getItem("userDetail");
        
   


    function checkLoginField() {
        if (inputbox.current.value.trim().length <= 0) {
            inputboxalert.current.style.display = "block";
            setInterval(() => {
                inputboxalert.current.style.display = "none";
            }, 4000)

        }else{
           
        }


    }

    return (
        <Fragment>

            <div className={styles.loginbox}>
                <p ref={inputboxalert} className={styles.alertbox}>Sorry, we could not find your account.</p>
                <RxCross2 className={styles.crossbtn} />
                <BsTwitter className={styles.logotwitter} />
                <h2 className={styles.headtext}>Sign in to Twitter</h2>
                <button className={styles.btngoogle}><FcGoogle /> Sign in with Google</button>
                <button className={styles.btnapple}><BsApple /> Sign in with Apple</button>
                <p className={styles.ortext}> or </p>

                <TextField
                    inputRef={inputbox}

                    sx={{ width: "50%", margin: "20px 0px" }}
                    label="Phone, email, or username "
                    multiline


                />


                <button onClick={checkLoginField} className={styles.btnnext}>Next</button>
                <button className={styles.btnapple}>Forgot password?</button>
                <p className={styles.headtext}>Don't have an account?<span style={{ color: "rgb(27, 169, 225)", cursor: "pointer" }}>
                    <Link className={styles.signuptext} to="/signuppage">Sign up</Link></span></p>
            </div>

        </Fragment>
    )
}