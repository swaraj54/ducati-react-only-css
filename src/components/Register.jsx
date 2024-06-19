import React from "react";
import "./../styles/login.css";

const Register = () => {
  return (
    <div class="login-container">
      <div class="logo">
        <img src="./images/ducati-logo.png" alt="Ducati Logo" />
      </div>
      <form class="login-form">
        <h1>Register</h1>
        <div class="input-group">
          <input
            placeholder="NAME"
            type="text"
            id="username"
            name="username"
            required
          />
        </div>
        <div class="input-group">
          <input
            placeholder="E-MAIL"
            type="text"
            id="username"
            name="username"
            required
          />
        </div>
        <div class="input-group">
          <input
            placeholder="PASSWORD"
            type="password"
            id="password"
            name="password"
            required
          />
        </div>
        <div className="bottom">
          <p>Forgot Your Password?</p>
          <button type="submit">LOGIN</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
