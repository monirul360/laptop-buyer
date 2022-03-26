import React from 'react';
// import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
const Product = (props) => {
    return (
        <div className='product'>
            <img src={props.product.img} alt="" />
            <p>{props.product.name}</p>
            <div className='btn-group'>
                <button>ADD TO CART &nbsp; <FontAwesomeIcon style={{ fontSize: "17px" }} icon={faShoppingCart} /></button>
            </div>
        </div>
    );
};

export default Product;