import React from 'react';
import './style.css';
import  {InspCardDetails}  from "./inspCard/inspCard.js";

export const Inspiration = ({ title, imgSrc, desc }) => (
  <>
    <div className='container-inspCard'>
     <div className='container-card'>
        <div>
          <img className="img" src={imgSrc} />
        </div>
        <div>
          <p className="title">{title}</p>
          <p className="shortDescription">{disc}</p>
        </div>
     </div>
      <div>
          <InspCardDetails imgSrc={imgSrc}  description={desc}/>
      </div>
    </div>
  </>
);
