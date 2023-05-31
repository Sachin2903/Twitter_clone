import { Fragment } from "react"
import styles from "./midSideBar.module.css";
import tweetdemo from '../../../../image/logo/836-removebg-preview.png'
import { GrGallery } from 'react-icons/gr';
import { BsFiletypeGif } from 'react-icons/bs';
import { CgPoll } from 'react-icons/cg';
import { BsEmojiSmile } from 'react-icons/bs';
import { LuCalendarClock } from 'react-icons/lu';
import { GrLocation } from 'react-icons/gr';



export function MidSideBar() {
    return (
        <Fragment>
            <div className={styles.midsidebarbox}>
                <div className={styles.subsidebarbox}>
                    <h2>Home</h2>
                    <div className={styles.paragraph_mid_box}>
                        <p>For You</p>
                        <p>Following</p>
                    </div>
                </div>
                <div className={styles.input_section_tweet}>
                    <img src={tweetdemo} alt="" />
                    <input type="text" placeholder="What is happening?!" />
                </div>

                <div className={styles.tweet_reactions_icons}>
                    <GrGallery />
                    <BsFiletypeGif />
                    <CgPoll />
                    <BsEmojiSmile />
                    <LuCalendarClock />
                    <GrLocation />
                    <button className={styles.tweet_btn}>Tweet</button>
                </div>
                  

            </div>

        </Fragment>

    )
}