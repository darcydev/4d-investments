import React from 'react';
import { Icon } from 'antd';

import SectionHeading from '../../components/DataDisplay/Headings/SectionHeading';
import InnerSectionHeading from '../../components/DataDisplay/Headings/InnerSectionHeading';

import SimpleTab from '../../components/UI/Tabs/SimpleTab';
import SimpleList from '../../components/DataDisplay/Lists/SimpleList';

export default function Platform() {
  return (
    <section className="section" id="platform">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-6">
            <SectionHeading
              heading="Our Platform"
              backgroundHeading="Our Platform"
            />
          </div>
        </div>
      </div>
      <div className="container container-xxl">
        <div className="nk-block">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <ul
                className="nav tab-nav tab-nav-btn-bdr-s2 justify-content-center justify-content-sm-between pb-4 pb-sm-5 animated"
                data-animate="fadeInUp"
                data-delay="0.2"
              >
                <li>
                  <a className="active" data-toggle="tab" href="#tab-1-1">
                    FOR Participators
                  </a>
                </li>
                <li className="tab-nav-sap d-none d-sm-block" />
                <li>
                  <a data-toggle="tab" href="#tab-1-2">
                    For Traders
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-content">
            <div className="tab-pane fade show active" id="tab-1-1">
              <div className="row align-items-center justify-content-between gutter-vr-40px">
                <div className="col-lg-6 order-lg-last">
                  <div
                    className="nk-block-img nk-block-ca animated"
                    data-animate="fadeInUp"
                    data-delay="0.2"
                  >
                    <div className="nk-circle-animation nk-df-center fast" />
                    {/* .circle-animation */}
                    <img
                      className="shadow rounded"
                      src="images/app-screens/sc-medium-a.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="nk-block-text mgb-m30">
                    <InnerSectionHeading
                      title="An Open Platform for our Participators"
                      subTitle="Each participator can choose the trader and to sign a contract."
                    />
                    <SimpleList
                      data={[
                        {
                          icon: (
                            <Icon
                              type="star"
                              theme="twoTone"
                              twoToneColor="#52c41a"
                            />
                          ),
                          content: 'Platform Advantage Content #1'
                        },
                        {
                          icon: (
                            <Icon
                              type="star"
                              theme="twoTone"
                              twoToneColor="#52c41a"
                            />
                          ),
                          content: 'Platform Advantage Content #2'
                        }
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="tab-1-2">
              <div className="row align-items-center justify-content-between gutter-vr-40px">
                <div className="col-lg-6 order-lg-last">
                  <div
                    className="nk-block-img nk-block-ca animated"
                    data-animate="fadeInUp"
                    data-delay="0.2"
                  >
                    <div className="nk-circle-animation nk-df-center fast" />
                    {/* .circle-animation */}
                    <img
                      className="shadow rounded"
                      src="images/app-screens/sc-medium-a.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="nk-block-text mgb-m30">
                    <h2
                      className="title title-md animated"
                      data-animate="fadeInUp"
                      data-delay="0.2"
                    >
                      A Open Platform for our Participators
                    </h2>
                    <p
                      className="animated"
                      data-animate="fadeInUp"
                      data-delay="0.2"
                    >
                      Each participator can choose the trader and to sign a
                      contract.
                    </p>
                    <SimpleList />
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
