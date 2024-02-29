import './App.css'
import {createBrowserRouter, createHashRouter, RouterProvider} from "react-router-dom";
import Root from "./pages/Root.jsx";
import Error from "./pages/Error.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Account from "./pages/Account.jsx";
import Orders from "./pages/Orders.jsx";
import Checkout from "./pages/Checkout.jsx";
import {CartContext} from "./storage/cart-context.jsx";
import {useState} from "react";

function App() {
    const [cart, setCart] = useState({
        items: [],
        totalQuantity: 0,
        totalAmount: 0,
        isCartVisible: false
    });

    const initCart = {
        items: cart.items,
        totalQuantity: cart.totalQuantity,
        totalAmount: cart.totalAmount,
        isCartVisible: cart.isCartVisible,
        showCart: () => {
            setCart((prev) => {
                return {...prev, isCartVisible: true}
            });
            console.log(cart)
        },
        hideCart: () => {
            setCart((prev) => {
                return {...prev, isCartVisible: false}
            });
        },
        addItems: (product, quantity) => {
            setCart((prev) => {
                let updatedTotalQuantity = Number(prev.totalQuantity) + Number(quantity),
                    updatedTotalAmount = prev.totalAmount + product.price * quantity,
                    existingProductIndex = prev.items.findIndex((i) => i.id === product.id),
                    existingProduct = prev.items[existingProductIndex],
                    updatedProduct, updatedItems = [...prev.items];

                if (existingProductIndex !== -1) {
                    updatedProduct = {
                        ...existingProduct,
                        quantity: existingProduct.quantity + quantity
                    }
                    updatedItems[existingProductIndex] = updatedProduct;
                } else {
                    updatedItems.push({...product, quantity: quantity})
                }

                return {
                    ...prev,
                    items: updatedItems,
                    totalQuantity: updatedTotalQuantity,
                    totalAmount: updatedTotalAmount
                }
            });
        }
    }
    const router = createHashRouter([
        {
            path:'/',
            element: <CartContext.Provider value={initCart}><Root></Root></CartContext.Provider>,
            errorElement: <Error></Error>,
            children: [
                {
                    path: "/",
                    element: <Home></Home>
                },
                {
                    path: "/login",
                    element: <Login></Login>
                },
                {
                    path: "/account",
                    element: <Account></Account>
                },
                {
                    path: "/orders",
                    element: <Orders></Orders>
                },
                {
                    path: "/checkout",
                    element: <Checkout></Checkout>
                },
                {
                    path: "/",
                    element: <Home></Home>
                }
            ]
        }
    ]);

  return (
    <>
        <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
