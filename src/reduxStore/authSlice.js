import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';


const initialState = {
    user: null,
    isLoggedin: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {// keep all the action inside the reducer
        register: (state, action) => {
            //login here is the action ,payload keeps the data 
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.user = action.payload
        },
        login: (state, action) => {
            if (state.user?.email === action.payload.email && state.user?.password === action.payload.password) {
                state.isLoggedin = true
                toast.success("Login successful");
                console.log("islogin 1 ", state.isLoggedin);
                return state
            }
            else {
                state.isLoggedin = false
                toast.error("wrong email & password");
                console.log("islogin 2 ", state.isLoggedin);
                return state
            }
        },
        logout: (state) => {
            state.user = null
            state.isLoggedin = false
        },

    },
})

// Action creators are generated for each case reducer function
export const { register, login, logout } = authSlice.actions

export default authSlice.reducer