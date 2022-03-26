import React from 'react';
import './Product.css';
const Product = (props) => {
    return (
        <div className='product'>
            <img src={props.product.img} alt="" />
            <p>{props.product.name}</p>
            <div className='btn-group'>
                <button>ADD TO CART</button>
            </div>
        </div>
    );
};

export default Product;