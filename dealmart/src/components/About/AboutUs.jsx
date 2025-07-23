import React from 'react';
import './aboutus.css';

function AboutUs() {
  return (
    <div className="about-container">
      <div className="about-banner">
        <h1>About DealMart</h1>
        <p>Your one-stop online destination for everything you need.</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            DealMart was founded with a simple yet powerful goal – to make online shopping
            seamless, affordable, and accessible to everyone. What started as a college project has 
            now grown into a trusted platform catering to customers all over India. We believe in 
            creating an experience where quality meets affordability and where customers can shop
            with confidence.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            At DealMart, our mission is to empower every shopper with convenience, value, and 
            trust. We aim to simplify the buying process by offering a smooth user interface,
            fast loading pages, secure payments, and quick delivery – all within one 
            beautifully crafted platform.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Vision</h2>
          <p>
            We envision DealMart as a leading e-commerce platform where technology and human
            connection work hand-in-hand. Our future includes smarter product recommendations, 
            a wider catalog, and more personalized experiences for each shopper – while always 
            keeping affordability at the center.
          </p>
        </section>

        <section className="about-section">
          <h2>Customer Commitment</h2>
          <p>
            Everything we build and offer is driven by our commitment to our users. From 
            responsive support to transparent policies, we make sure that your satisfaction is
            always a priority. We believe in building not just a store, but a community.
          </p>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
