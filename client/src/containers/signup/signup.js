import React, { Component } from 'react';
import './signup.css';

class Signup extends Component {
  state = {
    username: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    dbResult: '',
    success: ''
  };
  handleChange = event => {
    if (event.target.name == 'username')
      this.setState({ username: event.target.value });
    else if (event.target.name == 'password')
      this.setState({ password: event.target.value });
    else if (event.target.name == 'confirmPassword')
      this.setState({ confirmPassword: event.target.value });
    else this.setState({ phoneNumber: event.target.value });
  };
  handleSubmit = () => {
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        phoneNumber: this.state.phoneNumber
      })
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ dbResult: data.result });

        if (data.success) this.setState({ success: 'green' });
        else this.setState({ success: 'red' });
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="signupContainer">
        <h1 className="center">Sign ups</h1>
        <input
          value={this.state.username}
          onChange={this.handleChange}
          name="username"
          placeholder="Username"
          type="text"
        />
        <input
          autoComplete="true"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          placeholder="Password"
          type="password"
        />
        <input
          autoComplete="true"
          name="confirmPassword"
          value={this.state.confirmPassword}
          onChange={this.handleChange}
          placeholder="Retype password"
          type="password"
        />
        <input
          name="phoneNumber"
          value={this.state.phoneNumber}
          onChange={this.handleChange}
          placeholder="Phone number"
          type="tel"
        />
        <button onClick={this.handleSubmit} name="submit">
          Signup!
        </button>
        <p style={{ color: this.state.success }}>{this.state.dbResult}</p>
      </div>
    );
  }
}

export default Signup;
