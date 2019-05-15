import React from 'react';
import './style.css';

export const Map = ({ stationName, street, contact, openHours, mapSrc }) => (
  <>
  <div className='container-map'>
    <iframe className="map" src={mapSrc}></iframe>
    <div className="detailsBg">
        </div>
    <div className="details ">
      <p><img src="https://img.icons8.com/wired/64/000000/hospital-3.png"/>  {stationName}</p>
      <p><img src="https://img.icons8.com/ios/50/000000/route-sign.png"/>   {street}</p>
      <p><img src="https://img.icons8.com/ios/50/000000/phone.png"/>   {contact}</p>
      <p><img src="https://img.icons8.com/pastel-glyph/64/000000/clock.png"/>   {openHours}</p>
    </div>
  </div>
  </>
);
