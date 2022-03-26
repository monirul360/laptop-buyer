import React from 'react';
// import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
const Product = (props) => {
    const { name, img } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <p>{name}</p>
            <div className='btn-group'>
                <button onClick={() => props.click(props.product.name)}>ADD TO CART &nbsp; <FontAwesomeIcon style={{ fontSize: "17px" }} icon={faShoppingCart} /></button>
            </div>
        </div>
    );
};

export default Product;