import React from 'react';
import { connect } from 'react-redux';
import _isEmpty from 'lodash/isEmpty';
import './cart-styles.css';

class Cart extends React.Component {
  render() {
    const { shoppingCart } = this.props;

    return (
      <div className="shopping-cart">
        <div className="shopping-cart-header">
          <span className="cart-title-text">CART</span>
          <span className="cart-count">0</span>
        </div>

        {_isEmpty() ? (
          <div className="empty-cart">
            <p className="title">No Items in Cart</p>
          </div>
        ) : (
          <div className="cart-item">
            {console.log(shoppingCart)}
            <div>
              <p className="title">Item Name</p>
              <p className="subtitle">Item variant</p>
            </div>
            <span>£ 0</span>
          </div>
        )}

        <p className="cart-total">
          <span>Total</span>
          <span>£ 0</span>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  shoppingCart: state.shoppingCart
});

export default connect(mapStateToProps)(Cart);
