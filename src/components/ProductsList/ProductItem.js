import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../store/actions';
import Button from '../Buttons/Button';
import './product-item-styles.css';

const ProductItem = ({ product, addToCart }) => (
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
      <Button className="primary-button" onClick={() => addToCart(product)}>
        Add to Cart
      </Button>
      <Button className="secondary-button">Quick View</Button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product))
  };
};

export default connect(null, mapDispatchToProps)(ProductItem);
