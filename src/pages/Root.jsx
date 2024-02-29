import React from 'react';
import {ToastContainer} from "react-toastify";
import Header from "../components/Header.jsx";
import {Outlet} from "react-router-dom";
import CartModal from "../components/CartModal.jsx";
import {useState} from "react";


function Root(props) {
    return (
        <div>
            <CartModal></CartModal>
            <ToastContainer position="bottom-right" ></ToastContainer>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
}

export default Root;