import React from 'react';
import styled from 'styled-components';
import { Layout, Row, Col, Typography, Icon } from 'antd';

import EcoSystem from '../../sections/EcoSystem/EcoSystem';
import Consultancy from '../../sections/Consultancy/Consultancy';
import Platform from '../../sections/Platform/Platform';
import Solutions from '../../sections/Solutions/Solutions';
import TokenSale from '../../sections/TokenSale/TokenSale';
import Roadmap from '../../sections/Roadmap/Roadmap';
import Team from '../../sections/Team/Team';
import Contact from '../../sections/Contact/Contact';
import Header from '../../sections/Header/Header';
import FAQs from '../../sections/FAQs/FAQs';
import SectionHeading from '../../components/DataDisplay/Headings/SectionHeading';

const { Text } = Typography;

export default function Home() {
  return (
    <main className="nk-pages">
      <Header />
      <EcoSystem />
      <Consultancy />
      <Platform />
      <Solutions />
      <TokenSale />
      <Roadmap />
      <Team />
      <FAQs />
      <section className="section">
        <div className="container">
          <SectionHeading
            heading="Our Main Advantage"
            backgroundHeading="Main Advantage"
          />
          <StyledRow display="flex" justify="center" align="middle">
            <Col md={12} sm={24}>
              "SOME CRAZY GRAPH"
            </Col>
            <Col md={12} sm={24}>
              <Text>
                Will always be our own interest in the industry. Our main
                developer has read and understood more than 50 great crypto
                projects white papers.
                <br />
                <br />
                We are fully loaded with knowledge, experience and supportive
                partners to make it possible to build what our ecosystem
                contains.
                <br />
                <br />
                Our priority has always been the product that's made to a modern
                decentralized technology for businesses.
                <br />
                <br />
                TO make everything successful, we had to start from our
                marketplace, move forward to the token, simply to be able to
                built with the technology.
              </Text>
            </Col>
          </StyledRow>
        </div>
      </section>
      <Contact />
    </main>
  );
}

// STYLES
const StyledRow = styled(Row)`
  text-align: center;
`;
