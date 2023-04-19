import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <h6>© 2023 Copyright</h6>
        <a className="text-dark" href="/">  Hostorating</a>
      </div>
    </footer>
  );
}

export default Footer;
