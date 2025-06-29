import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Main Content */}
        <div className="footer-content">
          {/* Left Section */}
          <div className="footer-brand">
            <h3 className="footer-logo">Signature Interiors</h3>
            <p className="footer-tagline">
              Crafting timeless spaces that blend functionality with exceptional design.
            </p>
            <div className="footer-social">
              <a href="instagram.com" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#c8a97e">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="pintrest.com" aria-label="Pinterest">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#c8a97e">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="houz.com" aria-label="Houzz">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#c8a97e">
                  <path d="M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0zm0 22.02c-5.52 0-10.02-4.5-10.02-10.02S6.48 1.98 12 1.98 22.02 6.48 22.02 12 17.52 22.02 12 22.02zm4.755-11.475h-3.6v2.58h2.04v1.8h-2.04v2.58h-1.8v-2.58H9.6v-1.245l3.555-4.935h1.8v1.575h.6v1.8z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Middle Section */}
          <div className="footer-nav">
            <div className="footer-nav-column">
              <h4>Explore</h4>
              <ul>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/blog">Design Blog</Link></li>
              </ul>
            </div>
            <div className="footer-nav-column">
              <h4>Services</h4>
              <ul>
                <li><Link to="/services/residential">Residential</Link></li>
                <li><Link to="/services/commercial">Commercial</Link></li>
                <li><Link to="/services/lighting">Lighting</Link></li>
                <li><Link to="/services/space-planning">Space Planning</Link></li>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="footer-contact">
            <h4>Contact</h4>
            <address>
              <p>123 Design Avenue</p>
              <p>New York, NY 10001</p>
              <p><a href="mailto:hello@signature.com">hello@signature.com</a></p>
              <p><a href="tel:+15551234567">+1 (555) 123-4567</a></p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Signature Interiors. All rights reserved.</p>
          <div className="legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;