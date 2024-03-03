import React from 'react';
import {Tab, Tabs} from "react-bootstrap";
import LoginForm from "../components/Auth/LoginForm.jsx";
import SignUpForm from "../components/Auth/SignUpForm.jsx";

function Login(props) {
    return (
        <Tabs
            defaultActiveKey="login"
            id="fill-tab-example"
            className="mb-3"
            fill
        >
            <Tab eventKey="login" title="Login">
                <LoginForm></LoginForm>
            </Tab>
            <Tab eventKey="signup" title="SignUp">
                <SignUpForm></SignUpForm>
            </Tab>
        </Tabs>
    );
}

export default Login;