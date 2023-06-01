import { Fragment } from "react";
import styles from "./login.module.css";
import { BsTwitter } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc"
import { BsApple } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import { useRef } from "react";

import { useNavigate } from "react-router-dom";

export function Login() {
    const navigate=useNavigate();
    const navigateToHomeFromlogin = useNavigate();
    const inputbox = useRef("");
    const inputboxalert = useRef("");

    let userDataFromLocal = JSON.parse(localStorage.getItem("userData"));
   


    function checkLoginField() {
        if (inputbox.current.value.trim().length <= 0) {
            inputboxalert.current.style.display = "block";
            setTimeout(() => {
                inputboxalert.current.style.display = "none";
            }, 4000)

        } else {
               let checkInput=(inputbox.current.value.trim()).toLowerCase();
              
               let test=userDataFromLocal.find((e)=>{
                if(e.Name.toLowerCase()===checkInput||e.Phone.toLowerCase()===checkInput||e.Email.toLowerCase()===checkInput){
                    return true;
                }
                return false;
               
               })
              


            if (test) {

                navigateToHomeFromlogin("/home")
            }else{
                inputboxalert.current.style.display = "block";
                setTimeout(() => {
                    inputboxalert.current.style.display = "none";
                }, 2000)
            }


        }


    }

    return (
        <Fragment>

            <div className={styles.loginbox}>

                <RxCross2 onClick={()=>{navigate("/dummyHome")}} className={styles.crossbtn} />
                <BsTwitter className={styles.logotwitter} />
                <h2 className={styles.headtext}>Sign in to Twitter</h2>
                <button className={styles.btngoogle}><FcGoogle /> Sign in with Google</button>
                <button className={styles.btnapple}><BsApple /> Sign in with Apple</button>
                <p className={styles.ortext}> Or </p>

                <TextField
                    inputRef={inputbox}
                    
                    sx={{ width: "50%", margin: "20px 0px"  }}
                    label="Phone, email, or username "
                    multiline


                />


                <button onClick={checkLoginField} className={styles.btnnext}>Next</button>
                <button className={styles.btnapple}>Forgot password?</button>
                <p className={styles.headtext}>Don't have an account?<span ref={inputboxalert} className={styles.alertbox}>Sorry, we could not find your account.</span>
                    <span style={{ color: "rgb(27, 169, 225)", cursor: "pointer" }}>
                        <Link className={styles.signuptext} to="/signuppage">Sign up</Link></span></p>

            </div>

        </Fragment>
    )
}