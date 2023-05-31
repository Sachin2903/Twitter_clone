import React from "react";
import { Fragment, useState } from "react";
import styles from "./whatsHappen.module.css";
import { HiEmojiSad } from "react-icons/hi";

const detailsOnRightSide = [
  {
    whatHappenTitle: "Trending in India",
    whatHappenTopic: "CSk vs GT",
    whatHappenMetaData: "5.1K Tweets",
  },
  {
    whatHappenTitle: "Trending in India",
    whatHappenTopic: "Mahi",
    whatHappenMetaData: "1,883 Tweets",
  },
  {
    whatHappenTitle: "Trending in India",
    whatHappenTopic: "Advantage CSK",
    whatHappenMetaData: "26.8K Tweets",
  },
  {
    whatHappenTitle: "Sports - Trending",
    whatHappenTopic: "Congratulation",
    whatHappenMetaData: "50.3K Tweets",
  },

];

export const WhatsHapp = () => {
  const [showPopupIndex, setShowPopupIndex] = useState(-1);

  const togglePopup = (index) => {
    setShowPopupIndex(showPopupIndex === index ? -1 : index);
  };

  return (
    <Fragment>
      <div className={styles.treanding_main}>
        {detailsOnRightSide.map((data, index) => (
          <div className={styles.data_trend} key={index}>
            <p>{data.whatHappenTitle}</p>
            <div className={styles.dots}>
              <button
                className={styles.dots_button}
                onClick={() => togglePopup(index)}
              >
                ...
              </button>
              {showPopupIndex === index && (
                <div className={styles.popup}>
                  <HiEmojiSad style={{ fontSize: "25px" }} />
                  <h4
                    onClick={() => console.log(index)}
                    className={styles.popupdata}
                  >
                    Not interested in this
                  </h4>
                  <br></br>
                </div>
              )}
            </div>
            <h3>Topic: {data.whatHappenTopic}</h3>
            <h4>MetaData: {data.whatHappenMetaData}</h4>
          </div>
        ))}
        <button className={styles.show_more}>Show more</button>
      </div>
    </Fragment>
  );
};
