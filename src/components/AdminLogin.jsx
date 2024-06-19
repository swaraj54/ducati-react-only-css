import React from "react";
import "./../styles/login.css";

const AdminLogin = () => {
  return (
    <div class="login-container">
      <div class="logo">
        <img src="./images/ducati-logo.png" alt="Ducati Logo" />
      </div>
      <form class="login-form">
        <h1>Admin Login</h1>
        <div class="input-group">
          <input
            placeholder="ADMIN E-MAIL"
            type="text"
            id="username"
            name="username"
            required
          />
        </div>
        <div class="input-group">
          <input
            placeholder="ADMIN PASSWORD"
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

export default AdminLogin;
