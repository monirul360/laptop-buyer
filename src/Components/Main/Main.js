import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
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
                    product.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className="sitebar-container">
                <p>site bar</p>
            </div>
        </div>
    );
};

export default Main;