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
import { useState } from "react";
import { GiEarthAmerica } from 'react-icons/gi'
import { MdPhotoSizeSelectActual } from 'react-icons/md';
import { BsFiletypeGif } from 'react-icons/bs';
import { CgPoll } from 'react-icons/cg';
import { BsEmojiSmile } from 'react-icons/bs';
import { LuCalendarClock } from 'react-icons/lu';
import { IoLocationSharp } from 'react-icons/io5';
import { useNavigate } from "react-router-dom";



export function LeftSideBar() {

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
                <button className={styles.button}> <p><ImHome className={styles.logo} /> Home  </p> </button>
                <button className={styles.button}> <p><BiHash className={styles.logo} /> Explore  </p> </button>
                <button className={styles.button}> <p><GrNotification className={styles.logo} /> Notifications  </p></button>
                <button className={styles.button}> <p><BiEnvelope className={styles.logo} /> Messages  </p> </button>
                <button className={styles.button}> <p><RiFileListLine className={styles.logo} /> List  </p> </button>
                <button className={styles.button}> <p><BiBookmark className={styles.logo} /> Bookmarks  </p> </button>
                <button className={styles.button}> <p><CgProfile className={styles.logo} /> Profile  </p> </button>
                <button className={styles.button}> <p><CiCircleMore className={styles.logo} /> More  </p> </button>

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
                        width: '610px',
                        minWidth: '610px',
                        height: '45%',
                        backgroundColor: 'white',
                        borderRadius: '25px',
                        padding: '12px'
                    }}>
                        <img src={logo123} alt="Not Found" />
                        <input type="text" placeholder="What is happening?!" className={styles.input_tweet_modal} />
                        <GiEarthAmerica className={styles.tweet_icons} />
                        <button className={styles.tweet_modal_button}>Everyone can reply</button>
                        <div className={styles.icons_tweet_media}>
                            <MdPhotoSizeSelectActual />
                            <BsFiletypeGif />
                            <CgPoll />
                            <BsEmojiSmile />
                            <LuCalendarClock />
                            <IoLocationSharp />
                            <button className={styles.tweet_button_modal}>Tweet</button>
                        </div>
                    </Box>
                </Modal>

                {/* ...................................................................................... */}


                <div className={styles.account_login} onClick={handleOpenLogOut}>
                    <div className={styles.sub_account_login}>
                        <img src={logo123} alt="Not Found" />
                    </div>
                    <div className={styles.name_profile_login_logout}>
                        <h6>Mahendra Singh Dhoni </h6>
                        <p>@msdhoni</p>
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
                            <button onClick={navigateToLoginPage}>Logout @msdhoni</button>
                        </div>
                    </Box>
                </Modal>



            </div>
        </Fragment>

    )
}

