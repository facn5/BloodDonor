import React, { Component } from "react";
import "./signin.css";

class Signin extends Component {
  state = {
    username: "",
    password: "",
    dbResult: "",
    success: ""
  };
  handleChange = event => {
    if (event.target.name === "username")
      this.setState({ username: event.target.value });
    else if (event.target.name === "password")
      this.setState({ password: event.target.value });
  };
  handleSubmit = () => {
    fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ dbResult: data.result });

        if (data.success) {
          this.setState({ success: "green" });
        } else this.setState({ success: "red" });
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="signInContainer">
        <h1 className="center">Sign in</h1>

        <input
          value={this.state.username}
          onChange={this.handleChange}
          name="username"
          type="text"
          placeholder="username"
        />
        <input
          autoComplete="off"
          value={this.state.password}
          onChange={this.handleChange}
          name="password"
          type="password"
          placeholder="password"
        />

        <button onClick={this.handleSubmit} className="center" type="submit">
          Sign in!
        </button>
        <p style={{ color: this.state.success }}>{this.state.dbResult}</p>
        <h3
          className="center"
          onClick={() => this.props.history.push("/signup")}
        >
          Sign up
        </h3>
      </div>
    );
  }
}

export default Signin;
