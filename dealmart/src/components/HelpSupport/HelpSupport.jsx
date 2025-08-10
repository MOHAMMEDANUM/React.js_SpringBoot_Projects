import React from "react";
import "./helpsupport.css";

function HelpSupport() {
  return (
    <div className="help-container">
      <h1>Help & Support</h1>

      {/* Sections */}
      <section id="faqs">
        <h2>FAQs</h2>
        <p>
          {/* Add your FAQ content here */}
          Here you can find answers to frequently asked questions.
        </p>
      </section>

      <section id="return-policy">
        <h2>Return Policy</h2>
        <p>
          {/* Add your Return Policy content here */}
          We accept returns within 30 days of purchase.
        </p>
      </section>

      <section id="shipping-info">
        <h2>Shipping Info</h2>
        <p>
          {/* Add your Shipping Info content here */}
          Shipping usually takes 3-5 business days.
        </p>
      </section>

      <section id="privacy-policy">
        <h2>Privacy Policy</h2>
        <p>
          {/* Add your Privacy Policy content here */}
          Your data is safe with us.
        </p>
      </section>

      <section id="terms-conditions">
        <h2>Terms & Conditions</h2>
        <p>
          {/* Add your Terms & Conditions content here */}
          Please read our terms carefully.
        </p>
      </section>
    </div>
  );
}

export default HelpSupport;
