import React from 'react';
import styled from 'styled-components';
import { Typography, Row, Col } from 'antd';

import NavBar from '../../components/Navigation/NavBar';
import SimpleButton from '../../components/UI/Buttons/SimpleButton';

const { Title } = Typography;

export default function Header({ hero = true }) {
  const HERO_MARKUP = hero ? HERO_CONTENT : null;

  return (
    <HeaderContainer
      className="nk-header page-header is-transparent is-sticky is-dark"
      id="header"
    >
      <NavBar />
      {HERO_MARKUP}
    </HeaderContainer>
  );
}

// STYLES

const HeaderContainer = styled.header`
  background: var(--bg-dark);
`;

const ButtonContainer = styled.div`
  color: white;
  text-transform: uppercase;
  font-family: Quicksand;
  padding: 7px;
  letter-spacing: 0.5px;
  height: 100%;
`;

const Heading = styled(Title)`
  color: var(--txt-white) !important;
`;

const SubHeading = styled(Title)`
  color: var(--txt-white) !important;
`;

// CONTENT
const HERO_CONTENT = (
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
              <Heading level={1}>4D Investments FINLAND OY</Heading>
              <SubHeading level={4}>
                By investing years of time into our unique aim, we are able to
                think outside the box in blockchain.
                <br />
                <br />
                Hello Tomorrow, For Businesses A Transparency.
              </SubHeading>
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
);
