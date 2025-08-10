import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* DealMart Info */}
        <div className="footer-section about">
          <h2>DealMart</h2>
          <p>Your one-stop shop for mobiles, laptops, fashion, kitchenware & more. Fast delivery, verified products, and secure shopping experience.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/product">Products</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/signin">Login / Sign Up</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div className="footer-section categories">
          <h3>Shop By Category</h3>
          <ul>
            <li><a href="#">Mobiles</a></li>
            <li><a href="#">Laptops</a></li>
            <li><a href="#">Clothing</a></li>
            <li><a href="#">Shoes</a></li>
            <li><a href="#">Watches</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-section support">
          <h3>Help & Support</h3>
          <ul>
          <li><HashLink to="/helpsupport#faqs">FAQs</HashLink></li>
          <li><HashLink to="/helpsupport#return-policy">Return Policy</HashLink></li>
          <li><HashLink to="/helpsupport#shipping-info">Shipping Info</HashLink></li>
          <li><HashLink to="/helpsupport#privacy-policy">Privacy Policy</HashLink></li>
          <li><HashLink to="/helpsupport#terms-conditions">Terms & Conditions</HashLink></li>
        </ul>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} DealMart. All rights reserved.</p>
        <div className="socials">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
