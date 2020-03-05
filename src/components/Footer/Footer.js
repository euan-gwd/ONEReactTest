import React from 'react';
import LogoAlt from '../Logo/LogoAlt';
import './footer-styles.css';

const Footer = () => {
  return (
    <div className="footer">
      <LogoAlt />
      <p>©Eclectees Co Ltd. 2018</p>
      <p className="terms">Terms and Conditions | Privacy Policy | Contact Us</p>
    </div>
  );
};

export default Footer;
