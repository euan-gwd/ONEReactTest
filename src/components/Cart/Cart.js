import React from 'react';
import { connect } from 'react-redux';
import _isEmpty from 'lodash/isEmpty';
import { FiDelete } from 'react-icons/fi';
import './cart-styles.css';

const Cart = ({ shoppingCart, removeFromCart }) => (
  <div className="shopping-cart">
    <div className="shopping-cart-header">
      <span className="cart-title-text">CART</span>
      <span className="cart-count">{shoppingCart.length}</span>
    </div>

    {_isEmpty(shoppingCart) ? (
      <div className="empty-cart">
        <p className="title">No Items in Cart</p>
      </div>
    ) : (
      <div className="cart-container">
        {shoppingCart.map((cartItem) => (
          <div className="cart-item" key={cartItem.id}>
            <div className="item-description">
              <p className="title">{cartItem.title}</p>
              <p className="subtitle">Item variant</p>
            </div>
            <div className="item-total">
              <p className="item-price">{`£ ${cartItem.variants[0].price}`}</p>
              <FiDelete className="item-action" />
            </div>
          </div>
        ))}
      </div>
    )}

    <p className="cart-total">
      <span>Total</span>
      <span>£ 0</span>
    </p>
  </div>
);

const mapStateToProps = (state) => ({
  shoppingCart: state.shoppingCart
});

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (product) => {
    dispatch(removeFromCart(product));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
