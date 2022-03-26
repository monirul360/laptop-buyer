import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Main.css'
const Main = () => {
    const [product, setProduct] = useState([]);
    const [show, setShow] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then(Response => Response.json())
            .then(data => setProduct(data));
    }, [])
    const click = (product) => {
        const newShow = [...show, product];
        setShow(newShow);
    }

    const random = () => {
        const select = document.getElementById("show-name-content");
        select.textContent = '';
        const create = document.createElement("p");
        create.classList.add('random');
        select.appendChild(create);
        let showRendom = show[Math.floor(Math.random() * show.length)];
        create.innerText = showRendom;

    }

    const remove = () => {
        const select = document.getElementById("show-name-content");
        select.innerText = '';
    }

    return (
        <div className='main-container'>
            <div className="product-container">
                {
                    product.map(product => <Product
                        key={product.id}
                        product={product}
                        click={click}
                    ></Product>)
                }
            </div>
            <div className="Selected-container">
                <p>Selected Clothes </p>
                <div id='show-name-content'>
                    {
                        show.map(show => <p id='showName' key={show}>{show}</p>)
                    }
                </div>
                <button onClick={random} id='chose1'>CHOOSE 1 FOR ME</button>
                <br />

                <button onClick={remove} id='chose2'>CHOOSE AGAIN</button>
            </div>
        </div >
    );
};

export default Main;