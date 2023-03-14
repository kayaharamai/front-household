import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
export const formSlice = createSlice({
    name: "authForm",
    initialState: {
        email:"",
        password:"",
        error:false
    },
    reducers: {
addEmail:(state,action)=>{
    state.email=action.payload;
},
addPassword:(state,action)=>{
    state.password=action.payload;
}, 
// clearForm:(state)=>{
//     state.email="",
//     state.password=""

// }

    }
})
export const {addEmail,addPassword} =formSlice.actions
export default formSlice.reducer
