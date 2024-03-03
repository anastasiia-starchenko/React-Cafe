import {configureStore, createSlice} from "@reduxjs/toolkit";
import {cartSlice} from "./slices/cartSlice.js";
import {userSlice} from "./slices/userSlice.js";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        user: userSlice.reducer
    }
})

export const cartActions = cartSlice.actions;
export const userActions = userSlice.actions;
export default store;