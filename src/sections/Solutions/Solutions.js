import React from 'react';
import styled from 'styled-components';

import SectionHeading from '../../components/DataDisplay/Headings/SectionHeading';
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
              <div className="nk-block-img nk-block-plx">
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
              </div>
              <ButtonContainer>
                <SimpleButton
                  type="danger"
                  text="Enter Exchange"
                  href="https://google.com"
                  customStyleType="big"
                />
              </ButtonContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const ButtonContainer = styled.div``;
