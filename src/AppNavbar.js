import React from 'react';
import './AppNavbar.css';

function AppNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Hostorating</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav navi">
      <li className="nav-item">
        <a className="nav-link" href="#Contact-us">Contact Us</a>
      </li>
      <li className="nav-item">
        <button type="button" className="btn btn-outline-secondary">Sign in</button>
      </li>
    </ul>
  </div>
</nav>

  );
}

export default AppNavbar;
