import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SimpleButton from '../../components/UI/Buttons/SimpleButton';
import NavBar from '../../components/Navigation/NavBar';

import Contact from '../../sections/Contact/Contact';

export default function ContactUs() {
  return (
    <main className="nk-pages tc-light">
      <header>
        <NavBar />
      </header>
      <Content>
        <Contact />
        <LinkContainer>
          <Link to="/">
            <SimpleButton type="danger" text="Back to Home" />
          </Link>
        </LinkContainer>
      </Content>
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
