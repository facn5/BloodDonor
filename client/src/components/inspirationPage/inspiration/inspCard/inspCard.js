import React from 'react';
import './inspCard.css';

export const InspCardDetails = ({ description,isVisible }) => (
  <>
    <div className={isVisible?'container-inspCardDetails':'container-inspCardDetails hide'}>
      <div>
        <p className="description">desc hidessssssssssssssssssssssssssssssss sda sda wawd awd awd awd awd awd awd awd awd awd awd awd awd awd awd awd awd awd awd awd awd awd awd awd awd awd awd ad :{description}</p>
      </div>
    </div>
  </>
);
