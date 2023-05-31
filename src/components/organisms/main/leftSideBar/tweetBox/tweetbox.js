import { Fragment } from "react";
import styles from "./tweetBox.module.css";
import tweetbox from '../../../../../image/logo/836-removebg-preview.png'
import { GiEarthAmerica } from 'react-icons/gi'

export function TweetBox() {
  return (
    <Fragment>
      <div className={styles.tweetbox_main_container}>
        <div className={styles.sub_tweetbox_container}>
          <img src={tweetbox} alt="Not Found Tweetbox" />
          <input type="text" placeholder="Whats Happening?!" />
          <GiEarthAmerica className={styles.icons} />
          <button className={styles.tweetbox_btn}>  Every can reply</button>
        </div>
      </div>
    </Fragment>
  )

}