import React from 'react';

export default function EcoSystemItem({
  index = 1,
  heading = 'Template Heading',
  content = 'One International Marketplace that combines online store and services around the world'
}) {
  return (
    <div className="col-lg-3 col-sm-6">
      <div className={`feature feature-s6 feature-s6-${index}`}>
        <div className="feature-text">
          <h5 className="title title-sm ttu">{heading}</h5>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}
