import { createSlice } from "@reduxjs/toolkit";

import * as _DATA from '../_DATA'; 

const authen = createSlice({
    name: 'users',
    initialState: {value: {}},
    reducers:{
        allUser: (state, action) => {
            state.value = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase("GET_USERS", (state, action) => {
            state.value = action.payload
        })
    }
})


export const getUsers = () =>async (dispatch) => {
    const data = await _DATA._getUsers()
    dispatch({type: 'GET_USERS', payload: data})
}


export const {allUser} = authen.actions
export default authen.reducer