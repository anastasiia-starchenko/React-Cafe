import React from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import {useFormik} from "formik";
import {auth} from "../../storage/firebase.js";
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth"
import {toast} from "react-toastify";
import {userActions} from "../../storage/index.js";
import {useDispatch} from "react-redux";

const validateForm = (values) => {
    let errors = {};

    if (!values.name) {
        errors.name = "Required";
    }

    if (!values.surname) {
        errors.surname = "Required";
    }

    if (!values.email) {
        errors.email = "Required";
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
        errors.email = "Must contain @ and ,";
    }

    if (!values.password) {
        errors.password = "Required";
    } else if (values.password.length < 6) {
        errors.password = "Must be at least 6";
    }
}

function SignUpForm() {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            name: "",
            surname: "",
            email: "",
            password: ""
        },
        validate: validateForm,
        onSubmit: (values) => {
            createUserWithEmailAndPassword(auth, values.email, values.password)
                .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    updateProfile(auth.currentUser, {
                            displayName: values.name + " " + values.surname, photoURL: "https://example.com/jane-q-user/profile.jpg"
                        }).then(() => {
                            dispatch(userActions.login(user));
                            toast.success(`User was successfully created`);
                        }).catch((error) => {
                            toast.success(`${errorMessage}`);
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    toast.success(`${errorMessage}`);
                });
        }
    })

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label column sm="2">Name</Form.Label>
                <Col sm="10">
                    <Form.Control
                        value={formik.values.name}
                        name="name"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        type="name" />
                    {formik.touched.name && formik.errors.name &&
                        <Form.Text className="text-danger">formik.errors.name</Form.Text>}
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label column sm="2">Surname</Form.Label>
                <Col sm="10">
                    <Form.Control
                        value={formik.values.surname}
                        name="surname"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        type="name" />
                    {formik.touched.surname && formik.errors.surname &&
                        <Form.Text className="text-danger">formik.errors.surname</Form.Text>}
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput3">
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
    );
}

export default SignUpForm;