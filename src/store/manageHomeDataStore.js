import { configureStore } from "@reduxjs/toolkit";

import {whatHappenSlice} from "../slice/manageWhatHappenData";


export const store=configureStore({
    reducer:{
        whatHappen:whatHappenSlice.reducer,
        
        
    }
})