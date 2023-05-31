import { Fragment } from "react"
import styles from "./rightSideBar.module.css";
import { AiOutlineSearch } from 'react-icons/ai'
import { WhatsHapp } from "../../../molecules/RightSideBarMore/whatsHappen/WhatsHapp";
 
 



export function RightSideBar() {
    return (
    
        <Fragment>
            <div className={styles.sidebar}>
                <div className={styles.inline}>

                    <div className={styles.input_section}>
                    <AiOutlineSearch className={styles.search} />
                    <input   type="text"
                       placeholder="search" />

                    </div>
                        <div className={styles.sidebarcontainer}>
                       
                            <h1 className={styles.heading}>
                                What's happening?
                            </h1>
                            <div>
                                < WhatsHapp />
                            </div>
                           
                        </div>
                        <div className={styles.follow}>

                            <h1>
                                Who To Follow
                            </h1>
                            

                        </div>


                </div>

            </div>





        </Fragment>

    )
}