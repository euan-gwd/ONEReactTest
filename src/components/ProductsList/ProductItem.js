import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../store/actions';
import './product-item-styles.css';

const ProductItem = ({ product, addToCart }) => {
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
      <form className="size-select-form" onSubmit={handleSubmit}>
        <select name="select-variant" id="select-variant" value={selectedVariant} onChange={handleVariantSelect}>
          {product.variants.map((variant) => (
            <option key={variant.id} value={variant.id}>
              {variant.title}
            </option>
          ))}
        </select>
        <div className="button-group">
          <button className="primary-button" type="submit" disabled={selectedVariant === undefined}>
            Add to Cart
          </button>
          <button className="secondary-button">Quick View</button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product))
  };
};

export default connect(null, mapDispatchToProps)(ProductItem);
