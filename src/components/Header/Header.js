import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import billboard from './billboard.png';
import Logo from '../Logo/Logo';
import { MdSort, MdShoppingCart } from 'react-icons/md';
import { calculateTotals } from '../utils';
import './header-styles.css';

const Header = ({ shoppingCart }) => {
  const cartTotal = calculateTotals(shoppingCart);
  return (
    <Fragment>
      <div className="App-heading App-flex">
        <Logo />
        <div className="menubar-cart">
          <MdShoppingCart className="icon" />
          <p>{`£ ${cartTotal}`}</p>
          <div className="cart-count">{shoppingCart.length}</div>
        </div>
        <MdSort className="menubar-icon" />
      </div>
      <div>
        <img className="App-hero" src={billboard} alt="hero image" />
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  shoppingCart: state.shoppingCart
});

export default connect(mapStateToProps)(Header);
