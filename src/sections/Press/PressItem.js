import React from 'react';

export default function PressItem({ imgSrc = 'images/partners/c-light.png' }) {
  return (
    <div className="col-6 col-sm-4">
      <div className="partner-logo">
        <img src={imgSrc} alt="press" />
      </div>
    </div>
  );
}
