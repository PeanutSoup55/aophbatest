
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoAO from '../images/logoAO.png'
import {IoSearch } from 'react-icons/io5';
import { useState } from 'react';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
     
     <div className="logo">
     <Link to="/">
        <img src={logoAO} alt="Logo" className="navbar-logo" />
      </Link>
     </div>

      

      <div className='menu' onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      

      <ul className={menuOpen ? "open" : ""}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Sponsor">Sponsor</Link></li>
        <li><Link to="/Events">Events</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>

      <div className="navbar-right">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="submit">
            <IoSearch/>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
