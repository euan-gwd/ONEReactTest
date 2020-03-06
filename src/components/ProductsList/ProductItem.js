import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../store/actions';
import Button from '../Buttons/Button';
import Modal from 'react-modal';
import './product-item-styles.css';

const ProductItem = ({ product, addToCart }) => {
  const [isOpen, setModalOpen] = useState(false);
  return (
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
        <Button className="secondary-button" onClick={() => setModalOpen(true)}>
          Quick View
        </Button>
      </div>
      <Modal isOpen={isOpen} className="product-modal" onRequestClose={() => setModalOpen(false)}>
        <div className="product-modal-body">
          <div className="image-container">
            <img src={product.images[0].src} alt="product Image" className="product-image" />
          </div>
          <div className="modal-description">
            <p>{product.title}</p>
            <p>{product.option1}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product))
  };
};

export default connect(null, mapDispatchToProps)(ProductItem);
