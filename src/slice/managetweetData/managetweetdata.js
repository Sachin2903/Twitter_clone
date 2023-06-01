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
                        e.likesCount=e.likesCount-1;
                        e.liketrue="false";
                    }else{
                        e.likesCount=e.likesCount+1
                        e.liketrue="true";
                    }
                }

            })
        }),




       
    }
})