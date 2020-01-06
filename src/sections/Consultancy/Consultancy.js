import React from 'react';
import styled from 'styled-components';

import SectionHeading from '../../components/DataDisplay/Headings/SectionHeading';
import SimpleList from '../../components/DataDisplay/Lists/SimpleList';

export default function Consultancy() {
  return (
    <section>
      <div className="container">
        <SectionHeading
          heading="4D Consultancy"
          backgroundHeading="consultancy"
          subHeading="All Bills for raising Revenue shall originate in the House of Representatives may be made prior to the Duties of the"
        />
        <Content className="row">
          <ImageContainer className="col-lg-6">
            <img src="/images/lavender/gfx-x-light.png" alt="consultancy" />
          </ImageContainer>
          <SimpleList />
        </Content>
      </div>
    </section>
  );
}

const Content = styled.div`
  justify-content: center;
`;
const ImageContainer = styled.div`
  max-width: 400px;
`;
