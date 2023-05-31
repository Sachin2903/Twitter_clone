import { Fragment } from "react";
import styles from "./tweetBox.module.css";
import tweetbox from '../../../../../image/logo/836-removebg-preview.png'

export function TweetBox() {
  return (
    <Fragment>
      <div className={styles.tweetbox_main_container}>
        <div className={styles.sub_tweetbox_container}>
          <img src={tweetbox} alt="Not Found Tweetbox" />
          <input type="text" />
        </div>
      </div>
    </Fragment>
  )

}