import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';

import SectionHeading from '../../components/DataDisplay/Headings/SectionHeading';
import SimpleList from '../../components/DataDisplay/Lists/SimpleList';

export default function Consultancy() {
  const ICON_MARKUP = <Icon type="check-circle" />;

  return (
    <section>
      <div className="container">
        <SectionHeading
          heading="4D Investments Finland"
          backgroundHeading="4d investments"
          subHeading="The country for FinTech, by serving our services online, we cover up the problem we have solved, globally."
        />
        <Content className="row">
          <ImageContainer className="col-lg-6">
            <img src="/images/lavender/gfx-x-light.png" alt="consultancy" />
          </ImageContainer>
          <SimpleList
            data={[
              {
                icon: ICON_MARKUP,
                content: 'Company'
              },
              {
                icon: ICON_MARKUP,
                content: 'Legal'
              },
              {
                icon: ICON_MARKUP,
                content: 'Regulations'
              },
              {
                icon: ICON_MARKUP,
                content: 'Include Number 4'
              }
            ]}
          />
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
