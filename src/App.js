import React from 'react';

import 'antd/dist/antd.css';

import Header from './sections/Header/Header';
import Contact from './sections/Contact/Contact'
import Platform from './sections/Platform/Platform';

import Footer from './components/nav/Footer/Footer'
import SectionHeading from './components/display/Headings/SectionHeading'

export default function App() {
  return (
    <div className="App">
      <div className="nk-wrap">
        <Header />
        <main className="nk-pages tc-light">
          {/* // */}
          <section className="section" id="ecosystems">
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-lg-6">
                  <SectionHeading heading='4D Ecosystem' backgroundHeading='4D Ecosystem' />
                </div>
              </div>
            </div>
            <div className="container container-xxl">
              <div className="nk-block">
                <div className="row text-center align-items-lg-start gutter-vr-40px">
                  <div className="col-lg-3 col-sm-6">
                    <div
                      className="feature feature-s6 feature-s6-1 animated"
                      data-animate="fadeInUp"
                      data-delay="0.3"
                    >
                      <div className="feature-text">
                        <h5 className="title title-sm ttu">ONE MARKETPLACE</h5>
                        <p>
                          One International Marketplace that combines online
                          store and services around the world. Buy any goods or
                          services with our tokens.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div
                      className="feature feature-s6 feature-s6-2 animated"
                      data-animate="fadeInUp"
                      data-delay="0.4"
                    >
                      <div className="feature-text">
                        <h5 className="title title-sm ttu">
                          Transparency and Trust
                        </h5>
                        <p>
                          One International Marketplace that combines online
                          store and services around the world. Buy any goods or
                          services with our tokens.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div
                      className="feature feature-s6 feature-s6-3 animated"
                      data-animate="fadeInUp"
                      data-delay="0.5"
                    >
                      <div className="feature-text">
                        <h5 className="title title-sm ttu">
                          Blockchain Based Profiles
                        </h5>
                        <p>
                          One International Marketplace that combines online
                          store and services around the world. Buy any goods or
                          services with our tokens.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div
                      className="feature feature-s6 feature-s6-4 animated"
                      data-animate="fadeInUp"
                      data-delay="0.6"
                    >
                      <div className="feature-text">
                        <h5 className="title title-sm ttu">
                          PAYMENT FLEXIBILITY
                        </h5>
                        <p>
                          One International Marketplace that combines online
                          store and services around the world. Buy any goods or
                          services with our tokens.
                        </p>
                      </div>
                    </div>
                  </div>
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
          <Platform />
          <section className="section" id="mvp">
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-lg-6">
                  <SectionHeading heading="Our Solutions" />
                </div>
              </div>
            </div>
            <div className="container container-xxl">
              <div className="nk-block">
                <div className="row align-items-center justify-content-center justify-content-xl-between gutter-vr-30px">
                  <div className="col-xxl-6 col-xl-6 col-lg-8">
                    <div
                      className="nk-block-img nk-block-plx animated"
                      data-animate="fadeInUp"
                      data-delay="0.3"
                    >
                      <img
                        className="shadow rounded"
                        src="images/app-screens/sc-medium-b.png"
                        alt=""
                      />
                      <img
                        className="nk-block-img-plx plx-screen shadow rounded"
                        src="images/app-screens/sc-small-d.jpg"
                        alt=""
                      />
                      <img
                        className="nk-block-img-plx plx-circle plx-circle-s1"
                        src="images/gfx/circle-a.png"
                        alt=""
                      />
                      <img
                        className="nk-block-img-plx plx-polygon plx-polygon-s1"
                        src="images/gfx/polygon-a.png"
                        alt=""
                      />
                      <img
                        className="nk-block-img-plx plx-triangle plx-triangle-s1"
                        src="images/gfx/triangle-a.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-xxl-5 col-xl-6 col-lg-8">
                    <div className="nk-block-text">
                      <div
                        className="feature feature-inline animated"
                        data-animate="fadeInUp"
                        data-delay="0.4"
                      >
                        <div className="feature-icon feature-icon-md">
                          <em className="icon icon-xs icon-circle fas fa-check" />
                        </div>
                        <div className="feature-text">
                          <p>
                            Powered by DAP, NEX lets you easily trade
                            crypto-currencies &amp; other digital.
                          </p>
                        </div>
                      </div>
                      <div
                        className="feature feature-inline animated"
                        data-animate="fadeInUp"
                        data-delay="0.5"
                      >
                        <div className="feature-icon feature-icon-md">
                          <em className="icon icon-xs icon-circle fas fa-check" />
                        </div>
                        <div className="feature-text">
                          <p>
                            User have full access to trading consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                          </p>
                        </div>
                      </div>
                      <div
                        className="feature feature-inline animated"
                        data-animate="fadeInUp"
                        data-delay="0.6"
                      >
                        <div className="feature-icon feature-icon-md">
                          <em className="icon icon-xs icon-circle fas fa-check" />
                        </div>
                        <div className="feature-text">
                          <p>
                            Our multi-cryptocurrency exchange will uis aute
                            irure dolor in reprehenderit in voluptate velit
                            uuntur magni dolores esse cillum.
                          </p>
                        </div>
                      </div>
                      <div
                        className="feature feature-inline animated"
                        data-animate="fadeInUp"
                        data-delay="0.7"
                      >
                        <div className="feature-icon feature-icon-md">
                          <em className="icon icon-xs icon-circle fas fa-check" />
                        </div>
                        <div className="feature-text">
                          <p>
                            Traders able to trade with voluptas sit aspernatur
                            aut odit aut fugit, sed quia consequuntur magni
                            dolores eos qui ratione voluptatem.
                          </p>
                        </div>
                      </div>
                      <div
                        className="feature feature-inline animated"
                        data-animate="fadeInUp"
                        data-delay="0.8"
                      >
                        <div className="feature-icon feature-icon-md">
                          <em className="icon icon-xs icon-circle fas fa-check" />
                        </div>
                        <div className="feature-text">
                          <p>
                            Users will be able to take quis nostrum
                            exercitationem ullam corporis susci pitlabo riosam,
                            nisi ut aliquid ex ea commodi consequatur.
                          </p>
                        </div>
                      </div>
                      <div
                        className="text-center text-sm-left animated"
                        data-animate="fadeInUp"
                        data-delay="0.9"
                      >
                        <a href="#" className="btn btn-round btn-primary">
                          Try Demo Free
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* // */}
          <section className="section" id="tokensale">
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-lg-6">
                <SectionHeading heading="Our Tokens" />
                  
                </div>
              </div>
            </div>
            <div className="container container-xxl">
              <div className="nk-block">
                <div className="row align-items-center gutter-vr-50px">
                  <div className="col-xxl-4 col-lg-6 px-xl-5 order-xl-1">
                    <div
                      className="animated"
                      data-animate="fadeInUp"
                      data-delay="0.3"
                    >
                      <canvas
                        className="chart-canvas"
                        id="token-distribution"
                      />
                    </div>
                  </div>
                  <div className="col-xxl col-lg-6">
                    <ul
                      className="chart-data-s2 row"
                      data-canvas="token-distribution"
                      data-canvas-type="pie"
                      data-border-color="#0f1932"
                    >
                      <li
                        className="col-sm-8"
                        data-color="#1f2e4d"
                        data-color-hover="#f42f54"
                        data-label="Public Sale"
                        data-title="Tokens alocate for Public Sale"
                        data-subtitle="(Lockup)"
                        data-amount={45}
                      />
                      <li
                        className="col-sm-8"
                        data-color="#1f2e4d"
                        data-color-hover="#f42f54"
                        data-label="Private Sale"
                        data-title="Tokens alocate for Private Sale"
                        data-subtitle="(1 month lockup for half bonus)"
                        data-amount={25}
                      />
                      <li
                        className="col-sm-6"
                        data-color="#1f2e4d"
                        data-color-hover="#f42f54"
                        data-label="Reserve Fund"
                        data-title="Reserve Fund"
                        data-subtitle="(6 months lockup)"
                        data-amount={8}
                      />
                      <li
                        className="col-sm-6"
                        data-color="#1f2e4d"
                        data-color-hover="#f42f54"
                        data-label="Team & Founder"
                        data-title="Team & Founder"
                        data-subtitle="(3 months lockup)"
                        data-amount={12}
                      />
                      <li
                        className="col-sm-6"
                        data-color="#1f2e4d"
                        data-color-hover="#f42f54"
                        data-label="Bounty & Events"
                        data-title="Bounty & Events"
                        data-subtitle="(1 months lockup)"
                        data-amount={6}
                      />
                      <li
                        className="col-sm-6"
                        data-color="#1f2e4d"
                        data-color-hover="#f42f54"
                        data-label="Advisors & Partners"
                        data-title="Advisors & Partners"
                        data-subtitle="(6 months lockup)"
                        data-amount={4}
                      />
                    </ul>
                  </div>
                  <div className="col-xxl col-xl-12 order-last">
                    <div className="token-info-s2">
                      <div className="row gutter-vr-50px">
                        <div className="col-6 col-xxl-6 col-lg-3">
                          <div
                            className="token-info-item color-1 animated"
                            data-animate="fadeInUp"
                            data-delay="0.7"
                          >
                            <div className="token-info-title">Start Time</div>
                            <h4 className="token-info-des">15 Sep, 2018</h4>
                          </div>
                        </div>
                        <div className="col-6 col-xxl-6 col-lg-3">
                          <div
                            className="token-info-item color-1 animated"
                            data-animate="fadeInUp"
                            data-delay="0.7"
                          >
                            <div className="token-info-title">Token Symbol</div>
                            <h4 className="token-info-des">ICOX</h4>
                          </div>
                        </div>
                        <div className="col-6 col-xxl-6 col-lg-3">
                          <div
                            className="token-info-item color-2 animated"
                            data-animate="fadeInUp"
                            data-delay="0.75"
                          >
                            <div className="token-info-title">End Time</div>
                            <h4 className="token-info-des">30 Nov, 2018</h4>
                          </div>
                        </div>
                        <div className="col-6 col-xxl-6 col-lg-3">
                          <div
                            className="token-info-item color-2 animated"
                            data-animate="fadeInUp"
                            data-delay="0.75"
                          >
                            <div className="token-info-title">
                              Tokens Offered
                            </div>
                            <h4 className="token-info-des">15.0 M</h4>
                          </div>
                        </div>
                        <div className="col-6 col-xxl-6 col-lg-3">
                          <div
                            className="token-info-item color-3 animated"
                            data-animate="fadeInUp"
                            data-delay="0.8"
                          >
                            <div className="token-info-title">Soft Cap</div>
                            <h4 className="token-info-des">1.5 K</h4>
                          </div>
                        </div>
                        <div className="col-6 col-xxl-6 col-lg-3">
                          <div
                            className="token-info-item color-3 animated"
                            data-animate="fadeInUp"
                            data-delay="0.8"
                          >
                            <div className="token-info-title">Soft Cap</div>
                            <h4 className="token-info-des">1.5 K</h4>
                          </div>
                        </div>
                        <div className="col-6 col-xxl-6 col-lg-3">
                          <div
                            className="token-info-item color-4 animated"
                            data-animate="fadeInUp"
                            data-delay="0.85"
                          >
                            <div className="token-info-title">Crowdsale</div>
                            <h4 className="token-info-des">10.5 M</h4>
                          </div>
                        </div>
                        <div className="col-6 col-xxl-6 col-lg-3">
                          <div
                            className="token-info-item color-4 animated"
                            data-animate="fadeInUp"
                            data-delay="0.85"
                          >
                            <div className="token-info-title">Crowdsale</div>
                            <h4 className="token-info-des">10.5 M</h4>
                          </div>
                        </div>
                        <div className="col-6 col-xxl-6 col-lg-3">
                          <div
                            className="token-info-item color-5 animated"
                            data-animate="fadeInUp"
                            data-delay="0.9"
                          >
                            <div className="token-info-title">Hard Cap</div>
                            <h4 className="token-info-des">12.0 M</h4>
                          </div>
                        </div>
                        <div className="col-6 col-xxl-6 col-lg-3">
                          <div
                            className="token-info-item color-5 animated"
                            data-animate="fadeInUp"
                            data-delay="0.9"
                          >
                            <div className="token-info-title">Hard Cap</div>
                            <h4 className="token-info-des">12.0 M</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* // */}
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
                <div
                  className="roadmap-wrap roadmap-wrap-ovl-right text-center animated"
                  data-animate="fadeInUp"
                  data-delay="0.3"
                >
                  <div className="roadmap-line-s2" />
                  <div
                    className="roadmap-slider has-carousel carousel-nav-center"
                    data-blank="true"
                    data-items={5}
                    data-items-tab-l={4}
                    data-items-tab-p={3}
                    data-items-mobile={2}
                    data-margin={-1}
                    data-navs="true"
                  >
                    <div className="roadmap roadmap-s2 roadmap-i1 roadmap-finished">
                      <h6 className="roadmap-year-s2">Q1 2018</h6>
                      <h5 className="title title-sm roadmap-date">
                        Jan - Apr 2018
                      </h5>
                      <div className="roadmap-text">
                        <p>
                          Creation of a decentralize martketplace to neural
                          network adjacent coefficients.
                        </p>
                      </div>
                    </div>
                    <div className="roadmap roadmap-s2 roadmap-i2 roadmap-running">
                      <h6 className="roadmap-year-s2">Q2 2018</h6>
                      <h5 className="title title-sm roadmap-date">
                        Jul - Aug 2018
                      </h5>
                      <div className="roadmap-text">
                        <p>
                          Start of the ICO Crypto Platform Development and
                          Introduction of advertiser auctions
                        </p>
                      </div>
                    </div>
                    <div className="roadmap roadmap-s2 roadmap-i3">
                      <h6 className="roadmap-year-s2">Q3 2018</h6>
                      <h5 className="title title-sm roadmap-date">
                        Sep - Oct 2018
                      </h5>
                      <div className="roadmap-text">
                        <p>
                          Start Private Token Sale Round to our contributors.
                        </p>
                      </div>
                    </div>
                    <div className="roadmap roadmap-s2 roadmap-i4">
                      <h6 className="roadmap-year-s2">Q4 2018</h6>
                      <h5 className="title title-sm roadmap-date">
                        Nov - Dec 2018
                      </h5>
                      <div className="roadmap-text">
                        <p>
                          Launch of the mobile Best versions of the Publisher
                          application and Press Tour.
                        </p>
                      </div>
                    </div>
                    <div className="roadmap roadmap-s2 roadmap-i5">
                      <h6 className="roadmap-year-s2">Q1 2019</h6>
                      <h5 className="title title-sm roadmap-date">
                        Jan - Apr 2019
                      </h5>
                      <div className="roadmap-text">
                        <p>
                          Release of the initial versions of operational
                          applications and smart contracts.
                        </p>
                      </div>
                    </div>
                    <div className="roadmap roadmap-s2 roadmap-i6">
                      <h6 className="roadmap-year-s2">Q2 2019</h6>
                      <h5 className="title title-sm roadmap-date">
                        Jul - Aug 2019
                      </h5>
                      <div className="roadmap-text">
                        <p>
                          Creation of a decentralize martketplace to neural
                          network adjacent coefficients.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* // */}
          <section className="section" id="team">
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-lg-6">
                  <SectionHeading heading="Our Team" subHeading="With help from our teams, contributors and investors these
                      are the milestones we are looking forward to achieve." />
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
                  <div
                    className="item animated"
                    data-animate="fadeInUp"
                    data-delay="0.3"
                  >
                    <div className="team team-s2 team-odd">
                      <div className="team-photo team-photo-s2">
                        <img src="images/azalea/team-a.jpg" alt="" />
                        <a
                          href="#team-popup-1"
                          className="team-show content-popup"
                        />
                      </div>
                      <h5 className="team-name title title-md">Louis Baker</h5>
                      <span className="team-position">
                        CEO &amp; Lead Blockchain
                      </span>
                      <ul className="team-social team-social-s2">
                        <li>
                          <a href="#">
                            <em className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em className="fab fa-twitter" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* Start .team-profile  */}
                    <div
                      id="team-popup-1"
                      className="team-popup bg-theme tc-light mfp-hide"
                    >
                      <a title="Close" className="mfp-close">
                        ×
                      </a>
                      <div className="row align-items-start">
                        <div className="col-md-6">
                          <div className="team-photo">
                            <img src="images/azalea/team-a.jpg" alt="team" />
                          </div>
                        </div>
                        {/* .col  */}
                        <div className="col-md-6">
                          <div className="team-popup-info pl-md-3">
                            <h3 className="team-name title title-lg pt-4">
                              Louis Baker
                            </h3>
                            <p className="team-position">
                              CEO &amp; Lead Blockchain
                            </p>
                            <ul className="team-social team-social-s2 mb-4">
                              <li>
                                <a href="#">
                                  <em className="fab fa-facebook-f" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <em className="fab fa-linkedin-in" />
                                </a>
                              </li>
                            </ul>
                            <p>
                              He is a great man to work Lorem ipsum dolor sit
                              amet, consec tetur adipis icing elit. Simi lique,
                              autem.{' '}
                            </p>
                            <p>
                              Tenetur quos facere magnam volupt ates quas esse
                              Sedrep ell endus mole stiae tates quas esse Sed
                              repell endus molesti aela uda ntium quis quam
                              iusto minima thanks.
                            </p>
                            <div className="progress-list">
                              <div className="progress-wrap">
                                <div className="progress-title">
                                  Blockchain{' '}
                                  <span className="progress-amount">85%</span>
                                </div>
                                <div className="progress-bar progress-bar-xs bg-black-10">
                                  <div
                                    className="progress-percent bg-primary"
                                    data-percent={85}
                                  />
                                </div>
                              </div>
                              <div className="progress-wrap">
                                <div className="progress-title">
                                  Decentralization{' '}
                                  <span className="progress-amount">68%</span>
                                </div>
                                <div className="progress-bar progress-bar-xs bg-black-10">
                                  <div
                                    className="progress-percent bg-primary"
                                    data-percent={68}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* .col  */}
                      </div>
                      {/* .row  */}
                    </div>
                    {/* .team-profile  */}
                  </div>
                  <div
                    className="item animated"
                    data-animate="fadeInUp"
                    data-delay="0.4"
                  >
                    <div className="team team-s2 team-even">
                      <div className="team-photo team-photo-s2">
                        <img src="images/azalea/team-b.jpg" alt="" />
                        <a
                          href="#team-popup-2"
                          className="team-show content-popup"
                        />
                      </div>
                      <h5 className="team-name title title-md">
                        Stefan Harary
                      </h5>
                      <span className="team-position">
                        CTO &amp; Senior Developer
                      </span>
                      <ul className="team-social team-social-s2">
                        <li>
                          <a href="#">
                            <em className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em className="fab fa-twitter" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* Start .team-profile  */}
                    <div
                      id="team-popup-2"
                      className="team-popup bg-theme tc-light mfp-hide"
                    >
                      <a title="Close" className="mfp-close">
                        ×
                      </a>
                      <div className="row align-items-start">
                        <div className="col-md-6">
                          <div className="team-photo">
                            <img src="images/azalea/team-b.jpg" alt="team" />
                          </div>
                        </div>
                        {/* .col  */}
                        <div className="col-md-6">
                          <div className="team-popup-info pl-md-3">
                            <h3 className="team-name title title-lg pt-4">
                              Stefan Harary
                            </h3>
                            <p className="team-position">
                              CTO &amp; Senior Developer
                            </p>
                            <ul className="team-social team-social-s2 mb-4">
                              <li>
                                <a href="#">
                                  <em className="fab fa-facebook-f" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <em className="fab fa-linkedin-in" />
                                </a>
                              </li>
                            </ul>
                            <p>
                              He is a great man to work Lorem ipsum dolor sit
                              amet, consec tetur adipis icing elit. Simi lique,
                              autem.{' '}
                            </p>
                            <p>
                              Tenetur quos facere magnam volupt ates quas esse
                              Sedrep ell endus mole stiae tates quas esse Sed
                              repell endus molesti aela uda ntium quis quam
                              iusto minima thanks.
                            </p>
                          </div>
                        </div>
                        {/* .col  */}
                      </div>
                      {/* .row  */}
                    </div>
                    {/* .team-profile  */}
                  </div>
                  <div
                    className="item animated"
                    data-animate="fadeInUp"
                    data-delay="0.5"
                  >
                    <div className="team team-s2 team-odd">
                      <div className="team-photo team-photo-s2">
                        <img src="images/azalea/team-c.jpg" alt="" />
                        <a
                          href="#team-popup-3"
                          className="team-show content-popup"
                        />
                      </div>
                      <h5 className="team-name title title-md">Moises Teare</h5>
                      <span className="team-position">
                        Blockchain App Developer
                      </span>
                      <ul className="team-social team-social-s2">
                        <li>
                          <a href="#">
                            <em className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em className="fab fa-twitter" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* Start .team-profile  */}
                    <div
                      id="team-popup-3"
                      className="team-popup bg-theme tc-light mfp-hide"
                    >
                      <a title="Close" className="mfp-close">
                        ×
                      </a>
                      <div className="row align-items-start">
                        <div className="col-md-6">
                          <div className="team-photo">
                            <img src="images/azalea/team-c.jpg" alt="team" />
                          </div>
                        </div>
                        {/* .col  */}
                        <div className="col-md-6">
                          <div className="team-popup-info pl-md-3">
                            <h3 className="team-name title title-lg pt-4">
                              Moises Teare
                            </h3>
                            <p className="team-position">
                              Blockchain App Developer
                            </p>
                            <ul className="team-social team-social-s2 mb-4">
                              <li>
                                <a href="#">
                                  <em className="fab fa-facebook-f" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <em className="fab fa-linkedin-in" />
                                </a>
                              </li>
                            </ul>
                            <p>
                              He is a great man to work Lorem ipsum dolor sit
                              amet, consec tetur adipis icing elit. Simi lique,
                              autem.{' '}
                            </p>
                            <p>
                              Tenetur quos facere magnam volupt ates quas esse
                              Sedrep ell endus mole stiae tates quas esse Sed
                              repell endus molesti aela uda ntium quis quam
                              iusto minima thanks.
                            </p>
                          </div>
                        </div>
                        {/* .col  */}
                      </div>
                      {/* .row  */}
                    </div>
                    {/* .team-profile  */}
                  </div>
                  <div
                    className="item animated"
                    data-animate="fadeInUp"
                    data-delay="0.6"
                  >
                    <div className="team team-s2 team-even">
                      <div className="team-photo team-photo-s2">
                        <img src="images/azalea/team-d.jpg" alt="" />
                        <a
                          href="#team-popup-4"
                          className="team-show content-popup"
                        />
                      </div>
                      <h5 className="team-name title title-md">Louis Baker</h5>
                      <span className="team-position">
                        CEO &amp; Lead Blockchain
                      </span>
                      <ul className="team-social team-social-s2">
                        <li>
                          <a href="#">
                            <em className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em className="fab fa-twitter" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* Start .team-profile  */}
                    <div
                      id="team-popup-4"
                      className="team-popup bg-theme tc-light mfp-hide"
                    >
                      <a title="Close" className="mfp-close">
                        ×
                      </a>
                      <div className="row align-items-start">
                        <div className="col-md-6">
                          <div className="team-photo">
                            <img src="images/azalea/team-d.jpg" alt="team" />
                          </div>
                        </div>
                        {/* .col  */}
                        <div className="col-md-6">
                          <div className="team-popup-info pl-md-3">
                            <h3 className="team-name title title-lg pt-4">
                              Louis Baker
                            </h3>
                            <p className="team-position">
                              CEO &amp; Lead Blockchain{' '}
                            </p>
                            <ul className="team-social team-social-s2 mb-4">
                              <li>
                                <a href="#">
                                  <em className="fab fa-facebook-f" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <em className="fab fa-linkedin-in" />
                                </a>
                              </li>
                            </ul>
                            <p>
                              He is a great man to work Lorem ipsum dolor sit
                              amet, consec tetur adipis icing elit. Simi lique,
                              autem.{' '}
                            </p>
                            <p>
                              Tenetur quos facere magnam volupt ates quas esse
                              Sedrep ell endus mole stiae tates quas esse Sed
                              repell endus molesti aela uda ntium quis quam
                              iusto minima thanks.
                            </p>
                          </div>
                        </div>
                        {/* .col  */}
                      </div>
                      {/* .row  */}
                    </div>
                    {/* .team-profile  */}
                  </div>
                  <div
                    className="item animated"
                    data-animate="fadeInUp"
                    data-delay="0.7"
                  >
                    <div className="team team-s2 team-odd">
                      <div className="team-photo team-photo-s2">
                        <img src="images/azalea/team-a.jpg" alt="" />
                        <a
                          href="#team-popup-5"
                          className="team-show content-popup"
                        />
                      </div>
                      <h5 className="team-name title title-md">Louis Baker</h5>
                      <span className="team-position">
                        CEO &amp; Lead Blockchain
                      </span>
                      <ul className="team-social team-social-s2">
                        <li>
                          <a href="#">
                            <em className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em className="fab fa-twitter" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* Start .team-profile  */}
                    <div
                      id="team-popup-5"
                      className="team-popup bg-theme tc-light mfp-hide"
                    >
                      <a title="Close" className="mfp-close">
                        ×
                      </a>
                      <div className="row align-items-start">
                        <div className="col-md-6">
                          <div className="team-photo">
                            <img src="images/azalea/team-a.jpg" alt="team" />
                          </div>
                        </div>
                        {/* .col  */}
                        <div className="col-md-6">
                          <div className="team-popup-info pl-md-3">
                            <h3 className="team-name title title-lg pt-4">
                              Louis Baker
                            </h3>
                            <p className="team-position">
                              CEO &amp; Lead Blockchain{' '}
                            </p>
                            <ul className="team-social team-social-s2 mb-4">
                              <li>
                                <a href="#">
                                  <em className="fab fa-facebook-f" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <em className="fab fa-linkedin-in" />
                                </a>
                              </li>
                            </ul>
                            <p>
                              He is a great man to work Lorem ipsum dolor sit
                              amet, consec tetur adipis icing elit. Simi lique,
                              autem.{' '}
                            </p>
                            <p>
                              Tenetur quos facere magnam volupt ates quas esse
                              Sedrep ell endus mole stiae tates quas esse Sed
                              repell endus molesti aela uda ntium quis quam
                              iusto minima thanks.
                            </p>
                          </div>
                        </div>
                        {/* .col  */}
                      </div>
                      {/* .row  */}
                    </div>
                    {/* .team-profile  */}
                  </div>
                  <div className="item">
                    <div className="team team-s2 team-even">
                      <div className="team-photo team-photo-s2">
                        <img src="images/azalea/team-b.jpg" alt="" />
                        <a
                          href="#team-popup-6"
                          className="team-show content-popup"
                        />
                      </div>
                      <h5 className="team-name title title-md">
                        Stefan Harary
                      </h5>
                      <span className="team-position">
                        CTO &amp; Senior Developer
                      </span>
                      <ul className="team-social team-social-s2">
                        <li>
                          <a href="#">
                            <em className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em className="fab fa-twitter" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* Start .team-profile  */}
                    <div
                      id="team-popup-6"
                      className="team-popup bg-theme tc-light mfp-hide"
                    >
                      <a title="Close" className="mfp-close">
                        ×
                      </a>
                      <div className="row align-items-start">
                        <div className="col-md-6">
                          <div className="team-photo">
                            <img src="images/azalea/team-b.jpg" alt="team" />
                          </div>
                        </div>
                        {/* .col  */}
                        <div className="col-md-6">
                          <div className="team-popup-info pl-md-3">
                            <h3 className="team-name title title-lg pt-4">
                              Stefan Harary
                            </h3>
                            <p className="team-position">
                              CTO &amp; Senior Developer
                            </p>
                            <ul className="team-social team-social-s2 mb-4">
                              <li>
                                <a href="#">
                                  <em className="fab fa-facebook-f" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <em className="fab fa-linkedin-in" />
                                </a>
                              </li>
                            </ul>
                            <p>
                              He is a great man to work Lorem ipsum dolor sit
                              amet, consec tetur adipis icing elit. Simi lique,
                              autem.{' '}
                            </p>
                            <p>
                              Tenetur quos facere magnam volupt ates quas esse
                              Sedrep ell endus mole stiae tates quas esse Sed
                              repell endus molesti aela uda ntium quis quam
                              iusto minima thanks.
                            </p>
                          </div>
                        </div>
                        {/* .col  */}
                      </div>
                      {/* .row  */}
                    </div>
                    {/* .team-profile  */}
                  </div>
                  <div className="item">
                    <div className="team team-s2 team-odd">
                      <div className="team-photo team-photo-s2">
                        <img src="images/azalea/team-c.jpg" alt="" />
                        <a
                          href="#team-popup-7"
                          className="team-show content-popup"
                        />
                      </div>
                      <h5 className="team-name title title-md">Moises Teare</h5>
                      <span className="team-position">
                        Blockchain App Developer
                      </span>
                      <ul className="team-social team-social-s2">
                        <li>
                          <a href="#">
                            <em className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em className="fab fa-twitter" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* Start .team-profile  */}
                    <div
                      id="team-popup-7"
                      className="team-popup bg-theme tc-light mfp-hide"
                    >
                      <a title="Close" className="mfp-close">
                        ×
                      </a>
                      <div className="row align-items-start">
                        <div className="col-md-6">
                          <div className="team-photo">
                            <img src="images/azalea/team-c.jpg" alt="team" />
                          </div>
                        </div>
                        {/* .col  */}
                        <div className="col-md-6">
                          <div className="team-popup-info pl-md-3">
                            <h3 className="team-name title title-lg pt-4">
                              Moises Teare
                            </h3>
                            <p className="team-position">
                              Blockchain App Developer
                            </p>
                            <ul className="team-social team-social-s2 mb-4">
                              <li>
                                <a href="#">
                                  <em className="fab fa-facebook-f" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <em className="fab fa-linkedin-in" />
                                </a>
                              </li>
                            </ul>
                            <p>
                              He is a great man to work Lorem ipsum dolor sit
                              amet, consec tetur adipis icing elit. Simi lique,
                              autem.{' '}
                            </p>
                            <p>
                              Tenetur quos facere magnam volupt ates quas esse
                              Sedrep ell endus mole stiae tates quas esse Sed
                              repell endus molesti aela uda ntium quis quam
                              iusto minima thanks.
                            </p>
                          </div>
                        </div>
                        {/* .col  */}
                      </div>
                      {/* .row  */}
                    </div>
                    {/* .team-profile  */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* // */}
          <section className="section">
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-lg-6">
                  <div className="section-head section-head-s2">
                    <h2
                      className="title title-xl animated"
                      data-animate="fadeInUp"
                      data-delay="0.1"
                      title="Advisors"
                    >
                      BOARD MEMBER
                    </h2>
                    <p
                      className="animated"
                      data-animate="fadeInUp"
                      data-delay="0.2"
                    >
                      Our advisors and board members are great part of our team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container container-xxl">
              <div className="nk-block nk-block-sm">
                <div className="row">
                  <div className="col-md-4 col-lg-2 col-6">
                    <div
                      className="team team-s2 team-sm-s2 team-odd animated"
                      data-animate="fadeInUp"
                      data-delay="0.3"
                    >
                      <div className="team-photo team-photo-s2">
                        <img src="images/azalea/team-c.jpg" alt="" />
                      </div>
                      <h5 className="team-name title title-sm">
                        Ron Glabischnig
                      </h5>
                      <span className="team-position team-position-sm">
                        General manager, Coindexin
                      </span>
                      <ul className="team-social team-social-s2">
                        <li>
                          <a href="#">
                            <em className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em className="fab fa-twitter" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-2 col-6">
                    <div
                      className="team team-s2 team-sm-s2 team-even animated"
                      data-animate="fadeInUp"
                      data-delay="0.35"
                    >
                      <div className="team-photo team-photo-s2">
                        <img src="images/azalea/team-b.jpg" alt="" />
                      </div>
                      <h5 className="team-name title title-sm">
                        Stefan Zakrisson
                      </h5>
                      <span className="team-position team-position-sm">
                        Legal Advisor, TokenWiz Project
                      </span>
                      <ul className="team-social team-social-s2">
                        <li>
                          <a href="#">
                            <em className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em className="fab fa-twitter" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-2 col-6">
                    <div
                      className="team team-s2 team-sm-s2 team-odd animated"
                      data-animate="fadeInUp"
                      data-delay="0.4"
                    >
                      <div className="team-photo team-photo-s2">
                        <img src="images/azalea/team-a.jpg" alt="" />
                      </div>
                      <h5 className="team-name title title-sm">Moises Teare</h5>
                      <span className="team-position team-position-sm">
                        Managing Director, ICOCrypto
                      </span>
                      <ul className="team-social team-social-s2">
                        <li>
                          <a href="#">
                            <em className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em className="fab fa-twitter" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-2 col-6">
                    <div
                      className="team team-s2 team-sm-s2 team-even animated"
                      data-animate="fadeInUp"
                      data-delay="0.45"
                    >
                      <div className="team-photo team-photo-s2">
                        <img src="images/azalea/team-d.jpg" alt="" />
                      </div>
                      <h5 className="team-name title title-sm">
                        Michiel Berende
                      </h5>
                      <span className="team-position team-position-sm">
                        Insurance Lead &amp; Financial Advisor
                      </span>
                      <ul className="team-social team-social-s2">
                        <li>
                          <a href="#">
                            <em className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em className="fab fa-twitter" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-2 col-6">
                    <div
                      className="team team-s2 team-sm-s2 team-odd animated"
                      data-animate="fadeInUp"
                      data-delay="0.5"
                    >
                      <div className="team-photo team-photo-s2">
                        <img src="images/azalea/team-b.jpg" alt="" />
                      </div>
                      <h5 className="team-name title title-sm">Noack Waylon</h5>
                      <span className="team-position team-position-sm">
                        Ecosystem Manager &amp; DevOps Engineer
                      </span>
                      <ul className="team-social team-social-s2">
                        <li>
                          <a href="#">
                            <em className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em className="fab fa-twitter" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-2 col-6">
                    <div
                      className="team team-s2 team-sm-s2 team-even animated"
                      data-animate="fadeInUp"
                      data-delay="0.55"
                    >
                      <div className="team-photo team-photo-s2">
                        <img src="images/azalea/team-c.jpg" alt="" />
                      </div>
                      <h5 className="team-name title title-sm">
                        Tobias Dalton
                      </h5>
                      <span className="team-position team-position-sm">
                        Member of the Oparation Board
                      </span>
                      <ul className="team-social team-social-s2">
                        <li>
                          <a href="#">
                            <em className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <em className="fab fa-twitter" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Block @s */}
              <div className="nk-block block-partners">
                <h6
                  className="title title-md ttu text-center animated"
                  data-animate="fadeInUp"
                  data-delay="0.65"
                >
                  Our Partners
                </h6>
                <ul
                  className="has-carousel partner-list justify-content-center animated"
                  data-items={7}
                  data-items-mobile={2}
                  data-auto="true"
                  data-loop="true"
                  data-animate="fadeInUp"
                  data-delay="0.75"
                >
                  <li className="partner-logo">
                    <img src="images/partners/a-light.png" alt="" />
                  </li>
                  <li className="partner-logo">
                    <img src="images/partners/b-light.png" alt="" />
                  </li>
                  <li className="partner-logo">
                    <img src="images/partners/c-light.png" alt="" />
                  </li>
                  <li className="partner-logo">
                    <img src="images/partners/d-light.png" alt="" />
                  </li>
                  <li className="partner-logo">
                    <img src="images/partners/e-light.png" alt="" />
                  </li>
                  <li className="partner-logo">
                    <img src="images/partners/f-light.png" alt="" />
                  </li>
                  <li className="partner-logo">
                    <img src="images/partners/g-light.png" alt="" />
                  </li>
                  <li className="partner-logo">
                    <img src="images/partners/a-light.png" alt="" />
                  </li>
                  <li className="partner-logo">
                    <img src="images/partners/b-light.png" alt="" />
                  </li>
                  <li className="partner-logo">
                    <img src="images/partners/c-light.png" alt="" />
                  </li>
                  <li className="partner-logo">
                    <img src="images/partners/d-light.png" alt="" />
                  </li>
                  <li className="partner-logo">
                    <img src="images/partners/e-light.png" alt="" />
                  </li>
                  <li className="partner-logo">
                    <img src="images/partners/f-light.png" alt="" />
                  </li>
                  <li className="partner-logo">
                    <img src="images/partners/g-light.png" alt="" />
                  </li>
                </ul>
              </div>
              {/* Block @e */}
            </div>
          </section>
          {/* // */}
          <section className="section" id="docs">
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-lg-6">
                  <div className="section-head section-head-s2">
                    <h2
                      className="title title-xl animated"
                      data-animate="fadeInUp"
                      data-delay="0.1"
                      title="Downloads"
                    >
                      DOCUMENTS
                    </h2>
                    <p
                      className="animated"
                      data-animate="fadeInUp"
                      data-delay="0.2"
                    >
                      Download the whitepaper and learn about ICO Token, the
                      unique ICO Crypto approach and the team/advisors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container container-xxl">
              <div className="nk-block">
                <div className="row gutter-vr-50px">
                  <div className="col-sm-6 col-lg-3">
                    <div
                      className="doc animated"
                      data-animate="fadeInUp"
                      data-delay="0.3"
                    >
                      <div className="doc-photo doc-shape doc-shape-a">
                        <img src="images/azalea/doc-a.jpg" alt="" />
                      </div>
                      <div className="doc-text">
                        <h5 className="doc-title title-sm">
                          White Paper <small>(2019)</small>
                        </h5>
                        <a className="doc-download" href="#">
                          <em className="ti ti-import" />
                        </a>
                        <div className="doc-lang">ENGLISH</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div
                      className="doc animated"
                      data-animate="fadeInUp"
                      data-delay="0.4"
                    >
                      <div className="doc-photo doc-shape doc-shape-b">
                        <img src="images/azalea/doc-b.jpg" alt="" />
                      </div>
                      <div className="doc-text">
                        <h5 className="doc-title title-sm">
                          Two Pager <small>(2018)</small>
                        </h5>
                        <a className="doc-download" href="#">
                          <em className="ti ti-import" />
                        </a>
                        <div className="doc-lang">ENGLISH</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div
                      className="doc animated"
                      data-animate="fadeInUp"
                      data-delay="0.5"
                    >
                      <div className="doc-photo doc-shape doc-shape-c">
                        <img src="images/azalea/doc-c.jpg" alt="" />
                      </div>
                      <div className="doc-text">
                        <h5 className="doc-title title-sm">
                          One Pager <small>(2018)</small>
                        </h5>
                        <a className="doc-download" href="#">
                          <em className="ti ti-import" />
                        </a>
                        <div className="doc-lang">ENGLISH</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div
                      className="doc animated"
                      data-animate="fadeInUp"
                      data-delay="0.6"
                    >
                      <div className="doc-photo doc-shape doc-shape-d">
                        <img src="images/azalea/doc-d.jpg" alt="" />
                      </div>
                      <div className="doc-text">
                        <h5 className="doc-title title-sm">
                          Presentation <small>(2018)</small>
                        </h5>
                        <a className="doc-download" href="#">
                          <em className="ti ti-import" />
                        </a>
                        <div className="doc-lang">ENGLISH</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* // */}
          <section className="section">
            <div className="container container-xxl">
              <div className="nk-block">
                <div className="row justify-content-between gutter-vr-80px">
                  <div className="col-lg-6">
                    <div className="section-head section-head-s2 text-center ">
                      <h2
                        className="title animated"
                        data-animate="fadeInUp"
                        data-delay="0.1"
                        title="Press"
                      >
                        IN PRESS
                      </h2>
                    </div>
                    <div className="nk-block">
                      <div
                        className="has-carousel carousel-nav-center pdb-l"
                        data-items={1}
                        data-navs="true"
                      >
                        <div className="item pb-3">
                          <div className="row justify-content-center gutter-vr-30px">
                            <div className="col-6 col-sm-4">
                              <div
                                className="partner-logo animated"
                                data-animate="fadeInUp"
                                data-delay="0.2"
                              >
                                <img src="images/partners/a-light.png" alt="" />
                              </div>
                            </div>
                            <div className="col-6 col-sm-4">
                              <div
                                className="partner-logo animated"
                                data-animate="fadeInUp"
                                data-delay="0.25"
                              >
                                <img src="images/partners/b-light.png" alt="" />
                              </div>
                            </div>
                            <div className="col-6 col-sm-4">
                              <div
                                className="partner-logo animated"
                                data-animate="fadeInUp"
                                data-delay="0.3"
                              >
                                <img src="images/partners/c-light.png" alt="" />
                              </div>
                            </div>
                            <div className="col-6 col-sm-4">
                              <div
                                className="partner-logo animated"
                                data-animate="fadeInUp"
                                data-delay="0.35"
                              >
                                <img src="images/partners/d-light.png" alt="" />
                              </div>
                            </div>
                            <div className="col-6 col-sm-4">
                              <div
                                className="partner-logo animated"
                                data-animate="fadeInUp"
                                data-delay="0.4"
                              >
                                <img src="images/partners/e-light.png" alt="" />
                              </div>
                            </div>
                            <div className="col-6 col-sm-4">
                              <div
                                className="partner-logo animated"
                                data-animate="fadeInUp"
                                data-delay="0.45"
                              >
                                <img src="images/partners/f-light.png" alt="" />
                              </div>
                            </div>
                            <div className="col-6 col-sm-4">
                              <div
                                className="partner-logo animated"
                                data-animate="fadeInUp"
                                data-delay="0.5"
                              >
                                <img src="images/partners/a-light.png" alt="" />
                              </div>
                            </div>
                            <div className="col-6 col-sm-4">
                              <div
                                className="partner-logo animated"
                                data-animate="fadeInUp"
                                data-delay="0.55"
                              >
                                <img src="images/partners/b-light.png" alt="" />
                              </div>
                            </div>
                            <div className="col-6 col-sm-4">
                              <div
                                className="partner-logo animated"
                                data-animate="fadeInUp"
                                data-delay="0.6"
                              >
                                <img src="images/partners/c-light.png" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item pb-3">
                          <div className="row justify-content-center gutter-vr-30px">
                            <div className="col-6 col-sm-4">
                              <div
                                className="partner-logo animated"
                                data-animate="fadeInUp"
                                data-delay="0.2"
                              >
                                <img src="images/partners/a-light.png" alt="" />
                              </div>
                            </div>
                            <div className="col-6 col-sm-4">
                              <div
                                className="partner-logo animated"
                                data-animate="fadeInUp"
                                data-delay="0.25"
                              >
                                <img src="images/partners/b-light.png" alt="" />
                              </div>
                            </div>
                            <div className="col-6 col-sm-4">
                              <div
                                className="partner-logo animated"
                                data-animate="fadeInUp"
                                data-delay="0.3"
                              >
                                <img src="images/partners/c-light.png" alt="" />
                              </div>
                            </div>
                            <div className="col-6 col-sm-4">
                              <div
                                className="partner-logo animated"
                                data-animate="fadeInUp"
                                data-delay="0.35"
                              >
                                <img src="images/partners/d-light.png" alt="" />
                              </div>
                            </div>
                            <div className="col-6 col-sm-4">
                              <div
                                className="partner-logo animated"
                                data-animate="fadeInUp"
                                data-delay="0.4"
                              >
                                <img src="images/partners/e-light.png" alt="" />
                              </div>
                            </div>
                            <div className="col-6 col-sm-4">
                              <div
                                className="partner-logo animated"
                                data-animate="fadeInUp"
                                data-delay="0.45"
                              >
                                <img src="images/partners/f-light.png" alt="" />
                              </div>
                            </div>
                            <div className="col-6 col-sm-4">
                              <div
                                className="partner-logo animated"
                                data-animate="fadeInUp"
                                data-delay="0.5"
                              >
                                <img src="images/partners/a-light.png" alt="" />
                              </div>
                            </div>
                            <div className="col-6 col-sm-4">
                              <div
                                className="partner-logo animated"
                                data-animate="fadeInUp"
                                data-delay="0.55"
                              >
                                <img src="images/partners/b-light.png" alt="" />
                              </div>
                            </div>
                            <div className="col-6 col-sm-4">
                              <div
                                className="partner-logo animated"
                                data-animate="fadeInUp"
                                data-delay="0.6"
                              >
                                <img src="images/partners/c-light.png" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* .col */}
                  <div className="col-lg-5">
                    <div className="section-head section-head-s2 text-center">
                      <h2
                        className="title animated"
                        data-animate="fadeInUp"
                        data-delay="0.7"
                        title="Update"
                      >
                        NEWS
                      </h2>
                    </div>
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
                  {/* .col */}
                </div>
                {/* .row */}
              </div>
              {/* .nk-block */}
            </div>
            {/* .container */}
          </section>
          {/* // */}
          <section className="section" id="faqs">
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-lg-6">
                  <div className="section-head section-head-s2">
                    <h2
                      className="title title-xl animated"
                      data-animate="fadeInUp"
                      data-delay="0.1"
                      title="FAQS"
                    >
                      FAQS
                    </h2>
                    <p
                      className="animated"
                      data-animate="fadeInUp"
                      data-delay="0.2"
                    >
                      Below we’ve provided a bit of ICO, ICO Token,
                      cryptocurrencies, and few others. If you have any other
                      questions, please get in touch.
                    </p>
                  </div>
                </div>
              </div>
              {/* Block @s */}
              <div className="nk-block">
                <div className="row justify-content-center">
                  <div className="col-xl-10">
                    <ul
                      className="nav tab-nav tab-nav-btn tab-nav-btn-bdr tab-nav-center pdb-r animated"
                      data-animate="fadeInUp"
                      data-delay="0.3"
                    >
                      <li>
                        <a className="active" data-toggle="tab" href="#tab-2-1">
                          General Questions
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab-2-2">
                          ICO Questions
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab-2-3">
                          Tokens Sales
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab-2-4">
                          Investors
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div className="tab-pane fade show active" id="tab-2-1">
                        <div className="accordion" id="acc-1">
                          <div
                            className="accordion-item accordion-item-s3 animated"
                            data-animate="fadeInUp"
                            data-delay="0.4"
                          >
                            <h5
                              className="accordion-title accordion-title-sm"
                              data-toggle="collapse"
                              data-target="#acc-1-1"
                            >
                              What is ICO Crypto?{' '}
                              <span className="accordion-icon" />
                            </h5>
                            <div
                              id="acc-1-1"
                              className="collapse show"
                              data-parent="#acc-1"
                            >
                              <div className="accordion-content">
                                <p>
                                  Once ICO period is launched, You can purchased
                                  Token with Etherum, Bitcoin or Litecoin. You
                                  can also tempor incididunt ut labore et dolore
                                  magna aliqua sed do eiusmod eaque ipsa.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="accordion-item accordion-item-s3 animated"
                            data-animate="fadeInUp"
                            data-delay="0.5"
                          >
                            <h5
                              className="accordion-title accordion-title-sm collapsed"
                              data-toggle="collapse"
                              data-target="#acc-1-2"
                            >
                              What cryptocurrencies can I use to purchase?{' '}
                              <span className="accordion-icon" />
                            </h5>
                            <div
                              id="acc-1-2"
                              className="collapse"
                              data-parent="#acc-1"
                            >
                              <div className="accordion-content">
                                <p>
                                  Once ICO period is launched, You can purchased
                                  Token with Etherum, Bitcoin or Litecoin. You
                                  can also tempor incididunt ut labore et dolore
                                  magna aliqua sed do eiusmod eaque ipsa.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="accordion-item accordion-item-s3 animated"
                            data-animate="fadeInUp"
                            data-delay="0.6"
                          >
                            <h5
                              className="accordion-title accordion-title-sm collapsed"
                              data-toggle="collapse"
                              data-target="#acc-1-3"
                            >
                              How can I participate in the ICO Token sale?{' '}
                              <span className="accordion-icon" />
                            </h5>
                            <div
                              id="acc-1-3"
                              className="collapse"
                              data-parent="#acc-1"
                            >
                              <div className="accordion-content">
                                <p>
                                  Once ICO period is launched, You can purchased
                                  Token with Etherum, Bitcoin or Litecoin. You
                                  can also tempor incididunt ut labore et dolore
                                  magna aliqua sed do eiusmod eaque ipsa.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="accordion-item accordion-item-s3 animated"
                            data-animate="fadeInUp"
                            data-delay="0.7"
                          >
                            <h5
                              className="accordion-title accordion-title-sm collapsed"
                              data-toggle="collapse"
                              data-target="#acc-1-4"
                            >
                              How do I benefit from the ICO Token?{' '}
                              <span className="accordion-icon" />
                            </h5>
                            <div
                              id="acc-1-4"
                              className="collapse"
                              data-parent="#acc-1"
                            >
                              <div className="accordion-content">
                                <p>
                                  Once ICO period is launched, You can purchased
                                  Token with Etherum, Bitcoin or Litecoin. You
                                  can also tempor incididunt ut labore et dolore
                                  magna aliqua sed do eiusmod eaque ipsa.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="tab-2-2">
                        <div className="accordion" id="acc-2">
                          <div
                            className="accordion-item accordion-item-s3 animated"
                            data-animate="fadeInUp"
                            data-delay="0.4"
                          >
                            <h5
                              className="accordion-title accordion-title-sm"
                              data-toggle="collapse"
                              data-target="#acc-2-1"
                            >
                              What is ICO Crypto?{' '}
                              <span className="accordion-icon" />
                            </h5>
                            <div
                              id="acc-2-1"
                              className="collapse show"
                              data-parent="#acc-2"
                            >
                              <div className="accordion-content">
                                <p>
                                  Once ICO period is launched, You can purchased
                                  Token with Etherum, Bitcoin or Litecoin. You
                                  can also tempor incididunt ut labore et dolore
                                  magna aliqua sed do eiusmod eaque ipsa.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="accordion-item accordion-item-s3 animated"
                            data-animate="fadeInUp"
                            data-delay="0.5"
                          >
                            <h5
                              className="accordion-title accordion-title-sm collapsed"
                              data-toggle="collapse"
                              data-target="#acc-2-2"
                            >
                              What cryptocurrencies can I use to purchase?{' '}
                              <span className="accordion-icon" />
                            </h5>
                            <div
                              id="acc-2-2"
                              className="collapse"
                              data-parent="#acc-2"
                            >
                              <div className="accordion-content">
                                <p>
                                  Once ICO period is launched, You can purchased
                                  Token with Etherum, Bitcoin or Litecoin. You
                                  can also tempor incididunt ut labore et dolore
                                  magna aliqua sed do eiusmod eaque ipsa.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="accordion-item accordion-item-s3 animated"
                            data-animate="fadeInUp"
                            data-delay="0.6"
                          >
                            <h5
                              className="accordion-title accordion-title-sm collapsed"
                              data-toggle="collapse"
                              data-target="#acc-2-3"
                            >
                              How can I participate in the ICO Token sale?{' '}
                              <span className="accordion-icon" />
                            </h5>
                            <div
                              id="acc-2-3"
                              className="collapse"
                              data-parent="#acc-2"
                            >
                              <div className="accordion-content">
                                <p>
                                  Once ICO period is launched, You can purchased
                                  Token with Etherum, Bitcoin or Litecoin. You
                                  can also tempor incididunt ut labore et dolore
                                  magna aliqua sed do eiusmod eaque ipsa.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="accordion-item accordion-item-s3 animated"
                            data-animate="fadeInUp"
                            data-delay="0.7"
                          >
                            <h5
                              className="accordion-title accordion-title-sm collapsed"
                              data-toggle="collapse"
                              data-target="#acc-2-4"
                            >
                              How do I benefit from the ICO Token?{' '}
                              <span className="accordion-icon" />
                            </h5>
                            <div
                              id="acc-2-4"
                              className="collapse"
                              data-parent="#acc-2"
                            >
                              <div className="accordion-content">
                                <p>
                                  Once ICO period is launched, You can purchased
                                  Token with Etherum, Bitcoin or Litecoin. You
                                  can also tempor incididunt ut labore et dolore
                                  magna aliqua sed do eiusmod eaque ipsa.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="tab-2-3">
                        <div className="accordion" id="acc-3">
                          <div
                            className="accordion-item accordion-item-s3 animated"
                            data-animate="fadeInUp"
                            data-delay="0.4"
                          >
                            <h5
                              className="accordion-title accordion-title-sm"
                              data-toggle="collapse"
                              data-target="#acc-3-1"
                            >
                              What is ICO Crypto?{' '}
                              <span className="accordion-icon" />
                            </h5>
                            <div
                              id="acc-3-1"
                              className="collapse show"
                              data-parent="#acc-3"
                            >
                              <div className="accordion-content">
                                <p>
                                  Once ICO period is launched, You can purchased
                                  Token with Etherum, Bitcoin or Litecoin. You
                                  can also tempor incididunt ut labore et dolore
                                  magna aliqua sed do eiusmod eaque ipsa.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="accordion-item accordion-item-s3 animated"
                            data-animate="fadeInUp"
                            data-delay="0.5"
                          >
                            <h5
                              className="accordion-title accordion-title-sm collapsed"
                              data-toggle="collapse"
                              data-target="#acc-3-2"
                            >
                              What cryptocurrencies can I use to purchase?{' '}
                              <span className="accordion-icon" />
                            </h5>
                            <div
                              id="acc-3-2"
                              className="collapse"
                              data-parent="#acc-3"
                            >
                              <div className="accordion-content">
                                <p>
                                  Once ICO period is launched, You can purchased
                                  Token with Etherum, Bitcoin or Litecoin. You
                                  can also tempor incididunt ut labore et dolore
                                  magna aliqua sed do eiusmod eaque ipsa.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="accordion-item accordion-item-s3 animated"
                            data-animate="fadeInUp"
                            data-delay="0.6"
                          >
                            <h5
                              className="accordion-title accordion-title-sm collapsed"
                              data-toggle="collapse"
                              data-target="#acc-3-3"
                            >
                              How can I participate in the ICO Token sale?{' '}
                              <span className="accordion-icon" />
                            </h5>
                            <div
                              id="acc-3-3"
                              className="collapse"
                              data-parent="#acc-3"
                            >
                              <div className="accordion-content">
                                <p>
                                  Once ICO period is launched, You can purchased
                                  Token with Etherum, Bitcoin or Litecoin. You
                                  can also tempor incididunt ut labore et dolore
                                  magna aliqua sed do eiusmod eaque ipsa.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="accordion-item accordion-item-s3 animated"
                            data-animate="fadeInUp"
                            data-delay="0.7"
                          >
                            <h5
                              className="accordion-title accordion-title-sm collapsed"
                              data-toggle="collapse"
                              data-target="#acc-3-4"
                            >
                              How do I benefit from the ICO Token?{' '}
                              <span className="accordion-icon" />
                            </h5>
                            <div
                              id="acc-3-4"
                              className="collapse"
                              data-parent="#acc-3"
                            >
                              <div className="accordion-content">
                                <p>
                                  Once ICO period is launched, You can purchased
                                  Token with Etherum, Bitcoin or Litecoin. You
                                  can also tempor incididunt ut labore et dolore
                                  magna aliqua sed do eiusmod eaque ipsa.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="tab-2-4">
                        <div className="accordion" id="acc-4">
                          <div
                            className="accordion-item accordion-item-s3 animated"
                            data-animate="fadeInUp"
                            data-delay="0.4"
                          >
                            <h5
                              className="accordion-title accordion-title-sm"
                              data-toggle="collapse"
                              data-target="#acc-4-1"
                            >
                              What is ICO Crypto?{' '}
                              <span className="accordion-icon" />
                            </h5>
                            <div
                              id="acc-4-1"
                              className="collapse show"
                              data-parent="#acc-4"
                            >
                              <div className="accordion-content">
                                <p>
                                  Once ICO period is launched, You can purchased
                                  Token with Etherum, Bitcoin or Litecoin. You
                                  can also tempor incididunt ut labore et dolore
                                  magna aliqua sed do eiusmod eaque ipsa.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="accordion-item accordion-item-s3 animated"
                            data-animate="fadeInUp"
                            data-delay="0.5"
                          >
                            <h5
                              className="accordion-title accordion-title-sm collapsed"
                              data-toggle="collapse"
                              data-target="#acc-4-2"
                            >
                              What cryptocurrencies can I use to purchase?{' '}
                              <span className="accordion-icon" />
                            </h5>
                            <div
                              id="acc-4-2"
                              className="collapse"
                              data-parent="#acc-4"
                            >
                              <div className="accordion-content">
                                <p>
                                  Once ICO period is launched, You can purchased
                                  Token with Etherum, Bitcoin or Litecoin. You
                                  can also tempor incididunt ut labore et dolore
                                  magna aliqua sed do eiusmod eaque ipsa.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="accordion-item accordion-item-s3 animated"
                            data-animate="fadeInUp"
                            data-delay="0.6"
                          >
                            <h5
                              className="accordion-title accordion-title-sm collapsed"
                              data-toggle="collapse"
                              data-target="#acc-4-3"
                            >
                              How can I participate in the ICO Token sale?{' '}
                              <span className="accordion-icon" />
                            </h5>
                            <div
                              id="acc-4-3"
                              className="collapse"
                              data-parent="#acc-4"
                            >
                              <div className="accordion-content">
                                <p>
                                  Once ICO period is launched, You can purchased
                                  Token with Etherum, Bitcoin or Litecoin. You
                                  can also tempor incididunt ut labore et dolore
                                  magna aliqua sed do eiusmod eaque ipsa.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="accordion-item accordion-item-s3 animated"
                            data-animate="fadeInUp"
                            data-delay="0.7"
                          >
                            <h5
                              className="accordion-title accordion-title-sm collapsed"
                              data-toggle="collapse"
                              data-target="#acc-4-4"
                            >
                              How do I benefit from the ICO Token?{' '}
                              <span className="accordion-icon" />
                            </h5>
                            <div
                              id="acc-4-4"
                              className="collapse"
                              data-parent="#acc-4"
                            >
                              <div className="accordion-content">
                                <p>
                                  Once ICO period is launched, You can purchased
                                  Token with Etherum, Bitcoin or Litecoin. You
                                  can also tempor incididunt ut labore et dolore
                                  magna aliqua sed do eiusmod eaque ipsa.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* .block @e */}
            </div>
          </section>
          {/* // */}
        <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
