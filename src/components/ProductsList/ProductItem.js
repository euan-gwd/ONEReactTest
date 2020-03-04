import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../store/actions';
import './product-list-styles.css';

const ProductItem = ({ product, addToCart }) => (
  <div key={product.id} className="product-card">
    <div className="image-container">
      <img src={product.images[0].src} alt="product Image" className="product-image" />
    </div>
    <div className="card-content">
      <div className="description">
        <p className="title">{product.title}</p>
        <p>{`£ ${product.variants[0].price}`}</p>
      </div>
    </div>
    <div className="button-group">
      <button className="primary-button" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
      <button className="secondary-button">Quick View</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product))
  };
};

export default connect(null, mapDispatchToProps)(ProductItem);
