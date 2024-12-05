
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoAO from '../images/logoAO.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logoAO} alt="Logo" className="navbar-logo" />
      </div>
      
      <div className="navbar-center">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Sponsor">Sponsor</Link></li>
          <li><Link to="/Events">Events</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </div>

      <div className="navbar-right">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
