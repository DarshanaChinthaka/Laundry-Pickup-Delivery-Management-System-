import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container">© {new Date().getFullYear()} LaundryPro — Built with care</div>
  </footer>
);

export default Footer;
