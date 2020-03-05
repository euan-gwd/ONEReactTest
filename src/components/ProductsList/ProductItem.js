import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addToCart, openProductVariantModal, closeProductVariantModal } from '../../store/actions';
import Modal from 'react-modal';
import './product-item-styles.css';

const ProductItem = ({ product, addToCart, isModalOpen, openModal, closeModal }) => {
  const [selectedVariant, setSelectedVariant] = useState(undefined);

  const handleVariantSelect = (evt) => {
    setSelectedVariant(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const selectedVariantId = Number(selectedVariant);
    const newProduct = {
      ...product,
      variants: product.variants.filter((item) => item.id === selectedVariantId)
    };
    addToCart(newProduct);
  };

  return (
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
        <button className="primary-button" onClick={() => openModal()}>
          Add to Cart
        </button>
        <button className="secondary-button">Quick View</button>
      </div>
      <Modal isOpen={isModalOpen} className="modal" overlayClassName="modal-overlay" onRequestClose={closeModal}>
        <form className="modal-content" onSubmit={handleSubmit}>
          <h3>Please confirm size</h3>
          <select name="select-variant" id="select-variant" value={selectedVariant} onChange={handleVariantSelect}>
            {product.variants.map((variant) => (
              <option key={variant.id} value={variant.id}>
                {variant.title}
              </option>
            ))}
          </select>
          <div className="button-group">
            <button className="primary-button-modal" type="submit" disabled={selectedVariant === undefined}>
              Add to Cart
            </button>
            <button
              className="secondary-button-modal"
              onClick={() => {
                closeModal();
                setSelectedVariant(undefined);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isModalOpen: state.productVariantModalOpen
});

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
    openModal: () => dispatch(openProductVariantModal()),
    closeModal: () => dispatch(closeProductVariantModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
