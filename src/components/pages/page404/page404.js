import { Fragment, useLayoutEffect, useRef } from "react";
import styles from "./page404.module.css"
import twitterLogoFor404 from "../../../image/logo/logo.png"
import { useNavigate } from "react-router-dom";
export function Page404() {
    const naviagteFrom404=useNavigate();
    const loaderFor404 = useRef("");

    useLayoutEffect(() => {
        loaderFor404.current.style.display = "block";
        let id404loader = setTimeout(() => {
            loaderFor404.current.style.display = "none";

        }, 2000)
        return () => {
            clearTimeout(id404loader);
        }

    }, [])



    return (
        <Fragment>
            <div ref={loaderFor404} className={styles.errorLoader}>
                <img alt="loading.." className={styles.twitterLogoError} src={twitterLogoFor404} />

            </div>

            <div className={styles.main_conatainer_404}>
                <div className={styles.sub_main_conatainer}>
                    <div className={styles.sub_main_conatainer_img}>
                        <img src={twitterLogoFor404} alt="" />
                    </div>

                    <div className={styles.error_message_box}>
                        <h3>Error</h3>
                        <p>Oops,something went wrong  , Please try again later .</p>
                        <div className={styles.error_404_btn}>
                            <button onClick={()=>naviagteFrom404("/home")}>OK</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}