import React from 'react';

import DocumentItem from './DocumentItem';

import SectionHeading from '../../components/DataDisplay/Headings/SectionHeading';
import ImageCarousel from '../../components/DataDisplay/Carousel/ImageCarousel';

const data = [];

export default function Documents() {
  return (
    <section className="section" id="docs">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-6">
            <SectionHeading
              heading="Documents"
              backgroundHeading="Documents"
              subHeading="Download the whitepaper and learn about ICO Token, the unique
                ICO Crypto approach and the team/advisors."
            />
          </div>
        </div>
      </div>
      <div className="container container-xxl">
        <div className="nk-block">
          <div className="row gutter-vr-50px">
            <DocumentItem />
            <DocumentItem />
            <DocumentItem downloadLink="enter doc link" />
          </div>
        </div>
      </div>
      <div className="nk-block block-partners">
        <ImageCarousel title="In the Press" />
      </div>
    </section>
  );
}
