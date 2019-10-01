import React from 'react';
import './Product.css';
import { Link } from "react-router-dom";

const Product = ({ item, addItemToCart }) => {
    return (
        <>
            <div className="product">
                <img src={`/${item.img}`} alt={item.title} />
                <Link className="product-description" to={{ pathname: "/details", state: { product: item } }} >
                    <p>{item.title}</p>
                    <p>${item.price}</p>
                </Link>
                {
                    item.inCart ? <i className="fas fa-shopping-cart" onClick={() => addItemToCart(item)}>In Cart</i> :
                    <i className="fas fa-shopping-cart" onClick={() => addItemToCart(item)}></i>
                }
            </div>
        </>
    )
}

export default Product;