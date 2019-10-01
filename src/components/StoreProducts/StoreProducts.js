import React, { useState } from 'react';
import './StoreProducts.css';
import { storeProducts } from '../../setup-files/data';
import Product from '../Product/Product';
import '../Product/Product.css';
import { Link } from "react-router-dom";



const StoreProducts = () => {
    const [produtos, setProdutos] = useState(storeProducts);

    const addItemToCart = (item) => {
        const addCart = document.querySelector('.add-cart');
        const itemTitle = document.querySelector('#item-title');
        const itemPrice = document.querySelector('#item-price');
        const itemImg = document.querySelector('#item-img');

        itemTitle.innerHTML = item.title;
        itemPrice.innerHTML = `Price: $${item.price}`;
        itemImg.src = item.img;
        itemImg.alt = item.title;

        addCart.classList.remove('close-add-cart');
        addCart.classList.add('show-add-cart');

        setProdutos(produtos.map(produto => {
            if (produto.id === item.id){
                produto.inCart = true;
                produto.count = 1;
                produto.total = produto.price;
            }
            return produto;
        }));
    }

    const closeAddCart = () => {
        const addCart = document.querySelector('.add-cart');

        addCart.classList.remove('show-add-cart');
        addCart.classList.add('close-add-cart')
    }

    return (
        <section className="products-section">
            <h1>Our Products</h1>
            <div className="products-grid">
                {produtos.map(item => (
                    <Product key={item.id} item={item} addItemToCart={addItemToCart} />
                ))}
            </div>

            <div className="add-cart">
                <div className="cart-item">
                    <div className="item-info">
                        <h2>Item Added To Cart</h2>
                        <img src="/img/product-1.png" alt="" id="item-img" />
                        <h4 id="item-title"></h4>
                        <p id="item-price"></p>
                        <Link to="/" className="shopping-btn" onClick={() => closeAddCart()}>Continue Shopping</Link>
                        <Link to="/cart" className="cart-btn">Go To Cart</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StoreProducts;