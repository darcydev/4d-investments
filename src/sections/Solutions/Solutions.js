import React, { useState } from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { Row, Col, Icon, Modal, Button, Typography } from 'antd';

import SectionHeading from '../../components/DataDisplay/Headings/SectionHeading';
import SimpleButton from '../../components/UI/Buttons/SimpleButton';
import SimpleList from '../../components/DataDisplay/Lists/SimpleList';

import ButtonRow from '../ButtonRow';

const { Text } = Typography;

export default function Solutions() {
  const [pairsModalOpen, togglePairsModal] = useState(false);
  const [termsModalOpen, toggleTermsModal] = useState(false);
  const [reflinkModalOpen, toggleReflinkModal] = useState(false);

  const handlePairsModal = () => togglePairsModal(!pairsModalOpen);
  const handleTermsModal = () => toggleTermsModal(!termsModalOpen);
  const handleReflinkModal = () => toggleReflinkModal(!reflinkModalOpen);

  const TRADING_PAIRS_MODAL = (
    <Modal
      title="Trading Pairs"
      visible={pairsModalOpen}
      onOk={handlePairsModal}
      onCancel={handlePairsModal}
    >
      <Text>COPY FROM 4DMARKETS.COM</Text>
    </Modal>
  );

  const TERMS_MODAL = (
    <Modal
      title="Terms and Conditions"
      visible={termsModalOpen}
      onOk={handleTermsModal}
      onCancel={handleTermsModal}
    >
      <Text>COPY FROM 4DMARKETS.COM</Text>
    </Modal>
  );

  const REFLINK_MODAL = (
    <Modal
      title="Reflink"
      visible={reflinkModalOpen}
      onOk={handleReflinkModal}
      onCancel={handleReflinkModal}
    >
      <Text>
        Using this referral link, you agree that the Discord community choses,
        where to use the collected referral trading fees, it’s our community’s
        benefit.
      </Text>
    </Modal>
  );

  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          heading="4DMarkets"
          subHeading="Offering Top and Useful Assets, Only & Always with Low Fees"
        />
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
        <Row>
          <Col span={24}>
            <ButtonRow
              content={[
                <SimpleButton
                  text="Trading Pairs"
                  type="danger"
                  customStyleType="big"
                  onClick={handlePairsModal}
                />,
                <SimpleButton
                  text="Terms and Conditions"
                  type="danger"
                  customStyleType="big"
                  onClick={handleTermsModal}
                />,
                <SimpleButton
                  text="Exchange"
                  type="danger"
                  customStyleType="big"
                  href="https://trade.4dmarkets.com"
                />,
                <SimpleButton
                  text="Refink"
                  type="danger"
                  customStyleType="big"
                  onClick={handleReflinkModal}
                />
              ]}
            />
          </Col>
          {TRADING_PAIRS_MODAL}
          {TERMS_MODAL}
          {REFLINK_MODAL}
        </Row>
      </div>
    </section>
  );
}

// STYLES

// CONTENT
const ICON_MARKUP = <Icon type="check-circle" />;

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
