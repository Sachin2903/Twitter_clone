import { Fragment } from "react"
import styles from "./leftSideBar.module.css";
import logo from "../../../../image/logo/logo.png"
import { ImHome } from "react-icons/im"
import { BiHash } from "react-icons/bi"
import { GrNotification } from "react-icons/gr"
import { BiEnvelope } from "react-icons/bi"
import { RiFileListLine } from "react-icons/ri"
import { BiBookmark } from "react-icons/bi"
import { CgProfile } from "react-icons/cg"
import { CiCircleMore } from "react-icons/ci"
import logo123 from "../../../../image/logo/836-removebg-preview.png"
import { Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useState,useRef } from "react";
import { GiEarthAmerica } from 'react-icons/gi'
import { MdPhotoSizeSelectActual } from 'react-icons/md';
import { BsFiletypeGif } from 'react-icons/bs';
import { CgPoll } from 'react-icons/cg';
import { BsEmojiSmile } from 'react-icons/bs';
import { LuCalendarClock } from 'react-icons/lu';
import { IoLocationSharp } from 'react-icons/io5';
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { tweetSlice } from "../../../../slice/managetweetData/managetweetdata";


export function LeftSideBar() {
    let namelocal;
    const dispatchForTweet=useDispatch();
    const tweetRefleft=useRef();

    try{
        namelocal=localStorage.getItem("userNameByGroup3");


    }catch{
        namelocal="dummy"

    }

    function addTweetfunOnLeft(){
        if(tweetRefleft.current.value.length>0){
        let length=15;
        if((tweetRefleft.current.value.length)>40){
             length=(tweetRefleft.current.value.length)-((tweetRefleft.current.value.length)%41)
        }else{
          length=tweetRefleft.current.value.length;
        }
        dispatchForTweet(tweetSlice.actions.addTweet(tweetRefleft.current.value.slice(0,length)));
        tweetRefleft.current.value="";
    }
    }



    const [forModals, setForModals] = useState(false)
    const [forLogOut, setForLogOut] = useState(false)

    function handleOpen() {
        setForModals(true)
    }

    function handleClose() {
        setForModals(false)
    }

    // ..........................................logout section

    function handleOpenLogOut() {
        setForLogOut(true)
    }

    function handleCloseLogOut() {
        setForLogOut(false)
    }

    // navigation ..............................................

    const navigateToLoginPageFromProfile = useNavigate()

    function navigateToLoginPage() {
        navigateToLoginPageFromProfile('/')
    }



    return (
        <Fragment>
            <div className={styles.leftSideBarbox}>
                <img src={logo} className={styles.twitterLogo} alt="Loading" />

                <div className={styles.main_btn_part}>
                    <div className={styles.btn1}>
                        <p><ImHome /></p>
                        <button>Home</button>
                    </div>
                    <div className={styles.btn1}>
                        <p><BiHash /></p>
                        <button>Explore</button>
                    </div>
                    <div className={styles.btn1}>
                        <p><GrNotification /></p>
                        <button>Notifications</button>
                    </div>
                    <div className={styles.btn1}>
                        <p><BiEnvelope /></p>
                        <button>Messages</button>
                    </div>
                    <div className={styles.btn1}>
                        <p><RiFileListLine /></p>
                        <button>List</button>
                    </div>
                    <div className={styles.btn1}>
                        <p><BiBookmark /></p>
                        <button>Bookmarks</button>
                    </div>
                    <div className={styles.btn1}>
                        <p><CgProfile /></p>
                        <button>Profile</button>
                    </div>
                    <div className={styles.btn1}>
                        <p><CiCircleMore /></p>
                        <button>More</button>
                    </div>
                </div>


                <Button variant="contained" disableElevation onClick={handleOpen}
                    sx={{
                        borderRadius: '45px',
                        height: '45px',
                        width: '75%',
                        boxShadow: 'none',
                        textTransform: 'unset',
                        fontSize: '16px',
                        backgroundColor: 'rgb(27, 169, 225)',
                        "&:hover": { backgroundColor: 'rgb(27, 169, 225)' }
                    }}
                >Tweet</Button>

                <Modal
                    open={forModals}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                    <Box sx={{
                        position: 'absolute',
                        top: '35%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '450px',
                        minWidth: '450px',
                        height: '350px',
                        backgroundColor: 'white',
                        borderRadius: '25px',
                        padding: '12px'
                    }}>
                        <img src={logo123} alt="Not Found" />
                        <input ref={tweetRefleft}  type="text" placeholder="What is happening?!" className={styles.input_tweet_modal} />
                        <GiEarthAmerica className={styles.tweet_icons} />
                        <button className={styles.tweet_modal_button}>Everyone can reply</button>
                        <div className={styles.icons_tweet_media}>
                            <MdPhotoSizeSelectActual />
                            <BsFiletypeGif />
                            <CgPoll />
                            <BsEmojiSmile />
                            <LuCalendarClock />
                            <IoLocationSharp />
                            <button onClick={addTweetfunOnLeft} className={styles.tweet_button_modal}>Tweet</button>
                        </div>
                    </Box>
                </Modal>

                {/* ...................................................................................... */}


                <div className={styles.account_login} onClick={handleOpenLogOut}>
                    <div className={styles.sub_account_login}>
                        <img src={logo123} alt="Not Found" />
                    </div>
                    <div className={styles.name_profile_login_logout}>
                        <h6>{namelocal} </h6>
                        <p>@{namelocal}123</p>
                        <h4>•••</h4>
                    </div>
                </div>
                <Modal
                    open={forLogOut}
                    onClose={handleCloseLogOut}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                    <Box sx={{
                        position: 'absolute',
                        top: '82%',
                        left: '19%',
                        transform: 'translate(-50%, -50%)',
                        width: '350px',
                        minWidth: '250px',
                        height: '13%',
                        backgroundColor: 'white',
                        borderRadius: '15px',
                        border: 'none',
                        padding: '0px 5px',

                    }}>
                        <div className={styles.inside_modal_logout}>
                            <button>Add an existing account</button>
                            <button onClick={navigateToLoginPage}>Logout @{namelocal}</button>
                        </div>
                    </Box>
                </Modal>



            </div>
        </Fragment>

    )
}

