import React, { Component } from "react";
import cookie from 'react-cookie'
import './styles'

class Regform extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bloodType: "",
      validAge: "",
      healthStatus: "",
      recentSurgery: "",
      getNotification: ""
    }
    this.onRadioChange = this.onRadioChange.bind(this)
    this.onRadioChangeBT = this.onRadioChangeBT.bind(this)
  }

  // componentDidMount() {
  //   let udetails = cookie.load('udetails');
  //   if (udetails) {
  //     udetails = JSON.parse(window.atob(udetails.split('.')[1])).u$u;
  //     if (udetails) {
  //       this.isAuthorized((authorized) => {
  //         if (authorized) {
  //           console.log(udetails);
  //         }
  //       });
  //     }
  //   } else {
  //     console.log("udetails undefined");
  //   }
  // };

  // isAuthorized = (cb) => {
  //   this.setState({ searchStatus: 'checkauth' });
  //   fetch('/checkAuth')
  //     .then(res => {
  //       this.setState({ searchStatus: 'verifyreq' })
  //       return res.json()
  //     })
  //     .then(data => {
  //       console.log('authorized', data.authenticated);
  //       return cb(data.authenticated)
  //     });
  // }

  handleSubmit = () => {
    console.log("btn clicked");
    const { bloodType, validAge, healthStatus, recentSurgery, getNotification } = this.state;
    if (bloodType != "" && validAge != "" && healthStatus != "" && recentSurgery != "" && getNotification != "") {
      let pValidAge = JSON.parse(validAge);
      let pHealthStatus = JSON.parse(healthStatus);
      let pRecentSurgery = JSON.parse(recentSurgery);
      let pGetNotification = JSON.parse(getNotification);
      fetch('/getProfile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          bloodType,
          pValidAge,
          pHealthStatus,
          pRecentSurgery,
          pGetNotification
        })
      })
        .then(res => res.json())
        .catch(err => console.log(err));
    } else {
      fetch('/getProfile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          bloodType,
          validAge,
          healthStatus,
          recentSurgery,
          getNotification
        })
      })
        .then(res => res.json())
        .catch(err => console.log(err));
    }
  }

  onRadioChange(e) {
    let x = JSON.parse(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onRadioChangeBT(e) {
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
              onChange={this.onRadioChangeBT} /> A+
            <input type="radio"
              name="bloodType"
              value="A-"
              checked={this.state.bloodType === "A-"}
              onChange={this.onRadioChangeBT} /> A-
              <input type="radio"
              name="bloodType"
              value="B+"
              checked={this.state.bloodType === "B+"}
              onChange={this.onRadioChangeBT} /> B+
              <input type="radio"
              name="bloodType"
              value="B-"
              checked={this.state.bloodType === "B-"}
              onChange={this.onRadioChangeBT} /> B-
              </div>
          <div className="answersDiv">
            <input type="radio"
              name="bloodType"
              value="AB+"
              checked={this.state.bloodType === "AB+"}
              onChange={this.onRadioChangeBT} /> AB+
              <input type="radio"
              name="bloodType"
              value="AB-"
              checked={this.state.bloodType === "AB-"}
              onChange={this.onRadioChangeBT} /> AB-
              <input type="radio"
              name="bloodType"
              value="O+"
              checked={this.state.bloodType === "O+"}
              onChange={this.onRadioChangeBT} /> O+
              <input type="radio"
              name="bloodType"
              value="O-"
              checked={this.state.bloodType === "O-"}
              onChange={this.onRadioChangeBT} /> O-
              </div>
        </div>

        <div className="questionCard">
          <p>Are you older than 18 and wight more 50KG?</p>
          <div className="answersDiv">
            <input type="radio"
              name="validAge"
              value="true"
              checked={this.state.validAge === "true"}
              onChange={this.onRadioChange} /> Yes
            <input type="radio"
              name="validAge"
              value="false"
              checked={this.state.validAge === "false"}
              onChange={this.onRadioChange} /> No
          </div>
        </div>

        <div className="questionCard">
          <p>Are you suffering from HIV+, Hypretension, Cardiac arrest, Epilepsy or Diabetics?</p>
          <div className="answersDiv">
            <input type="radio"
              name="healthStatus"
              value="true"
              checked={this.state.healthStatus === "true"}
              onChange={this.onRadioChange} /> Yes
            <input type="radio"
              name="healthStatus"
              value="false"
              checked={this.state.healthStatus === "false"}
              onChange={this.onRadioChange} /> No
          </div>
        </div>

        <div className="questionCard">
          <p>Have you gone throw any major surgery since least 6 months?</p>
          <div className="answersDiv">
            <input type="radio"
              name="recentSurgery"
              value="true"
              checked={this.state.recentSurgery === "true"}
              onChange={this.onRadioChange} /> Yes
            <input type="radio"
              name="recentSurgery"
              value="false"
              checked={this.state.recentSurgery === "false"}
              onChange={this.onRadioChange} /> No
          </div>
        </div>

        <div className="questionCard">
          <p>Would you like to recieve notification if someone need blood?</p>
          <div className="answersDiv">
            <input type="radio"
              name="getNotification"
              value="true"
              checked={this.state.getNotification === "true"}
              onChange={this.onRadioChange} /> Yes
            <input type="radio"
              name="getNotification"
              value="false"
              checked={this.state.getNotification === "false"}
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