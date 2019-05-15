import React from "react";
import "./styles";
import { Map } from "./map/map.js";

export default class Card extends React.Component {
  state = {
    data: {
      stationName: "Rambam",
      location: "Haifa",
      bloodType: "A+",
      status: "Critical",
      street: "s1231",
      contact: "0526536395",
      openHours: "11AM - 4PM",
      mapSrc:
        "https://maps.google.com/maps?q=rambam&t=&z=13&ie=UTF8&iwloc=&output=embed"
    },
    display: false
  };

  displayMap = () => {
    this.setState(prevState => {
      return { display: !prevState.display };
    }, console.log(this.state.display));
  };

  render() {
    const {
      stationName,
      bloodType,
      location,
      status,
      street,
      contact,
      openHours,
      mapSrc
    } = this.state.data;
    const display = this.state.display;
    return (
      <div className={display ? "showMore" : "hideAll"}>
        <div className="cardDetails">
          <div className="subContainer">
            <p>
              {stationName},<span>{location}</span>
            </p>
            <p>
              <img
                className="imgDim"
                src="https://img.icons8.com/pastel-glyph/64/000000/--bloodbag.png"
              />
              {bloodType}
            </p>
            <p>{status}</p>
          </div>
          <div className="subContainer">
            <img
              className="imgDim"
              src="https://img.icons8.com/small/64/000000/share.png"
            />
          </div>
          <div className="subContainer">
            <button onClick={this.displayMap}>
              <img
                className="imgDim"
                src="https://img.icons8.com/ios/64/000000/place-marker.png"
              />
            </button>
          </div>
        </div>
        <div className={display ? "show" : "hide"}>
          <Map
            stationName={stationName}
            street={street}
            contact={contact}
            openHours={openHours}
            mapSrc={mapSrc}
          />
        </div>
      </div>
    );
  }
}
