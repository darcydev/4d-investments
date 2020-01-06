import React from 'react';

export default function ImageCarousel({
  title = 'Default Title',
  dataItems = 7,
  dataItemsMobile = 2,
  auto = true,
  loop = true,
  data = [
    'images/partners/a-light.png',
    'images/partners/b-light.png',
    'images/partners/c-light.png'
  ]
}) {
  const MARKUP = data.map((v, i) => (
    <li key={`${i}: ${v}`} className="partner-logo">
      <img src={v} alt="carousel-item" />
    </li>
  ));

  return (
    <div>
      <h6 className="title title-md ttu text-center">{title}</h6>
      <ul
        className="has-carousel partner-list justify-content-center"
        data-items={dataItems}
        data-items-mobile={dataItemsMobile}
        data-auto={auto}
        data-loop={loop}
      >
        {MARKUP}
      </ul>
    </div>
  );
}
