import {createSlice} from "@reduxjs/toolkit";
import {toast} from "react-toastify";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        userName: "",
        userEmail: "",
        userId: "",
        isLoggedIn: false
    },
    reducers: {
        login (state, action) {
            state.isLoggedIn = true;
            state.userId = action.payload.uid;
            state.userName = action.payload.displayName;
            state.userEmail = action.payload.email;
        }
    }
});