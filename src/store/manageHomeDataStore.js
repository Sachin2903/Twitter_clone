import { configureStore } from "@reduxjs/toolkit";

import {whatHappenSlice} from "../slice/manageWhatHappenData";
import {tweetSlice} from "../slice/managetweetData/managetweetdata"
import { protectSliceToCheck } from "../slice/protectCheck/protectSlice";
export const store=configureStore({
    reducer:{
        checkBox:protectSliceToCheck.reducer,
        whatHappen:whatHappenSlice.reducer,
        tweetnow:tweetSlice.reducer
        
        
    }
})