import {createSlice} from "@reduxjs/toolkit";
import {toast} from "react-toastify";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0,
        totalAmount: 0,
        isCartVisible: false
    },
    reducers: {
        showCart(state) {
            state.isCartVisible = true;
        },
        hideCart(state) {
            state.isCartVisible = false;
        },
        addItem(state, action) {
            let product = action.payload,
                existingProductIndex = state.items.findIndex((i) => i.id === product.id),
                existingProduct = state.items[existingProductIndex];

            if (existingProductIndex !== -1) {
                existingProduct.quantity += Number(product.quantity);
            } else {
                state.items.push(product);
            }
            state.totalQuantity += Number(product.quantity);
            state.totalAmount += product.price * product.quantity;
        },
        removeItem(state, action) {
            let product = action.payload;
            state.items = state.items.filter(item => item.id !== product.id);
            state.totalQuantity = state.totalQuantity - product.quantity;
            state.totalAmount = state.totalAmount - product.quantity * product.price;
            toast.error(`${product.quantity} ${product.name} ${product.quantity > 1 ? `are` : `is`} removed from cart`);
        }
    }
});
