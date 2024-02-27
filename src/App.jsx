import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header.jsx";
import Products from "./components/Products.jsx";
import { ToastContainer} from 'react-toastify';

function App() {

  return (
    <>
        <ToastContainer position="bottom-right" ></ToastContainer>
        <Header></Header>
        <Products></Products>
    </>
  )
}

export default App
