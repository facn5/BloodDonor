import React, { Component } from "react";
import "./signup.css";

const Signup = () => (
  <div className="signupContainer">
    <h1 className="center">Sign up</h1>
    <form method="POST" action="/signup">
      <input name="username" placeholder="Username" type="text" />
      <input
        autoComplete="off"
        name="password"
        placeholder="Password"
        type="password"
      />
      <input autoComplete="off" placeholder="Retype password" type="password" />
      <input name="phoneNumber" placeholder="Phone number" type="tel" />
      <button type="submit" name="submit">
        Signup!
      </button>
    </form>
  </div>
);

export default Signup;
