import React from 'react';
import { Row, Col, Typography, Icon, Statistic } from 'antd';

import SectionHeading from '../../components/DataDisplay/Headings/SectionHeading';
import InnerSectionHeading from '../../components/DataDisplay/Headings/InnerSectionHeading';
import SimpleList from '../../components/DataDisplay/Lists/SimpleList';

import { SALES_AMOUNTS, SUPPLY_AMOUNTS } from '../../data/TokenData';

export default function TokenSale() {
  const SUPPLY_MARKUP = Object.keys(SALES_AMOUNTS).map(v => (
    <Statistic key={v} title={v} value={SALES_AMOUNTS[v].amount} />
  ));

  const SALES_MARKUP = Object.keys(SUPPLY_AMOUNTS).map(v => (
    <Statistic key={v} title={v} value={SUPPLY_AMOUNTS[v]} />
  ));

  return (
    <section className="section" id="tokensale">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-6">
            <SectionHeading heading="DINT" subHeading="Investment Token" />
          </div>
        </div>
      </div>
      <div className="container">
        <Row
          type="flex"
          justify="center"
          gutter={10}
          style={{ textAlign: 'center' }}
        >
          <Col span={8} xs={12}>
            <InnerSectionHeading title="Tokes Sold" />
            {SUPPLY_MARKUP}
          </Col>
          <Col span={8} xs={12}>
            <InnerSectionHeading title="ICO Pricing" />
            {SALES_MARKUP}
          </Col>
        </Row>
        <Row type="flex">
          <Col span={12}>INSERT DATA GRAPH</Col>
          <Col span={12}>
            <SimpleList data={LIST_MARKUP} />
          </Col>
        </Row>
      </div>
    </section>
  );
}

// CONTENT
const ICON_MARKUP = <Icon type="check-circle" />;

const LIST_MARKUP = [
  {
    icon: ICON_MARKUP,
    content: 'ERC-20 Token'
  },
  {
    icon: ICON_MARKUP,
    content: 'Built on the Ethereum Network'
  },
  {
    title: 'Original Exchange',
    icon: ICON_MARKUP,
    content: 'trade.4DMarkets.com'
  },
  {
    icon: ICON_MARKUP,
    content: 'Proof of Work (POW) Model'
  },
  {
    icon: ICON_MARKUP,
    content: 'Smart Contract technology'
  },
  {
    icon: ICON_MARKUP,
    content: 'Decentralized technology'
  }
];
