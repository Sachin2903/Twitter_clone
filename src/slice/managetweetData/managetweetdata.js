import { createSlice } from "@reduxjs/toolkit";
import {tweetdummydata} from "./managetweetdummydata";


export const tweetSlice = createSlice({
    initialState: [...tweetdummydata],
    name: "tweetnow",
    reducers: {
        addlike:((state,action)=>{
            state.map((e,i)=>{
                if(action.payload===i){
                    if(e.liketrue==="true"){
                        e.likesCount=e.likesCount+1;
                        e.liketrue="false";
                    }else{
                        e.likesCount=e.likesCount-1
                        e.liketrue="true";
                    }
                }

            })
        }),
        addTweet:((state,action)=>{
            let atweet={
                "profilePhoto": "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740&t=st=1685637956~exp=1685638556~hmac=f575894f74c66c2edc9fa1f403806d942cc1a50dfcf4814a310de0fc638d71a6",
                "name": "dummy",
                "userId": "dummy123",
                "caption": action.payload,
                "img": "https://fastly.picsum.photos/id/85/1280/774.jpg?hmac=h_HHpvfhMmLP6uOSrHS7HSlXVRuMKfBbc8HFKd1Acv4",
                "likesCount": 0,
                "liketrue":"true",
            }

            return [atweet,...state]





        })



       
    }
})