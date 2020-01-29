import React from 'react';

import SectionHeading from '../../components/DataDisplay/Headings/SectionHeading';
import ImageCarousel from '../../components/DataDisplay/Carousel/ImageCarousel';

import TeamItem from './TeamItem';

export default function Team() {
  return (
    <section className="section" id="team">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-6">
            <SectionHeading
              heading="Our Team"
              subHeading="With help from our teams, contributors and investors these
                      are the milestones we are looking forward to achieve."
            />
          </div>
        </div>
      </div>
      <div className="container container-xxl">
        <div className="nk-block">
          <div
            className="has-carousel carousel-nav-center"
            data-items={4}
            data-navs="true"
          >
            <TeamItem position="CEO & Founder" />
            <TeamItem />
            <TeamItem />
            <TeamItem />
          </div>
        </div>
        <div className="nk-block block-partners">
          <ImageCarousel title="Our Partners" data={PARTNER_DATA} />
        </div>
        <div className="nk-block block-partners">
          <ImageCarousel title="Great Crypto Projects" data={PROJECT_DATA} />
        </div>
      </div>
    </section>
  );
}

// CONTENT
const PARTNER_DATA = [
  'images/partners/a-light.png',
  'images/partners/b-light.png',
  'images/partners/c-light.png',
  'images/partners/d-light.png',
  'images/partners/e-light.png',
  'images/partners/f-light.png',
  'images/partners/g-light.png'
];

const PROJECT_DATA = [
  'images/partners/a-light.png',
  'images/partners/b-light.png',
  'images/partners/c-light.png',
  'images/partners/d-light.png',
  'images/partners/e-light.png',
  'images/partners/f-light.png',
  'images/partners/g-light.png'
];
