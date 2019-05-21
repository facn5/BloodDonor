import React, { Component } from "react";
import './styles'

class Regform extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bloodType: "",
      validAge: "",
      healthStatus: "",
      recentSurgey: "",
      getNotification: ""
    }
    this.onRadioChange = this.onRadioChange.bind(this)
  }

  handleSubmit = () => {
    console.log('btn clicked');
    const { bloodType, validAge, healthStatus, recentSurgey, getNotification } = this.state;
    fetch('/getProfile/:', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        bloodType,
        validAge,
        healthStatus,
        recentSurgey,
        getNotification
      })
    })
      .then(res => res.json())
      .catch(err => console.log(err));
  }

  onRadioChange(e) {
    console.log(`${e.target.name} = ${e.target.value}`);
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="container">
        <div className="questionCard">
          <p>Please pick your blood type:</p>
          <div className="answersDiv">
            <input type="radio"
              name="bloodType"
              value="A+"
              checked={this.state.bloodType === "A+"}
              onChange={this.onRadioChange} /> A+
            <input type="radio"
              name="bloodType"
              value="A-"
              checked={this.state.bloodType === "A-"}
              onChange={this.onRadioChange} /> A-
              <input type="radio"
              name="bloodType"
              value="B+"
              checked={this.state.bloodType === "B+"}
              onChange={this.onRadioChange} /> B+
              <input type="radio"
              name="bloodType"
              value="B-"
              checked={this.state.bloodType === "B-"}
              onChange={this.onRadioChange} /> B-
              </div>
          <div className="answersDiv">
            <input type="radio"
              name="bloodType"
              value="AB+"
              checked={this.state.bloodType === "AB+"}
              onChange={this.onRadioChange} /> AB+
              <input type="radio"
              name="bloodType"
              value="AB-"
              checked={this.state.bloodType === "AB-"}
              onChange={this.onRadioChange} /> AB-
              <input type="radio"
              name="bloodType"
              value="O+"
              checked={this.state.bloodType === "O+"}
              onChange={this.onRadioChange} /> O+
              <input type="radio"
              name="bloodType"
              value="O-"
              checked={this.state.bloodType === "O-"}
              onChange={this.onRadioChange} /> O-
              </div>
        </div>

        <div className="questionCard">
          <p>Are you older than 18 and wight more 50KG?</p>
          <div className="answersDiv">
            <input type="radio"
              name="validAge"
              value="yes"
              checked={this.state.validAge === "yes"}
              onChange={this.onRadioChange} /> Yes
            <input type="radio"
              name="validAge"
              value="no"
              checked={this.state.validAge === "no"}
              onChange={this.onRadioChange} /> No
          </div>
        </div>

        <div className="questionCard">
          <p>Are you suffering from HIV+, Hypretension, Cardiac arrest, Epilepsy or Diabetics?</p>
          <div className="answersDiv">
            <input type="radio"
              name="healthStatus"
              value="yes"
              checked={this.state.healthStatus === "yes"}
              onChange={this.onRadioChange} /> Yes
            <input type="radio"
              name="healthStatus"
              value="no"
              checked={this.state.healthStatus === "no"}
              onChange={this.onRadioChange} /> No
          </div>
        </div>

        <div className="questionCard">
          <p>Have you gone throw any major surgery since least 6 months?</p>
          <div className="answersDiv">
            <input type="radio"
              name="recentSurgey"
              value="yes"
              checked={this.state.recentSurgey === "yes"}
              onChange={this.onRadioChange} /> Yes
            <input type="radio"
              name="recentSurgey"
              value="no"
              checked={this.state.recentSurgey === "no"}
              onChange={this.onRadioChange} /> No
          </div>
        </div>

        <div className="questionCard">
          <p>Would you like to recieve notification if someone need blood?</p>
          <div className="answersDiv">
            <input type="radio"
              name="getNotification"
              value="yes"
              checked={this.state.getNotification === "yes"}
              onChange={this.onRadioChange} /> Yes
            <input type="radio"
              name="getNotification"
              value="no"
              checked={this.state.getNotification === "no"}
              onChange={this.onRadioChange} /> No
          </div>
        </div>
        <div className="btnContainer">
          <button onClick={this.handleSubmit} className="button">Submit</button>
          <button className="button">Skip</button>
        </div>
      </div>
    );
  }
}

export default Regform;