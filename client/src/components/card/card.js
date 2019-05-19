import React from "react";
import "./styles";
import { Map } from "./map/map.js";
import {
  FacebookShareButton,
  FacebookIcon,
  FacebookShareCount
} from "react-share";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      display: false
    };
  }

  displayMap = () => {
    this.setState(prevState => {
      return { display: !prevState.display };
    });
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
    } = this.props;
    const display = this.state.display;
    return (
      <div className={display ? "showMore" : "hideAll"}>
        <div className="cardDetails">
          <div className="subContainer">
            <p>{stationName},</p>
            <p>{location},</p>
            <p>
              <img
                className="imgDim1"
                src="https://img.icons8.com/pastel-glyph/64/000000/--bloodbag.png"
              />
              {bloodType}
            </p>
            <p>{status}</p>
          </div>

          <div className="subContainer facebook">
            <FacebookShareButton
              children={<FacebookIcon round={true} size={40} />}
              quote="You can save his life! Be his hero"
              hashtag="#Save_A_Life"
              url="https://www.facebook.com/TheDigitalTech/"
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
