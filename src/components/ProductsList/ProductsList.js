import React from 'react';
import { connect } from 'react-redux';
import './product-list-styles.css';

class ProductsList extends React.Component {
  render() {
    const { products, productsLoading, productsError } = this.props;

    if (productsLoading) {
      return <div>Loading...</div>;
    }

    if (productsError) {
      return <div>{error.message}</div>;
    }

    return (
      <div className="shop-container">
        <div className="products-listing">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <div className="image-container">
                <img src={product.images[0].src} alt="product Image" className="product-image" />
              </div>
              <div>
                <p>
                  {product.title} <span>Price</span>
                </p>
              </div>
              <div className="button-group">
                <button className="primary-button">Add to Cart</button>
                <button className="secondary-button">Quick View</button>
              </div>
            </div>
          ))}
        </div>
        <div className="shopping-cart">
          <div className="shopping-cart-header">
            <span className="cart-title-text">CART</span>
            <span className="cart-count">0</span>
          </div>

          <div className="cart-item">
            <div>
              <p className="title">Item Name</p>
              <p className="subtitle">Item variant</p>
            </div>
            <span>£ 0</span>
          </div>

          <p className="cart-total">
            <span>Total</span>
            <span>£ 0</span>
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  productsLoading: state.productsLoading,
  productsError: state.productsError,
  products: state.products
});

export default connect(mapStateToProps)(ProductsList);
