import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { Row, Col, Icon } from 'antd';

import SectionHeading from '../../components/DataDisplay/Headings/SectionHeading';
import SimpleButton from '../../components/UI/Buttons/SimpleButton';
import SimpleList from '../../components/DataDisplay/Lists/SimpleList';

export default function Solutions() {
  return (
    <section className="section" id="mvp">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-6">
            <SectionHeading
              heading="4DMarkets"
              subHeading="Offering Top and Useful Assets, Only & Always with Low Fees"
            />
          </div>
        </div>
      </div>
      <div className="container container-xxl">
        <div className="nk-block">
          <div className="row align-items-center justify-content-center justify-content-xl-between gutter-vr-30px">
            <Row>
              <Col span={12}>
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
              </Col>
              <Col span={12}>
                <SimpleList data={LIST_CONTENT} />
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <SimpleButton text="Reflink" />
              </Col>
              <Col span={12}>
                <SimpleButton text="T&Cs" />
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <SimpleButton text="Trading Pairs" />
              </Col>
              <Col span={12}>
                <SimpleButton
                  text="Exchange"
                  href="https://trade.4dmarkets.com"
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
}

// STYLES
const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;

  ${media.lessThan('small')`
    flex-direction: column;
    margin: auto;
    max-width: 75%;
  `}
`;

const ButtonContainer = styled.div``;

// CONTENT
const ICON_MARKUP = <Icon type="check-circle" />;

const BUTTONS_CONTENT = [
  { text: 'Enter Exchange', href: 'https://trade.4dmarkets.com' }
];

const LIST_CONTENT = [
  {
    title: 'Decentralized technology',
    content: 'More secure and safe trading & exchanging'
  },
  {
    title: 'Launch your crypto project',
    content: 'We can take care from a-to-z of your project'
  },
  { title: 'Listing rules', content: 'Is probably the most strict but cheap' },
  { title: 'Number 4', content: 'Number 4 content' },
  { title: 'Trading fees', content: 'Always or less' },
  { content: 'Maker Fee 0.1%' },
  { content: 'Taker Fee 0.09%' }
];
