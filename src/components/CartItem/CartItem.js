import React from 'react'
import './CartItem.css';

const CartItem = ({ produtos, addProductCount, removeProductCount, removeFromCart }) => {
    return (
        <>
            <table className="cart-table">
                <thead>
                    <tr className="cart-thead">
                        <th>PRODUCTS</th>
                        <th>NAME OF PRODUCT</th>
                        <th>PRICE</th>
                        <th>QUANTITY</th>
                        <th>REMOVE</th>
                        <th>TOTAL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img src={`/${produtos.img}`} alt={produtos.title} />
                        </td>
                        <td>
                            <p>{produtos.title}</p>
                        </td>
                        <td>
                            <p>${produtos.price}</p>
                        </td>
                        <td>
                            <button className="btn-remove" onClick={() => removeProductCount(produtos.id)}>-</button>
                            <span className="item-count">{produtos.count}</span>
                            <button className="btn-add" onClick={() => addProductCount(produtos.id)}>+</button>
                        </td>
                        <td>
                            <i className="fas fa-trash-alt" onClick={() => removeFromCart(produtos.id)}></i>
                        </td>
                        <td>
                            <p>Item Total: ${produtos.total}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default CartItem;
