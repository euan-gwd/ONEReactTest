import React, { Fragment } from 'react';
import billboard from './billboard.png';
import './header-styles.css';

const Header = () => {
  return (
    <Fragment>
      <div className="App-heading App-flex">
        <h2>
          Welcome to <span className="App-react">The Shopping Cart</span>
        </h2>
      </div>
      <div>
        <img className="App-billboard" src={billboard} alt="billboard" />
      </div>
    </Fragment>
  );
};

export default Header;
