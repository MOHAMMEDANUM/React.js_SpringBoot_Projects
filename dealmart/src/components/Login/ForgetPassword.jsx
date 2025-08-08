import React from 'react'
import './forgetpassword.css';
import { Link } from 'react-router-dom';

function ForgetPassword() {
  return (
    <>
     <div className="auth-container">
      <form className="auth-form">
        <h1>Reset Password</h1>
        <div className="input-group">
          <label htmlFor="email">Enter your email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <button type="submit" id='send-reset-link'>Send Reset Link</button>
        <p>Remembered your password? <Link to="/signin">Sign In</Link></p>
      </form>
    </div>
    </>
  )
}

export default ForgetPassword