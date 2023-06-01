import { Fragment } from "react";
import styles from "./tweetBoxWithDetail.module.css";

import {MdVerified} from 'react-icons/md'
import {FaRegComment} from 'react-icons/fa'
import {ImLoop} from 'react-icons/im'
import {AiOutlineHeart} from 'react-icons/ai'
import {FcLike} from 'react-icons/fc'
import {GiHistogram} from 'react-icons/gi'
import {BiUpload} from 'react-icons/bi'
import { useDispatch,useSelector } from "react-redux";
import { tweetSlice } from "../../../slice/managetweetData/managetweetdata";
export function TweetBoxWithDetail(){
  const dispatchForLike=useDispatch();
 
    
    const profiles=useSelector((state)=>{
        return state.tweetnow;
    });

function handleLike(index){
    dispatchForLike(tweetSlice.actions.addlike(index))
    
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
                       <h6 className={styles.caption}>{data.caption}</h6>
                      </div>
                </div>
                <div className={styles.imgeContainer}>
                    <img src={data.img} alt="img" className={styles.imge} />
                </div>
                <div className={styles.logo_container}>
                    <button className={styles.logoButton}><FaRegComment className={styles.logo} size={17}/> <p className={styles.count}>234</p></button>
                    <button className={styles.logoButton}><ImLoop className={styles.logo} size={17}/> <p className={styles.count}>234</p></button>

                    <button className={styles.logoButton} onClick={()=>handleLike(index)}>{(data.liketrue==="true")?<FcLike className={styles.logo} size={17}/>:<AiOutlineHeart className={styles.logoLike} size={17} />} <p className={styles.count}>{data.likesCount}</p></button>

                    <button className={styles.logoButton}><GiHistogram className={styles.logo} size={17}/> <p className={styles.count}>234</p></button>
                    <button className={styles.logoUpload}><BiUpload className={styles.logoUpload} size={15}/> </button>
                </div>

         </div>
                
           ))}    
</Fragment>
    )
}