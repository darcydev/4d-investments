import React from 'react';

import SectionHeading from '../../components/DataDisplay/Headings/SectionHeading';
import Partners from '../Partners/Partners';

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
        <Partners />
      </div>
    </section>
  );
}
