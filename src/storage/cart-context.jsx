import {createContext} from "react";

export const CartContext = createContext({
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
    isCartVisible: false,
    showCart: () => {},
    hideCart: () => {},
    addItems: () => {}
});