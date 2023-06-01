import { createSlice } from "@reduxjs/toolkit";
import { whathapperdetails } from "./WhatHappenArray"

export const whatHappenSlice = createSlice({
    initialState: [...whathapperdetails],
    name: "whatHappen",
    reducers: {
        whatHappenDelete: (state, action) => {
           
            return state.filter((e, i) => action.payload !== i)

        },

        whatHappenSeeMore: (state, action) => {

            return [...whathapperdetails];

        }
    }
})