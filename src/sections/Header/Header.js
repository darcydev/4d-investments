import React from 'react';
import styled from 'styled-components';

import NavBar from '../../components/Navigation/NavBar';
import SimpleButton from '../../components/UI/Buttons/SimpleButton';

export default function Header() {
  return (
    <header
      className="nk-header page-header is-transparent is-sticky is-dark"
      id="header"
      style={{ backgroundColor: '#000010' }}
    >
      <NavBar />
      <div className="banner banner-fs tc-light">
        <div className="nk-block nk-block-sm nk-block-header my-auto">
          <div className="container container-xxl pt-5">
            <div className="row align-items-center justify-content-center justify-content-lg-between gutter-vr-30px">
              <div className="col-lg-6 order-lg-last">
                <div className="banner-gfx banner-gfx-auto">
                  <img src="images/azalea/gfx-e.png" alt="header" />
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 col-sm-10 text-center text-lg-left">
                <div className="banner-caption">
                  <HeroTitle>4D Investments</HeroTitle>
                  <h4 className="lead">insert some nice intro text here!</h4>
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

const HeroTitle = styled.h1`
  font-size: 55px;
`;
