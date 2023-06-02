import { Fragment, useRef } from "react"
import styles from "./midSideBar.module.css";
import tweetdemo from '../../../../image/logo/836-removebg-preview.png'
import { GrGallery } from 'react-icons/gr';
import { BsFiletypeGif } from 'react-icons/bs';
import { CgPoll } from 'react-icons/cg';
import { BsEmojiSmile } from 'react-icons/bs';
import { LuCalendarClock } from 'react-icons/lu';
import { GrLocation } from 'react-icons/gr';
import { TweetBoxWithDetail } from "../../../molecules/tweetBox/tweetBoxWithDetail";
import { useDispatch } from "react-redux";
import { tweetSlice } from "../../../../slice/managetweetData/managetweetdata"
export function MidSideBar() {
    const dispatchfrommid = useDispatch();
    const tweetref = useRef();



    function addTweetfun() {
        if (tweetref.current.value.length > 0) {
            let length = 15;
            if ((tweetref.current.value.length) > 40) {
                length = (tweetref.current.value.length) - ((tweetref.current.value.length) % 41)
            } else {
                length = tweetref.current.value.length;
            }
            dispatchfrommid(tweetSlice.actions.addTweet(tweetref.current.value.slice(0, length)));
            tweetref.current.value = "";
        }
    }



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
                    <input ref={tweetref} type="text" placeholder="What is happening?!" />
                </div>

                <div className={styles.tweet_reactions_icons}>
                    <GrGallery className={styles.icons_ready} />
                    <BsFiletypeGif className={styles.icons_ready} />
                    <CgPoll className={styles.icons_ready} />
                    <BsEmojiSmile className={styles.icons_ready} />
                    <LuCalendarClock className={styles.icons_ready} />
                    <GrLocation className={styles.icons_ready} />
                    <button onClick={addTweetfun} className={styles.tweet_btn}>Tweet</button>
                </div>
                <p className={styles.showtweets210}>show 210 tweets</p>
                <div className={styles.mainDisplayTweets}>

                    <TweetBoxWithDetail />
                </div>



            </div>

        </Fragment>

    )
}