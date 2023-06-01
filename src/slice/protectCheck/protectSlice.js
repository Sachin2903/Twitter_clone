import { createSlice } from "@reduxjs/toolkit";

export const protectSliceToCheck=createSlice({
    initialState:true,
    name:"checkBox",
    reducers:{
        changecheck:((state,action)=>{
            return !state
        })
    }

})