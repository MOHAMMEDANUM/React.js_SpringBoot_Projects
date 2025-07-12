import React, { useRef } from "react";
import "./signin.css";
import { Link } from "react-router-dom";

function SignIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  // const loginDataForm = useRef([]);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // const loginData = loginDataForm.current.value;

    // You can connect this with backend auth API
    console.log("Login Attempt:", { email, password });
    // console.log("Login Attempt:", { loginData});

    // Clear fields
    emailRef.current.value = "";
    passwordRef.current.value = "";
    // loginDataForm.current.value="";
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin} >
        <h2>Sign In to DealMart</h2>

        <label>Email</label>
        <input type="email" ref={emailRef} placeholder="Enter your email" required />

        <label>Password</label>
        <input type="password" ref={passwordRef} placeholder="Enter your password" required />

        <button type="submit" className="login-btn">Login</button>

        <p className="signup-redirect">
          Don't have an account? <Link to="/signup">Register here</Link>
        </p>
      </form>
    </div>
  );
}

export default SignIn;
