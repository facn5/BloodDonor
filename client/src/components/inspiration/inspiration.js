import React from 'react';
import './style.css';

export const Inspiration = ({ title, imgSrc, desc }) => (
  <>
    <div className='container-inspCard'>
      <div>
        <p className="title">{title}</p>
        <p className="shortDescription">{disc}</p>
      </div>
      <div>
        <img className="img" src={imgSrc} />
      </div>
    </div>
  </>
);
