import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../store/actions';
import './product-item-styles.css';

const ProductItem = ({ product, addToCart, idx }) => (
  <div key={product.id} className="product-card">
    <div className="image-container">
      <img src={product.images[0].src} alt="product Image" className="product-image" />
    </div>
    <div className="card-content">
      <div className="description">
        <p className="title">{product.title}</p>
        <p>{`£ ${product.price}`}</p>
      </div>
      <p className="size">{product.option1}</p>
    </div>
    <div className="button-group">
      <button className="primary-button" onClick={() => addToCart(product, idx)}>
        Add to Cart
      </button>
      <button className="secondary-button">Quick View</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product, idx) => dispatch(addToCart(product, idx))
  };
};

export default connect(null, mapDispatchToProps)(ProductItem);
