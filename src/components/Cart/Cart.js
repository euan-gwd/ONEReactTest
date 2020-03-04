import React from 'react';
import { connect } from 'react-redux';
import './cart-styles.css';

class Cart extends React.Component {
  render() {
    const {} = this.props;

    return (
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
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Cart);
