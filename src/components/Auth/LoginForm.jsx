import React, {useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import {useFormik} from "formik";
import {auth} from "../../storage/firebase.js";
import {signInWithEmailAndPassword} from "firebase/auth"
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {userActions} from "../../storage/index.js";

const validateForm = (values) => {
    let errors = {};

    if (!values.email) {
        errors.email = "Required";
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
        errors.email = "Must contain @ and ,";
    }

    if (!values.password) {
        errors.password = "Required";
    } else if (values.password.length < 5) {
        errors.password = "Must be > 5";
    }
}

function LoginForm () {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
          email: "",
          password: ""
        },
        validate: validateForm,
        onSubmit: (values) => {
            signInWithEmailAndPassword(auth, values.email, values.password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    dispatch(userActions.login(user));
                    toast.success(`Welcome back!`);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    toast.success(`${errorMessage}`);
                });
        }
    })

    return (
        <div>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label column sm="2">Email address</Form.Label>
                    <Col sm="10">
                        <Form.Control
                            value={formik.values.email}
                            name="email"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            type="email"
                            placeholder="name@example.com" />
                        {formik.touched.email && formik.errors.email &&
                            <Form.Text className="text-danger">formik.errors.email</Form.Text>}
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">Password</Form.Label>
                    <Col sm="10">
                        <Form.Control
                            value={formik.values.password}
                            name="password"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            type="password"
                            placeholder="Password" />
                        {formik.touched.password && formik.errors.password &&
                            <Form.Text className="text-danger">formik.errors.password</Form.Text>}
                    </Col>
                </Form.Group>
                <Button type={"submit"}>Submit</Button>
            </Form>
        </div>
    );
}

export default LoginForm;