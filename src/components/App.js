import React, { Component } from 'react';
import Header from './Header/Header';
import ProductsList from './ProductsList/ProductsList';
import './app-styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <ProductsList />
        </div>
      </div>
    );
  }
}

export default App;
