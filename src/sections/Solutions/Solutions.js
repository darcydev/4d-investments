import React from 'react';
import { List, Icon } from 'antd';

import SectionHeading from '../../components/display/Headings/SectionHeading';
import SolutionItem from './SolutionItem';
import SimpleButton from '../../components/UI/Buttons/SimpleButton';

export default function Solutions() {
  return (
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
                  alt="sc-medium"
                />
                <img
                  className="nk-block-img-plx plx-circle plx-circle-s1"
                  src="images/gfx/circle-a.png"
                  alt="circle"
                />
              </div>
            </div>
            <div className="col-xxl-5 col-xl-6 col-lg-8">
              <div className="nk-block-text">
                <SolutionItem />
                <SolutionItem />
                <SolutionItem />
                <SolutionItem />
                <SolutionItem />
                <SimpleButton
                  type="danger"
                  text="Enter Exchange"
                  href="https://google.com"
                  styles={{
                    color: 'white',
                    textTransform: 'uppercase'
                  }}
                />
                <SimpleButton
                  type="danger"
                  text="Enter Platform"
                  href="https://google.com"
                  styles={{
                    color: 'white',
                    textTransform: 'uppercase'
                  }}
                  classes="btn btn-round btn-primary"
                />
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
  );
}
