import React from 'react';
import Header from './components/Header/Header';
import StoreProducts from './components/StoreProducts/StoreProducts';
import Cart from './components/Cart/Cart';
import ProductDetails from './components/ProductDetails/ProductDetails'
import { BrowserRouter as Router, Route  } from "react-router-dom";


function App() {
  return (
    <Router>
      <>
        <Header />
      </>

      <Route exact path="/" component={StoreProducts} />
      <Route path="/cart" component={Cart} />
      <Route path="/details" component={ProductDetails} />
    </Router>
  );
}

export default App;
