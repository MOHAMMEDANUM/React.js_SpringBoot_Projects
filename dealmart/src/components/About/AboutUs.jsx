import React from "react";
import "./aboutus.css";

function AboutUs() {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About DealMart</h1>
        <p>Your Trusted Partner in Online Shopping</p>
      </header>

      <section className="mission-vision">
        <div className="box">
          <h2>Our Mission</h2>
          <p>
            To make online shopping fast, affordable, and trustworthy for every Indian
            household by offering top-quality products across all categories at the best prices.
          </p>
        </div>
        <div className="box">
          <h2>Our Vision</h2>
          <p>
            To be India’s most customer-centric platform, where people can discover
            anything they want to buy online—efficiently, securely, and affordably.
          </p>
        </div>
      </section>

      <section className="our-story">
        <h2>Our Journey</h2>
        <p>
          DealMart was launched with a simple idea: make shopping easy for everyone.
          From mobile phones and electronics to clothing and kitchenware, we’ve brought
          together everything in one place.
        </p>
        <p>
          What started as a student-level passion project has now grown into a platform
          trusted by hundreds of users across India. With an easy-to-use interface,
          secure checkout, and fast delivery service, we are committed to making your
          shopping experience smooth and enjoyable.
        </p>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="member-card">
            <img src="https://i.imgur.com/3GvwNBf.png" alt="Founder" />
            <h4>Mohammed Anum</h4>
            <p>Founder & Frontend Developer</p>
          </div>
          <div className="member-card">
            <img src="https://i.imgur.com/OWtHz7u.png" alt="Co-Founder" />
            <h4>Rahul Verma</h4>
            <p>Backend & Deployment</p>
          </div>
        </div>
      </section>

      <section className="trust-section">
        <h2>Why People Trust DealMart</h2>
        <ul>
          <li>✅ Fast & Safe Checkout</li>
          <li>✅ Verified Sellers & Authentic Products</li>
          <li>✅ 24/7 Customer Support</li>
          <li>✅ Easy Returns & Refunds</li>
        </ul>
      </section>
    </div>
  );
}

export default AboutUs;
