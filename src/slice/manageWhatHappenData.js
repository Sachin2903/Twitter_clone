import { createSlice } from "@reduxjs/toolkit";
import {whathapperdetails} from "./WhatHappenArray"

export const whatHappenSlice=createSlice({
     initialState:whathapperdetails,
     name:"whatHappen",
     reducers:{
        whatHappenDelete:(state,action)=>{
            console.log(action.payload);
            return state.filter((e,i)=>action.payload!==i)
            
        },

        whatHappenSeeMore:(state,action)=>{
            
            state=whathapperdetails;

        }
          

     }




})