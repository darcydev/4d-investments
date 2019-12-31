import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SectionHeading from '../../components/display/Headings/SectionHeading';
import InvestmentsLogo from '../../components/display/Logos/InvestmentsLogo';
import SimpleButton from '../../components/UI/Buttons/SimpleButton';
import Title from '../../components/display/Headings/Title';

export default function Error() {
  return (
    <Container>
      <div className="nk-wrap ov-h">
        <div className="container">
          <main className="nk-pages nk-pages-centered tc-light px-0 text-center">
            <header className="pt-5">
              <InvestmentsLogo />
            </header>
            <div className="my-auto py-5">
              <div className="row justify-content-center">
                <div className="col-xl-6 col-md-7 col-sm-9">
                  <div className="position-relative">
                    <SectionHeading heading="Page Not Found" />
                    <Title
                      title="Oops!"
                      subTitle="We are very sorry for inconvenience. It looks like you’re
                      try to access a page that either has been deleted or never
                      existed."
                    />
                    <Link to="/">
                      <SimpleButton type="danger" text="Back to Home" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div className="nk-ovm shape-i ov-h" />
      </div>
    </Container>
  );
}

const Container = styled.div``;
