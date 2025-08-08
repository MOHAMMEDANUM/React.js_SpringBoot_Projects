import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to <span>DealMart</span></h1>
          <p>Your one-stop shop for mobiles, laptops, and fashion wear — all at unbeatable prices!</p>
          <Link to="/product">
            <button className="shop-btn">Shop Now</button>
          </Link>
        </div>
        {/* <div className="hero-image">
          <img
            src="https://img.freepik.com/free-photo/shopping-cart-filled-with-gift-boxes-copy-space_23-2148676540.jpg"
            alt="DealMart Banner"
          />
        </div> */}
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose DealMart?</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Quality" />
            <h4>Top Quality Products</h4>
            <p>We bring you the best brands at amazing prices.</p>
          </div>
          <div className="feature-card">
            <img src="https://cdn-icons-png.flaticon.com/512/263/263115.png" alt="Fast Delivery" />
            <h4>Fast Delivery</h4>
            <p>Lightning-fast shipping across the country.</p>
          </div>
          <div className="feature-card">
            <img src="https://cdn-icons-png.flaticon.com/512/3523/3523880.png" alt="Support" />
            <h4>24/7 Support</h4>
            <p>We’re here to help you any time, any day.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
