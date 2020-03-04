import React, { Component } from 'react';
import Header from './Header/Header';
import ProductsList from './ProductsList/ProductsList';
import Cart from './Cart/Cart';
import Footer from './Footer/Footer';
import './app-styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="shop-container">
          <ProductsList />
          <Cart />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
