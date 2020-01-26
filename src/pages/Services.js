import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SectionHeading from '../components/DataDisplay/Headings/SectionHeading';
import SimpleButton from '../components/UI/Buttons/SimpleButton';
import NavBar from '../components/Navigation/NavBar';

export default function AboutUs() {
  return (
    <main className="nk-pages tc-light">
      <header>
        <NavBar />
      </header>
      <section>
        <Content>
          <SectionHeading heading="Services" />
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

const Content = styled.div`
  justify-content: center;
  padding-top: 60px;
`;

const LinkContainer = styled.div`
  text-align: center;
  padding: 20px;
`;
