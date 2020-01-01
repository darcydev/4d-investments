import React from 'react';
import styled from 'styled-components';

import NavBar from '../../components/nav/NavBar/NavBar';
import SimpleButton from '../../components/UI/Buttons/SimpleButton';

export default function Header() {
  return (
    <header
      className="nk-header page-header is-transparent is-sticky is-dark"
      id="header"
    >
      <NavBar />
      <div className="banner banner-fs tc-light">
        <div className="nk-block nk-block-sm nk-block-header my-auto">
          <div className="container container-xxl pt-5">
            <div className="row align-items-center justify-content-center justify-content-lg-between gutter-vr-30px">
              <div className="col-lg-6 order-lg-last">
                <div
                  className="banner-gfx banner-gfx-auto animated"
                  data-animate="fadeInUp"
                  data-delay=".7"
                >
                  <img src="images/azalea/gfx-e.png" alt="header" />
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 col-sm-10 text-center text-lg-left">
                <div className="banner-caption">
                  <h1
                    className="title title-lg ttu animated"
                    data-animate="fadeInUp"
                    data-delay=".8"
                  >
                    4D Investments
                  </h1>
                  <p
                    className="lead animated"
                    data-animate="fadeInUp"
                    data-delay=".9"
                  >
                    by which it shall not be diminished during their Continuance
                    in Office.
                  </p>
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
        </div>
      </div>
    </header>
  );
}

const ButtonContainer = styled.div`
  color: white;
  text-transform: uppercase;
  font-family: Quicksand;
  padding: 7px;
  letter-spacing: 0.5px;
  height: 100%;
`;
