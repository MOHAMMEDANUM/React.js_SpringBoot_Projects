import React, { useEffect, useRef } from "react";
import "./signin.css";
import { Link } from "react-router-dom";

 function SignIn(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  // const loginDataForm = useRef([]);

      
    

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // const loginData = loginDataForm.current.value;

    // You can connect this with backend auth API
    console.log("Login Attempt:", { email, password });
    // console.log("Login Attempt:", { loginData});

    

      let res
      let fetchSignUpData = await fetch("http://localhost:8080/login")
      res = await fetchSignUpData.json()
      console.log(res);

      console.log(res[0].email);
      console.log(res[0].password);

      let signupEmail=res[0].email
      let signupPassword = res[0].password


      if(signupEmail===email && signupPassword===password){
        console.log("Login successfully Beta");
        
        props.setFlagAdminLogin(true)

      }
      else{
        console.log("Nalla Error");
        
      }
      







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
