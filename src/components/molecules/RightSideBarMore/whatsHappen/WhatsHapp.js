import React from "react";
import { Fragment, useState } from "react";
import styles from "./whatsHappen.module.css";
import { HiEmojiSad } from "react-icons/hi";
import { whatHappenSlice } from "../../../../slice/manageWhatHappenData";

import { useDispatch, useSelector } from "react-redux";

export const WhatsHapp = () => {
  const dispatchFromWhatHappen = useDispatch();

  const detailsOnRightSide = useSelector((state, action) => {
    return state.whatHappen;
  });

  function deleteWhatHappen(id) {
    dispatchFromWhatHappen(whatHappenSlice.actions.whatHappenDelete(id));
  }

  function addOnSeeMore() {
    dispatchFromWhatHappen(whatHappenSlice.actions.whatHappenSeeMore());
  }
  const [showPopup, setShowPopup] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const togglePopup = (index) => {
    if (activeIndex === index) {
      setShowPopup(false);
      setActiveIndex(-1);
    } else {
      setShowPopup(true);
      setActiveIndex(index);
    }
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
              {showPopup && activeIndex === index && (
                <div
                  className={styles.popup}
                  onClick={() => togglePopup(index)}
                >
                  <HiEmojiSad style={{ fontSize: "25px", marginTop: "10px" }} />
                  <h4
                    onClick={() => deleteWhatHappen(index)}
                    className={styles.popupdata}
                  >
                    Not interested in this
                  </h4>
                  <br />
                </div>
              )}
            </div>
            <h3>Topic: {data.whatHappenTopic}</h3>
            <h4>MetaData: {data.whatHappenMetaData}</h4>
          </div>
        ))}
        <button onClick={addOnSeeMore} className={styles.show_more}>
          Show more
        </button>
      </div>
    </Fragment>
  );
};
