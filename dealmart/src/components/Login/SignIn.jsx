import React, { useEffect, useRef } from "react";
import "./signin.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

 function SignIn(props) {
   const emailRef = useRef();
   const passwordRef = useRef();
   const baseURL = import.meta.env.VITE_BASE_URL;
   const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();

    const signInemail = emailRef.current.value;
    const signInpassword = passwordRef.current.value;

    // You can connect this with backend auth API
    console.log("Login Attempt:", { signInemail, signInpassword });

      let res
      let fetchSignUpData = await fetch(`${baseURL}/login`)
      res = await fetchSignUpData.json()

      console.log(res[0].email);
      console.log(res[0].password);

      let signupEmail=res[0].email
      let signupPassword = res[0].password

      if(signupEmail===signInemail && signupPassword===signInpassword){
        console.log("Login successfully Beta");
        navigate('/admin');
        props.setFlagAdminLogin(true)
      }
      else{
        console.log("Nalla Error");
      }
      
    // Clear fields
    emailRef.current.value = "";
    passwordRef.current.value = "";

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

        <p className="forgot-password">
          <Link to="/forgot-password" >Forgot Password?</Link>
        </p>

        <p className="signup-redirect">
          Don't have an account? <Link to="/signup">Register here</Link>
        </p>
      </form>
    </div>
  );
}
export default SignIn;
