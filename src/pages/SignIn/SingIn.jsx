import React, { useState } from "react";
import Navbar from '../../components/navbar/navbar';
import "./SignIn.css";

const SignIn = () => {
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const validUsername = "admin";
    const validPassword = "password123";

    const enteredUsername = event.target.email.value;
    const enteredPassword = event.target.password.value;

    if (enteredUsername === validUsername && enteredPassword === validPassword) {
      window.location.href = "/Landing-Page-with-sign-in/index.html";
    } else {
      setErrorMessageVisible(true);
    }
  };

  return (
    <div className="signin-body">
      <Navbar />
      <div className="signin-container">
        <div className="signin-box">
          <h1>Sign In</h1>
          <p>Welcome back! Plan your next journey effortlessly.</p>
          <form id="signin-form" onSubmit={handleSubmit}>
            <div className="signin-input-group">
              <label htmlFor="email">Email/Username</label>
              <input type="text" id="email" name="email" required />
            </div>
            <div className="signin-input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">Sign In</button>
            {errorMessageVisible && (
              <p className="signin-error-message">Invalid credentials. Try again.</p>
            )}
            <div className="signin-links">
              <a href="#">Forgot Password?</a>
              <a href="#">Create an Account</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
