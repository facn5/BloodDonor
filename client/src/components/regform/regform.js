import React, { Component } from "react";
import './styles'

class Regform extends Component {
  constructor(props) {
    super(props)
    this.state = {
      radio1: false
    }
    this.onRadioChange = this.onRadioChange.bind(this)
  }

  onRadioChange(e) {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <div className="questionCard">
          <input type="radio"
            name="radio1"
            value="yes"
            checked={this.state.radio1 === "yes"}
            onChange={this.onRadioChange} /> Yes

        <input type="radio"
            name="radio1"
            value="no"
            checked={this.state.radio1 === "no"}
            onChange={this.onRadioChange} /> No
          </div>

        <div className="questionCard">
          <input type="radio"
            name="radio1"
            value="yes"
            checked={this.state.radio1 === "yes"}
            onChange={this.onRadioChange} /> Yes

        <input type="radio"
            name="radio1"
            value="no"
            checked={this.state.radio1 === "no"}
            onChange={this.onRadioChange} /> No
          </div>

        <div className="questionCard">
          <input type="radio"
            name="radio1"
            value="yes"
            checked={this.state.radio1 === "yes"}
            onChange={this.onRadioChange} /> Yes

        <input type="radio"
            name="radio1"
            value="no"
            checked={this.state.radio1 === "no"}
            onChange={this.onRadioChange} /> No
          </div>

        <div className="questionCard">
          <input type="radio"
            name="radio1"
            value="yes"
            checked={this.state.radio1 === "yes"}
            onChange={this.onRadioChange} /> Yes

        <input type="radio"
            name="radio1"
            value="no"
            checked={this.state.radio1 === "no"}
            onChange={this.onRadioChange} /> No
          </div>

        <div className="questionCard">
          <input type="radio"
            name="radio1"
            value="yes"
            checked={this.state.radio1 === "yes"}
            onChange={this.onRadioChange} /> Yes

        <input type="radio"
            name="radio1"
            value="no"
            checked={this.state.radio1 === "no"}
            onChange={this.onRadioChange} /> No
          </div>
      </div>
    );
  }
}

export default Regform;