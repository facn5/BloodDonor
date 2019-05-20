import React from 'react';
import './inspCard.css';

export const InspCardDetails = ({ description,isVisible }) => (
  <>
    <div className={isVisible?'container-inspCardDetails':'container-inspCardDetails hide'}>
      <div>
        <p className="description">{description}</p>
      </div>
    </div>
  </>
);
