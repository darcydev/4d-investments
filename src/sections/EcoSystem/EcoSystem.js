import React from 'react';

import SectionHeading from '../../components/display/Headings/SectionHeading';
import EcoSystemItem from './EcoSystemItem';

export default function EcoSystem() {
  return (
    <section className="section" id="ecosystems">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-6">
            <SectionHeading
              heading="4D Ecosystem"
              backgroundHeading="4D Ecosystem"
            />
          </div>
        </div>
      </div>
      <div className="container container-xxl">
        <div className="nk-block">
          <div className="row text-center align-items-lg-start gutter-vr-40px">
            <EcoSystemItem index={1} />
            <EcoSystemItem index={2} />
            <EcoSystemItem index={3} />
            <EcoSystemItem index={4} />
          </div>
          <div
            className="bg-image bg-contain bg-bottom-center bg-ecosystems animated d-none d-sm-block"
            data-animate="fadeInUp"
            data-delay="0.2"
          >
            <img src="images/globe-particle.png" alt="globe" />
          </div>
        </div>
      </div>
    </section>
  );
}
