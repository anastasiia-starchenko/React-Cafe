import React, {useEffect, useState} from 'react';
import Product from "./Product.jsx";
import {Spinner} from "react-bootstrap";

const DB_URL = "https://react-cafe-b79eb-default-rtdb.europe-west1.firebasedatabase.app";

function Products(props) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch(`${DB_URL}/products.json`);
            if (!response.ok) {
                throw new Error(`Products were not received`);
            }
            const responseData = await response.json();

            let receivedProducts = [];
            for (let key in responseData) {
                receivedProducts.push({
                    id: key,
                    name: responseData[key]["name"],
                    price: responseData[key]["price"],
                    description: responseData[key]["description"]
                })
            }
            console.log(receivedProducts)
            setProducts(receivedProducts);
        }
        fetchProducts();
    }, [])

    return (
        <div className={"d-flex flex-column align-items-center"}>
            <h2 className={"mb-5 mt-5"}>Products</h2>
            <div style={{width: "70%"}}>
                {products.length === 0 &&
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>}
                {products.length !== 0 &&
                    products.map((product) => <Product key={product.id} product={product}></Product>)}
            </div>
        </div>
    );
}

export default Products;