import React from 'react';
import './ProductDetails.css';
import { BrowserRouter as Router, Link } from "react-router-dom";


const ProductDetails = (props) => {
    return (
        <div>
            <h1 className="product-title">{props.location.state.product.title}</h1>
            <div className="product-details">
                <div className="product-img">
                    <img src={props.location.state.product.img} alt={props.location.state.product.title}/>
                </div>
                <div className="description">
                    <h2>Model : {props.location.state.product.title}</h2>
                    <h3>Made by: {props.location.state.product.company}</h3>
                    <h4>Price : ${props.location.state.product.price}</h4>
                    <span>Some Info About Product : </span>
                    <p>{props.location.state.product.info}</p>
                    <div className="product-buttons">
                        <Link to="/" className="btn-products" >Back To Products</Link>
                        <button className="btn-addcart">{!props.location.state.product.inCart ? 'Add To Cart' : 'In Cart'}</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductDetails;
