import React from 'react';

import SectionHeading from '../../components/DataDisplay/Headings/SectionHeading';
import RoadmapItem from './RoadmapItem';

const data = [
  {
    date: 'March 2018',
    title: '4D Investments Ltd',
    desc: 'Company founded'
  },
  {
    date: 'October 2019',
    title: '4D Markets',
    desc: 'Launched Finland office'
  },
  {
    date: 'November 2019',
    title: '4D Markets',
    desc:
      'Our own marketplace: top assets always, safe and a fair Crypto Exchange.'
  },
  {
    date: 'October 2019',
    title: 'DINT Token',
    desc: 'Launched our token.'
  },
  {
    date: 'November 2019',
    title: '4D Platform',
    desc: 'Developed our own use case.'
  }
];

export default function() {
  const ITEMS_MARKUP = data.map((v, i) => (
    <RoadmapItem
      key={`${i}: ${v.desc}`}
      classes={`roadmap roadmap-s2 roadmap-i${i}`}
      date={v.date}
      title={v.title}
      desc={v.desc}
    />
  ));

  return (
    <section className="section" id="roadmap">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-6">
            <SectionHeading heading="Key Milestones" />
          </div>
        </div>
      </div>
      <div className="container container-xxl">
        <div className="nk-block">
          <div className="roadmap-wrap roadmap-wrap-ovl-right text-center">
            <div className="roadmap-line-s2" />
            <div
              className="roadmap-slider has-carousel carousel-nav-center"
              data-blank="true"
              data-items={data.length}
              data-items-tab-l={data.length - 1}
              data-items-tab-p={data.length - 2}
              data-items-mobile={data.length - 3}
              data-margin={-1}
              data-navs="true"
            >
              {ITEMS_MARKUP}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
