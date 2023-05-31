import styles from "./whoToFollow.module.css"

import React, { useState } from 'react'
import avatar1 from '../../../../image/logo/Avathre1.jpg'
import  avatar2 from '../../../../image/logo/Avater2.jpg'
import avatar3 from '../../../../image/logo/Avater3.jpg'

export  function WhoToFollow() {
 



const [profiles, setProfiles] = useState([
    {
        id:1,
        img:avatar2,
        name:"Iron Man",
        userId:"@ironman",
    },
    {
        id:2,
        img:avatar1,
        name:"Abhay",
        userId:"@Abhay7",
        
    },
    {
        id:3,
        img:avatar3,
        name:"Manish",
        userId:"@manish3",

    },
    {
        id:4,
        img:avatar1,
        name:"Sachin",
        userId:"@sachin22",
    },
    {
        id:5,
        img:avatar2,
        name:"Zakeer",
        userId:"@zakeer9",
    },
    {
        id:6,
        img:avatar3,
        name:"Ritik",
        userId:"@ritik12",
    },
    {
        id:7,
        img:avatar1,
        name:"Anoop",
        userId:"@anoop",
    },
    {
        id:8,
        img:avatar2,
        name:"Abhay",
        userId:"@Abhay7",
    },
    {
        id:9,
        img:avatar3,
        name:"Manish",
        userId:"@manish3",

    },
    {
        id:10,
        img:avatar1,
        name:"Sachin",
        userId:"@sachin22",
    },
    {
        id:11,
        img:avatar2,
        name:"Zakeer",
        userId:"@zakeer9",
    }

  ]);

  function handleFollow(id)  {
    setProfiles((prevProfiles) =>
      prevProfiles.map((profile) =>
        profile.id === id ? { ...profile, isFollowing: !profile.isFollowing } : profile
      )
    );
  };
  return (
    <div className={styles.container}>
        {
            profiles.map((data,index)=>(
                    <div className={styles.following_container} key={index}>
                        <img className={styles.imge} src={data.img} alt={data.name} />
                            <div className={styles.name_Id}>
                                <h1>{data.name}</h1>
                                <p>{data.userId}</p>
                            </div>
                            
                            {data.isFollowing ? (
                                    <button  onClick={() => handleFollow(data.id)} className={styles.following_button}>Following</button>
                                ) : (
                                    <button className={styles.follow_button} onClick={() => handleFollow(data.id)}>Follow</button>
                                )}
                    </div>
            ))
        }
        <p className={styles.seeMore}>see more...</p>
        </div>
  )
}
