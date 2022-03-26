import React, { useEffect, useState } from 'react';
import './Main.css'
const Main = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then(Response => Response.json())
            .then(data => setProduct(data));
    }, [])
    return (
        <div className='main-container'>
            <div className="product-container">
                {
                    product.map(product => console.log(product))
                }
            </div>
            <div className="sitebar-container">
                <p>site bar</p>
            </div>
        </div>
    );
};

export default Main;