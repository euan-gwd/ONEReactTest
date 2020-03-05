import React from 'react';
import { connect } from 'react-redux';
import _isEmpty from 'lodash/isEmpty';
import { removeFromCart } from '../../store/actions';
import { FiDelete } from 'react-icons/fi';
import { calculateTotals } from '../utils';
import './cart-styles.css';

const Cart = ({ shoppingCart, removeFromCart }) => {
  const cartTotal = calculateTotals(shoppingCart);
  const tax = (cartTotal * 0.2).toFixed(2);
  return (
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
          {shoppingCart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="item-description">
                <p className="title">{item.title}</p>
                <p className="subtitle">{item.option1}</p>
              </div>
              <div className="item-total">
                <p className="item-price">{`£ ${item.price}`}</p>
                <button className="item-action" onClick={() => removeFromCart(item)}>
                  <FiDelete />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="cart-totals">
        <div className="total-label-container">
          <p className="label-title">Total</p>
          <p className="label-subtitle">{`Inc. £${tax} in taxes`}</p>
        </div>
        <p className="total-price">{`£ ${cartTotal}`}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  shoppingCart: state.shoppingCart
});

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (item) => {
    dispatch(removeFromCart(item));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
