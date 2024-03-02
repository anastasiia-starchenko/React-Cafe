import React, {useContext} from 'react';
import {Button, Card, Col, Row} from "react-bootstrap";
import {cartActions} from "../storage/index.js";
import {useDispatch} from "react-redux";

function CartItem(props) {
    const dispatch = useDispatch();

    return (
        <Card>
            <Card.Body>
                <Row>
                    <Col>
                        <Card.Title>{props.item.name}</Card.Title>
                        <Card.Text as={"h5"}>{props.item.price}$</Card.Text>
                    </Col>
                    <Col>
                        <Button variant={"outline-primary"}>-</Button>
                        {props.item.quantity}
                        <Button variant={"outline-primary"}>+</Button>
                    </Col>
                    <Col>
                        <Button variant={"danger"} onClick={()=>{dispatch(cartActions.removeItem(props.item))}}>Delete</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default CartItem;