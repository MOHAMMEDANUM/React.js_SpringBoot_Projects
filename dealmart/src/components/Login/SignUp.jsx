import React, { useEffect, useRef } from "react";
import "./signup.css";
import { Link } from "react-router-dom";

function SignUp() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const baseURL = import.meta.env.VITE_REACT_APP_BASE_URL;

   const handleSignUp=((e)=>{
    e.preventDefault();

    const user = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    console.log("Signup Data:", user);

      fetch(`${baseURL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),})
 

    // Here you can POST this data to your backend API

    // Reset fields
    nameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
  });

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSignUp}>
        <h2>Create your DealMart Account</h2>

        <label>Full Name</label>
        <input type="text" ref={nameRef} placeholder="Enter your name" required />

        <label>Email</label>
        <input type="email" ref={emailRef} placeholder="Enter your email" required />

        <label>Password</label>
        <input type="password" ref={passwordRef} placeholder="Create a password" required />

        <button type="submit" className="signup-btn">Sign Up</button>

        <p className="login-redirect">
          Already have an account? <Link to="/signin">Login here</Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
