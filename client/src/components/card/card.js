import React from 'react';
import './styles';
import { Map } from './map/map.js';
import { FacebookShareButton, FacebookIcon } from 'react-share';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  render() {
    const {
      num,
      id,
      stationName,
      bloodType,
      location,
      status,
      street,
      contact,
      openHours,
      mapSrc,
      active,
    } = this.props;
    return (
      <>
        <div id={num} className={'card'}>
          <div className="cardDetails">
            <p>{stationName},</p>
            <p>{location},</p>
            <p>
              <img
                className="imgDim"
                src="https://img.icons8.com/pastel-glyph/64/000000/--bloodbag.png"
              />
              {bloodType}
            </p>
            <p>{status}</p>
          </div>

          <div>
            <FacebookShareButton
              children={<FacebookIcon round={true} size={50} />}
              quote="You can save his life! Be his hero"
              hashtag="#Save_A_Life"
              url="https://www.facebook.com/TheDigitalTech/"
            />
          </div>
          <div>
            <a
              href={'#' + num}
              onClick={() => {
                this.props.triggerDisplay(this.props.id);
              }}
            >
              <img className="imgDim" src="https://img.icons8.com/ios/64/000000/place-marker.png" />
            </a>
          </div>
        </div>
        <div className={active ? 'show' : 'hide'}>
          <Map
            stationName={stationName}
            street={street}
            contact={contact}
            openHours={openHours}
            mapSrc={mapSrc}
          />
        </div>
      </>
    );
  }
}
