import { configureStore } from "@reduxjs/toolkit";

import {whatHappenSlice} from "../slice/manageWhatHappenData";
import {tweetSlice} from "../slice/managetweetData/managetweetdata"

export const store=configureStore({
    reducer:{
        whatHappen:whatHappenSlice.reducer,
        tweetnow:tweetSlice.reducer
        
        
    }
})