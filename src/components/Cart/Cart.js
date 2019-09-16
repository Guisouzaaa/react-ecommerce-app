import React, { useState } from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem';
import { storeProducts } from '../../setup-files/data';

const Cart = () => {
    const [produtosCarrinho, setProdutosCarrinho] = useState(storeProducts);

    const addProductCount = (id) => {
        setProdutosCarrinho(produtosCarrinho.map(produto => {
            if (produto.id === id) {
                produto.count = produto.count + 1;
                produto.total = (produto.price * produto.count);
            }
            return produto;
        }));
    }

    const removeProductCount = (id) => {
        setProdutosCarrinho(produtosCarrinho.map(produto => {
            if (produto.id === id) {
                produto.count = produto.count - 1;
                produto.total = (produto.price * produto.count);
                if (produto.count < 1) {
                    produto.inCart = false;
                }
            }
            return produto;
        }));
    }

    const removeFromCart = (id) => {
        setProdutosCarrinho(produtosCarrinho.map(produto => {
            if (produto.id === id) {
                produto.inCart = false;
                produto.count = 0;
                produto.total = 0;
            }
            return produto;
        }));
    }

    const clearCart = () => {
        setProdutosCarrinho(produtosCarrinho.map(produto => {
            produto.inCart = false;
            produto.count = 0;
            produto.total = 0;
            return produto;
        }))
    }

    const getTotal = () => {
        let total = 0;
        produtosCarrinho.map(produtos => {
            total = total + produtos.total;
        });
        return total;
    }

    return (
        <section className="cart-section">
            <h1>Seu Carrinho</h1>
            {produtosCarrinho.map(produtos => {
                if (produtos.inCart) {
                    return <CartItem key={produtos.id}
                        produtos={produtos}
                        addProductCount={addProductCount}
                        removeProductCount={removeProductCount}
                        removeFromCart={removeFromCart}
                    />
                }
            })
            }
            <div className="cart-total">
                <button className="btn-clear" onClick={() => clearCart()}>CLEAR CART</button>
                <h3>Total : ${getTotal()}</h3>
            </div>
        </section>
    )
}
export default Cart;
