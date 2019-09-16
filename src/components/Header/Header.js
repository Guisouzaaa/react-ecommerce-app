import React from 'react';
import './Header.css';
import { BrowserRouter as Router , Link } from "react-router-dom";


const Header = () => {
    return (
        <nav className="header-nav">
            <ul className="header-menu">
                <li><Link to="/">Produtos</Link></li>
                <li><Link to="/cart">Carrinho</Link></li>
            </ul>
        </nav>
    )
}

export default Header;