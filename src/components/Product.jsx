import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Form, InputGroup} from "react-bootstrap";
import { toast } from 'react-toastify';
import {CartContext} from "../storage/cart-context.jsx";
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "../storage/index.js";

function Product({product}) {
    const [productQuantity, setProductQuantity] = useState(1);
    //const cart = useContext(CartContext);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const addProductToCart = () => {
        let addedProduct = {...product, quantity: productQuantity};

        dispatch(cartActions.addItem(addedProduct));
        toast.success(`${productQuantity} ${product.name} ${productQuantity > 1 ? `are` : `is`} added to cart`);
    }

    return (
        <Card bg={"light"} border="success" className={"flex-row mb-5 align-items-end"}>
            <Card.Body className="text-start">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text as={"h4"}>{product.price}$</Card.Text>
            </Card.Body>
            <Card.Body>
                <InputGroup className="mb-3">
                    <Form
                            className="d-flex flex-column"
                            onSubmit={(e)=>{e.preventDefault(); addProductToCart()}}
                            style={{width: "80px"}}
                    >
                        <p className={"mb-1"}>Quantity</p>
                        <Form.Control
                            type="number"
                            value={productQuantity}
                            min="1"
                            onChange={(e)=>{setProductQuantity(e.target.value)}}
                            className={"mb-2"}
                        />
                        <Button type="submit" variant="success" id="button-addon2">Add</Button>
                    </Form>
                </InputGroup>
            </Card.Body>
        </Card>
    );
}

export default Product;