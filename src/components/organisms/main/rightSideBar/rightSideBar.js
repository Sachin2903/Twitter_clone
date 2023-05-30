import { Fragment } from "react"
import styles from "./rightSideBar.module.css";
import { AiOutlineSearch } from 'react-icons/ai'




export function RightSideBar() {
    return (
        <Fragment>
            <div className={styles.sidebar}>
                <div className={styles.inline}>
                    <div className={styles.input_icons}>
                        <AiOutlineSearch className={styles.search} />

                        <input className={styles.input_field} type="text"
                        />
                        <div className={styles.sidebarcontainer}>
                            <h1 className={styles.heading}>
                                What's happening?
                            </h1>
                        </div>
                        <div className={styles.follow}>

                            <h1>
                                Who To Follow
                            </h1>

                        </div>

                    </div>



                </div>

            </div>





        </Fragment>

    )
}