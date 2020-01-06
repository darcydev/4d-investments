import React from 'react';

import PressItem from './PressItem';

import SectionHeading from '../../components/DataDisplay/Headings/SectionHeading';

export default function Press() {
  return (
    <section className="section">
      <div className="container container-xxl">
        <div className="nk-block">
          <div className="row justify-content-between gutter-vr-80px">
            <div className="col-lg-6">
              <SectionHeading heading="IN PRESS" />
              <div className="nk-block">
                <div
                  className="has-carousel carousel-nav-center pdb-l"
                  data-items={1}
                  data-navs="true"
                >
                  <div className="item pb-3">
                    <div className="row justify-content-center gutter-vr-30px">
                      <PressItem />
                      <PressItem />
                      <PressItem />
                      <PressItem />
                      <PressItem />
                      <PressItem />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <SectionHeading heading="NEWS" />
              <div className="nk-block">
                <div
                  className="has-carousel carousel-nav-center"
                  data-items={1}
                  data-navs="true"
                >
                  <div className="item pb-2">
                    <div
                      className="blog blog-s2 animated"
                      data-animate="fadeInUp"
                      data-delay="0.8"
                    >
                      <div className="blog-content blog-content-inline">
                        <div className="blog-text">
                          <h5 className="blog-title title-sm">
                            Fintech G20 Global Summit 2019
                          </h5>
                          <div className="blog-location">
                            New Youk, United State
                          </div>
                        </div>
                        <div className="blog-action">
                          <a href="#" className="link">
                            <span> Learn More</span>{' '}
                            <em className="link-icon link-icon-sm fas fa-angle-right" />
                          </a>
                        </div>
                      </div>
                      <div
                        className="bg-image round"
                        data-overlay="theme"
                        data-opacity={85}
                      >
                        <img src="images/azalea/news-hr-a.jpg" alt="" />
                      </div>
                    </div>
                    <div
                      className="blog blog-s2 animated"
                      data-animate="fadeInUp"
                      data-delay="0.85"
                    >
                      <div className="blog-content blog-content-inline">
                        <div className="blog-text">
                          <h5 className="blog-title title-sm">
                            Blockchain Global Summit 2019
                          </h5>
                          <div className="blog-location">
                            California, United State
                          </div>
                        </div>
                        <div className="blog-action">
                          <a href="#" className="link">
                            <span> Learn More</span>{' '}
                            <em className="link-icon link-icon-sm fas fa-angle-right" />
                          </a>
                        </div>
                      </div>
                      <div
                        className="bg-image round"
                        data-overlay="theme"
                        data-opacity={85}
                      >
                        <img src="images/azalea/news-hr-b.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="item pb-2">
                    <div
                      className="blog blog-s2 animated"
                      data-animate="fadeInUp"
                      data-delay="0.8"
                    >
                      <div className="blog-content blog-content-inline">
                        <div className="blog-text">
                          <h5 className="blog-title title-sm">
                            Fintech G20 Global Summit 2019
                          </h5>
                          <div className="blog-location">
                            New Youk, United State
                          </div>
                        </div>
                        <div className="blog-action">
                          <a href="#" className="link">
                            <span> Learn More</span>{' '}
                            <em className="link-icon link-icon-sm fas fa-angle-right" />
                          </a>
                        </div>
                      </div>
                      <div
                        className="bg-image round"
                        data-overlay="theme"
                        data-opacity={85}
                      >
                        <img src="images/azalea/news-hr-a.jpg" alt="" />
                      </div>
                    </div>
                    <div
                      className="blog blog-s2 animated"
                      data-animate="fadeInUp"
                      data-delay="0.85"
                    >
                      <div className="blog-content blog-content-inline">
                        <div className="blog-text">
                          <h5 className="blog-title title-sm">
                            Blockchain Global Summit 2019
                          </h5>
                          <div className="blog-location">
                            California, United State
                          </div>
                        </div>
                        <div className="blog-action">
                          <a href="#" className="link">
                            <span> Learn More</span>{' '}
                            <em className="link-icon link-icon-sm fas fa-angle-right" />
                          </a>
                        </div>
                      </div>
                      <div
                        className="bg-image round"
                        data-overlay="theme"
                        data-opacity={85}
                      >
                        <img src="images/azalea/news-hr-b.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
