import { createSlice } from "@reduxjs/toolkit";

import * as _DATA from '../_DATA'; 

const user = createSlice({
    name: 'currentUser',
    initialState: {
        value: {},
    },
    reducers:{
        currentUser: (state, action) => {
            state.value = action.payload
        },
        logout: (state, action) => {
            state.value = {}
        }
    }
})
export const { currentUser, logout} = user.actions
export default user.reducer