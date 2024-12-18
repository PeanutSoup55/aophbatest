
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import logoAO from '../images/logoAO.png'



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Contact Information:</h3>
          <ul>
            <li>Email: AOPBHA@gmail.com</li>
            <li>Phone: 123-456-7890</li>
            <li>Address: 123 Main St, City, State, ZIP</li>
          </ul>
        </div>
        <div className="footer-middle-l">
        <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Sponsor">Sponsors</Link></li>
            <li><Link to="/Event">Events</Link></li>
            <li><Link to="/Contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-middle-r">
        <ul>
            <li><a href="https://www.facebook.com" >Facebook </a> <FaFacebook size={30} /></li>
            <li><a href="https://www.facebook.com" >Twitter <FaTwitter size={30} /></a></li>
            <li><a href="https://www.facebook.com" >Linkedin <FaLinkedin size={30} /></a></li>
            <li><a href="https://www.facebook.com" >Instagram <FaInstagram size={30} /></a></li>
          </ul>
        </div>
  
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>© {new Date().getFullYear()}AOPHBA. All rights reserved.</p>
        </div>
        <div className="footer-bottom-right">
          <img src={logoAO} alt="Logo" className="navbar-logo" />
        </div>
      </div>

    </footer>
  );
};

export default Footer;
