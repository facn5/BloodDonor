import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  NavLink,
  Redirect,
  Prompt
} from "react-router-dom";
import { Header } from "./components/header/header";
import Card from "./components/card/card";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import Inspiration from "./components/inspiration/inspiration";
import Regform from "./components/regform/regform";
import About from "./components/about/about";
import Main from "./components/main.js";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route component={Header} />
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/inspiration" exact component={Inspiration} />
        <Route path="/regform" exact component={Regform} />
        <Route path="/about" exact component={About} />
      </Router>
    );
  }
}
