import React from 'react';

import SectionHeading from '../../components/DataDisplay/Headings/SectionHeading';
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
            <EcoSystemItem index={1} heading="4DMarkets" />
            <EcoSystemItem index={2} heading="DINT Token" />
            <EcoSystemItem index={3} heading="Financial Consultancy" />
            <EcoSystemItem index={4} heading="4DExchange" />
          </div>
          <div className="bg-image bg-contain bg-bottom-center bg-ecosystems d-none d-sm-block">
            <img src="images/globe-particle.png" alt="globe" />
          </div>
        </div>
      </div>
    </section>
  );
}
