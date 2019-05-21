import React, { Component } from 'react';
import './signup.css';

class Signup extends Component {
  state = {
    username: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    dbResult: '',
    success: '',
    borders: {
      username: 'black',
      password: 'black',
      confirmPassword: 'black',
      phoneNumber: 'black'
    }
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

  checkValues = () => {
    const { username, password, confirmPassword, phoneNumber } = this.state;

    if (!/\d/.test(phoneNumber) || phoneNumber.length !== 10)
      this.setState(prevState => ({
        success: 'red',
        borders: {
          ...prevState.borders,
          phoneNumber: 'red'
        }
      }));
    else
      this.setState(prevState => ({
        borders: {
          ...prevState.borders,
          phoneNumber: 'black'
        }
      }));
    if (username.length < 3)
      this.setState(prevState => ({
        success: 'red',
        borders: {
          ...prevState.borders,
          username: 'red'
        }
      }));
    else
      this.setState(prevState => ({
        borders: {
          ...prevState.borders,
          username: 'black'
        }
      }));
    if (password.length < 6)
      this.setState(prevState => ({
        success: 'red',
        borders: {
          ...prevState.borders,
          password: 'red'
        }
      }));
    else
      this.setState(prevState => ({
        borders: {
          ...prevState.borders,
          password: 'black'
        }
      }));
    if (!/\d/.test(password) || /^\d+$/.test(password))
      this.setState(prevState => ({
        success: 'red',
        borders: {
          ...prevState.borders,
          password: 'red'
        }
      }));
    else
      this.setState(prevState => ({
        borders: {
          ...prevState.borders,
          password: 'black'
        }
      }));
    if (confirmPassword !== password || confirmPassword.length === 0)
      this.setState(prevState => ({
        success: 'red',
        borders: {
          ...prevState.borders,
          confirmPassword: 'red'
        }
      }));
    else
      this.setState(prevState => ({
        borders: {
          ...prevState.borders,
          confirmPassword: 'black'
        }
      }));
  };

  handleSubmit = () => {
    const { username, password, confirmPassword, phoneNumber } = this.state;

    if (!username || !password || !confirmPassword || !phoneNumber)
      this.setState({
        success: 'red',
        dbResult: 'You must fill all fields!',
        borders: {
          username: 'red',
          password: 'red',
          confirmPassword: 'red',
          phoneNumber: 'red'
        }
      });
    else if (
      username.trim() === '' ||
      password.trim() === '' ||
      confirmPassword.trim() === '' ||
      phoneNumber.trim() === ''
    )
      this.setState({
        success: 'red',
        dbResult: 'You must fill all fields!'
      });
    else if (!/\d/.test(phoneNumber) || phoneNumber.length !== 10)
      this.setState(prevState => ({
        success: 'red',
        dbResult: 'Phonenumber is invalid!',
        borders: {
          ...prevState.borders,
          phoneNumber: 'red'
        }
      }));
    else if (username.length < 3)
      this.setState(prevState => ({
        success: 'red',
        dbResult: 'username must be more than 3 characters',
        borders: {
          ...prevState.borders,
          username: 'red'
        }
      }));
    else if (password.length < 6)
      this.setState(prevState => ({
        success: 'red',
        dbResult: 'Password must be more than 6 characters',
        borders: {
          ...prevState.borders,
          password: 'red'
        }
      }));
    else if (!/\d/.test(password) || /^\d+$/.test(password))
      this.setState(prevState => ({
        success: 'red',
        dbResult: 'Password must have both characters and numbers',
        borders: {
          ...prevState.borders,
          password: 'red'
        }
      }));
    else if (confirmPassword !== password)
      this.setState(prevState => ({
        success: 'red',
        dbResult: 'Passwords are not matching!',
        borders: {
          ...prevState.borders,
          confirmPassword: 'red'
        }
      }));
    else {
      fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password,
          phoneNumber
        })
      })
        .then(res => res.json())
        .then(data => {
          this.setState({ dbResult: data.result });

          if (data.success){
            this.setState({
              success: 'green',
              borders: {
                username: 'green',
                password: 'green',
                confirmPassword: 'green',
                phoneNumber: 'green'
              }
            });
             this.props.history.push('/');
          }
          else this.setState({ success: 'red' });
        })
        .catch(err => console.log(err));
    }
  };
  render() {
    const {
      username,
      password,
      confirmPassword,
      phoneNumber,
      success,
      dbResult,
      borders
    } = this.state;
    return (
      <div className="signupContainer">
        <h1 className="center">Sign up</h1>
        <input
          value={username}
          onChange={this.handleChange}
          name="username"
          placeholder="Username"
          type="text"
          onBlur={this.checkValues}
          style={{ borderColor: borders.username }}
        />
        <input
          autoComplete="off"
          name="password"
          value={password}
          onChange={this.handleChange}
          placeholder="Password"
          type="password"
          onBlur={this.checkValues}
          style={{ borderColor: borders.password }}
        />
        <input
          autoComplete="off"
          name="confirmPassword"
          value={confirmPassword}
          onChange={this.handleChange}
          placeholder="Retype password"
          type="password"
          onBlur={this.checkValues}
          style={{ borderColor: borders.confirmPassword }}
        />
        <input
          name="phoneNumber"
          value={phoneNumber}
          onChange={this.handleChange}
          placeholder="Phone number"
          type="tel"
          onBlur={this.checkValues}
          style={{ borderColor: borders.phoneNumber }}
        />
        <button onClick={this.handleSubmit} name="submit">
          Signup!
        </button>
        <p style={{ color: success }}>{dbResult}</p>
      </div>
    );
  }
}

export default Signup;
