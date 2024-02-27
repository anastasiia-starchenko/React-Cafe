import React, {useEffect, useState} from 'react';
import {Button, Card, Form, InputGroup} from "react-bootstrap";
import { toast } from 'react-toastify';

function Product({product}) {
    const [productValue, setProductValue] = useState(1);

    const addProductToCart = () => {
        console.log(productValue);
        console.log(product);
        toast.success(`${productValue} ${product.name} ${productValue > 1 ? `are` : `is`} added to cart`);
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
                    <Form onSubmit={(e)=>{e.preventDefault(); addProductToCart()}}>
                        <Form.Control
                            type="number"
                            value={productValue}
                            min="1"
                            onChange={(e)=>{setProductValue(e.target.value)}}
                        />
                        <Button type="submit" variant="success" id="button-addon2">Add</Button>
                    </Form>
                </InputGroup>
            </Card.Body>
        </Card>
    );
}

export default Product;