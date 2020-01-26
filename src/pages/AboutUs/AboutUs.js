import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SectionHeading from '../../components/DataDisplay/Headings/SectionHeading';
import InnerSectionHeading from '../../components/DataDisplay/Headings/InnerSectionHeading';
import SimpleButton from '../../components/UI/Buttons/SimpleButton';
import NavBar from '../../components/Navigation/NavBar';

import Header from '../../sections/Header/Header';

export default function AboutUs() {
  return (
    <main className="nk-pages tc-light">
      <Header hero={false} />
      <section>
        <Content className="container">
          <SectionHeading heading="About Us" />
          <p>
            Main purpose of establishing this company was to deliver our own
            vision with the needed services form Crypto Currency and Blockchain
            industry to everyone’s use, who’s our use case solution considers.
            We are surrounded by knowledge, experience, support, contacts and
            passionate of the revolutionary Block Chain and Crypto Currency
            industry.
            <br />
            <br />
            With us you can be sure we provide you up to date information. We
            continuously look for upgrades, news, price charts and much more. We
            put all our effort to finish our already started use case, after
            that, it’s when we start look for professionals to full fill the
            team. We have covered up some big names in crypto space including
            developers, traders who’s seriously interested about the crypto
            industry we also use talented freelancers.
            <br />
            <br />
            We do not do any investment management either OTC deals.
          </p>
          <LinkContainer>
            <Link to="/">
              <SimpleButton type="danger" text="Back to Home" />
            </Link>
          </LinkContainer>
        </Content>
      </section>
    </main>
  );
}

const Content = styled.section`
  justify-content: center;
  padding-top: 60px;
`;

const LinkContainer = styled.div`
  text-align: center;
  padding: 20px;
`;
