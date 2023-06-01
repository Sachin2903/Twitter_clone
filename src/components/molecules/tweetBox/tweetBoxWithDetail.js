import { Fragment, useState } from "react";
import styles from "./tweetBoxWithDetail.module.css";
import ProfilePhoto from '../../../image/logo/Avater2.jpg';
import {MdVerified} from 'react-icons/md'
import {FaRegComment} from 'react-icons/fa'
import {ImLoop} from 'react-icons/im'
import {AiOutlineHeart} from 'react-icons/ai'
import {FcLike} from 'react-icons/fc'
import {GiHistogram} from 'react-icons/gi'
import {BiUpload} from 'react-icons/bi'
export function TweetBoxWithDetail(){
    const[state,setState]=useState(true)

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

function handleLike(index){
    setState(!state)
    state?profiles[index].likesCount= profiles[index].likesCount+1:profiles[index].likesCount= profiles[index].likesCount-1
    console.log(state)
}
    return(
 <Fragment>
  {profiles.map((data,index)=> (
     <div className={styles.tweetcontainer} key={index}>

                <div className={styles.profile}>
                    <img src={data.profilePhoto} alt="profilePhoto" className={styles.profilePhoto}/>
                     <div className={styles.caption_name_Id}>
                         <div className={styles.nameId}>
                            <h3>{data.name}  </h3>
                            <MdVerified className={styles.bluetik}/>
                            <p className={styles.userId}> {data.userId}  .12h</p>
                         </div>
                       <h4 className={styles.caption}>{data.caption}</h4>
                      </div>
                </div>
                <div className={styles.imgeContainer}>
                    <img src={data.img} alt="img" className={styles.imge} />
                </div>
                <div className={styles.logo_container}>
                    <button className={styles.logoButton}><FaRegComment className={styles.logo} size={17}/> <p className={styles.count}>234</p></button>
                    <button className={styles.logoButton}><ImLoop className={styles.logo} size={17}/> <p className={styles.count}>234</p></button>

                    <button className={styles.logoButton} onClick={()=>handleLike(index)}>{state?<AiOutlineHeart className={styles.logoLike} size={17} />:<FcLike className={styles.logo} size={17}/>} <p className={styles.count}>{data.likesCount}</p></button>

                    <button className={styles.logoButton}><GiHistogram className={styles.logo} size={17}/> <p className={styles.count}>234</p></button>
                    <button className={styles.logoUpload}><BiUpload className={styles.logoUpload} size={15}/> </button>
                </div>

         </div>
                
           ))}    
</Fragment>
    )
}