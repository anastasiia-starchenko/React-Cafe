import React, {useContext} from 'react';
import {Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import { BsCartFill } from "react-icons/bs";
import {Link} from "react-router-dom";
import {CartContext} from "../storage/cart-context.jsx";
import reactLogo from '../assets/react.svg'


function Header() {
    const cart = useContext(CartContext);
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#"><img src={reactLogo}/> React Cafe</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link className="nav-link" to="/">Home</Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link>
                    </Nav>
                    <Link className="nav-link me-3" to="/login">Login</Link>
                    <Button variant={"outline-success"} onClick={cart.showCart}>
                        <BsCartFill></BsCartFill>
                        Cart {cart.totalQuantity}
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;