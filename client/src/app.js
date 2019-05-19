import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "./components/header/header";
import Login from "./components/login/login";
import Signup from "./containers/signup/signup";
import { InspirationPage } from "./components/inspirationPage/inspirationPage";
import Regform from "./components/regform/regform";
import About from "./containers/about/about";
import Main from "./components/main.js";

const app = () => {
  return (
    <Router>
      <Route component={Header} />
      <Route path="/" exact component={Main} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/inspiration" exact component={InspirationPage} />
      <Route path="/regform" exact component={Regform} />
      <Route path="/about" exact component={About} />
    </Router>
  );
};

export default app;
