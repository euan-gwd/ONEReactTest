import React, { Fragment } from 'react';
import billboard from './billboard.png';
import Logo from '../Logo/Logo';
import { FiAlignRight } from 'react-icons/fi';
import './header-styles.css';

const Header = () => {
  return (
    <Fragment>
      <div className="App-heading App-flex">
        <Logo />
        <FiAlignRight className="menubar-icon" />
      </div>
      <div>
        <img className="App-hero" src={billboard} alt="hero image" />
      </div>
    </Fragment>
  );
};

export default Header;
