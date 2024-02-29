import {Button, Modal} from 'react-bootstrap';
import {useContext} from "react";
import {CartContext} from "../storage/cart-context.jsx";
import CartItem from "./CartItem.jsx";
import React from "react";
import {Link} from "react-router-dom";

function CartModal() {
    const cart = useContext(CartContext);

    return (
        <Modal className="modal" show={cart.isCartVisible} onHide={()=> {cart.hideCart()}}>
            <Modal.Header closeButton>
                <Modal.Title>Cart</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {cart.items.length === 0 && <p>The cart is empty</p>}
                {cart.items.length > 0 &&
                    cart.items.map(item => <CartItem key={item.id} item={item}></CartItem>)}
            </Modal.Body>

            <Modal.Footer>
                <div>
                    <p>Total Amount: {cart.totalAmount}$</p>
                </div>
                <Link to={"/checkout"} variant="primary">Order</Link>
            </Modal.Footer>
        </Modal>
    );
}

export default CartModal;