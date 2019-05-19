import React from 'react';
import './inspCard.css';

export const InspCardDetails = ({ imgSrc, description }) => (
  <>
    <div className='container-inspCardDetails'>
      <div>
        <img className="img" src={imgSrc} />
      </div>
      <div>
        <p className="description">desc hide:{description}</p>
      </div>
    </div>
  </>
);
