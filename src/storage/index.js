import {configureStore, createSlice} from "@reduxjs/toolkit";
import {cartSlice} from "./slices/cartSlice.js";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
})

export const cartActions = cartSlice.actions;
export default store;