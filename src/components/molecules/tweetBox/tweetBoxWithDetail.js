import { Fragment, useState } from "react";
import styles from "./tweetBoxWithDetail.module.css";
import ProfilePhoto from '../../../image/logo/Avater2.jpg';
import {MdVerified} from 'react-icons/md'

export function TweetBoxWithDetail(){
   
    const[profiles,setprofiles]=useState([
        {
            profilePhoto:ProfilePhoto,
            name:"Abhay Khemnar",
            userId:"@abhay7",
            caption:"What a wonder full day",
            img:ProfilePhoto,
            likesCount:223
        },
        {
            profilePhoto:ProfilePhoto,
            name:"Abhay Khemnar",
            userId:"@abhay7",
            caption:"What a wonder full day",
            img:ProfilePhoto,
            likesCount:223
        } ,  {
            profilePhoto:ProfilePhoto,
            name:"Abhay Khemnar",
            userId:"@abhay7",
            caption:"What a wonder full day",
            img:ProfilePhoto,
            likesCount:223
        },   {
            profilePhoto:ProfilePhoto,
            name:"Abhay Khemnar",
            userId:"@abhay7",
            caption:"What a wonder full day",
            img:ProfilePhoto,
            likesCount:223
        },   {
            profilePhoto:ProfilePhoto,
            name:"Abhay Khemnar",
            userId:"@abhay7",
            caption:"What a wonder full day",
            img:ProfilePhoto,
            likesCount:223
        },   {
            profilePhoto:ProfilePhoto,
            name:"Abhay Khemnar",
            userId:"@abhay7",
            caption:"What a wonder full day",
            img:ProfilePhoto,
            likesCount:223
        }
    ])


    return(
 <Fragment>
  {profiles.map((data,index)=> (
     <div className={styles.tweetcontainer}>

                <div className={styles.profile}>
                    <img src={data.profilePhoto} alt="profilePhoto" className={styles.profilePhoto}/>
                     <div className={styles.caption_name_Id}>
                         <div className={styles.nameId}>
                            <h3>{data.name}  </h3>
                            <MdVerified className={styles.bluetik}/>
                            <p class={styles.userId}> {data.userId}  .12h</p>
                         </div>
                       <h4 className={styles.caption}>{data.caption}</h4>
                      </div>
                </div>
                <div className={styles.imgeContainer}>
                    <img src={data.img} alt="img" className={styles.imge} />
                </div>

         </div>
                
           ))}    
</Fragment>
    )
}