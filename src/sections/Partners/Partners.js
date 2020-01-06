import React from 'react';

import ImageCarousel from '../../components/DataDisplay/Carousel/ImageCarousel';

export default function Partners() {
  return (
    <div className="nk-block block-partners">
      <ImageCarousel
        title="Our Partners"
        data={[
          'images/partners/a-light.png',
          'images/partners/b-light.png',
          'images/partners/c-light.png',
          'images/partners/d-light.png',
          'images/partners/e-light.png',
          'images/partners/f-light.png',
          'images/partners/g-light.png'
        ]}
      />
    </div>
  );
}
