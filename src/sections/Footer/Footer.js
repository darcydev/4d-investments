import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { Icon, Row, Col } from 'antd';
import { FaMapMarkerAlt, FaEnvelope, FaFacebookSquare } from 'react-icons/fa';

import SimpleList from '../../components/DataDisplay/Lists/SimpleList';
import SimpleButton from '../../components/UI/Buttons/SimpleButton';

export default function Footer({
  id = undefined,
  classes = undefined,
  navLinks = [
    {
      title: 'About Us',
      link: 'https://google.com'
    },
    { title: 'More About Us', link: 'https://google.com' }
  ],
  logo = <Icon type="smile" theme="twoTone" />,
  companyName = 'Fake Company Name',
  companyYear = '2019',
  companyRegistration = '123456789 Seychelles',
  aboutCompanyText = 'Cillum qui non laborum laboris',
  contactDetails = [
    {
      icon: <Icon type="phone" theme="twoTone" />,
      content: '+123 456 789'
    },
    {
      icon: <Icon type="mail" theme="twoTone" />,
      content: 'fake@gmail.com'
    },
    {
      icon: <Icon type="compass" theme="twoTone" />,
      content: '123 Fake Street, Fakeville Fakecountry'
    }
  ]
}) {
  const NAV_LINKS_MARKUP = navLinks.map(v => (
    <SimpleButton type="link" text={v.title} href={v.link} />
  ));

  const CONTACT_LIST_MARKUP = <SimpleList data={contactDetails} />;

  return (
    <Container id={id} className={`section ${classes}`}>
      <Row gutter={[0, 24]}>
        <Col span={8}>
          <ColHeading>{companyName}</ColHeading>
          <h6>© {companyYear}</h6>
          <Text>{companyRegistration}</Text>
          <LogoContainer>{logo}</LogoContainer>
        </Col>
        <Col span={8}>
          <ListContainer>{CONTACT_LIST_MARKUP}</ListContainer>
        </Col>
        <Col span={8}>
          <ColHeading>About the company</ColHeading>
          <Text>{aboutCompanyText}</Text>
        </Col>
      </Row>
      <Row>
        <Col span={24}>{NAV_LINKS_MARKUP}</Col>
      </Row>
    </Container>
  );
}

const Container = styled.footer`
  text-align: center;
  color: white;

  h6 {
    color: white;
  }

  .ant-list-item-meta-description {
    font-size: 14px;
  }

  ${media.lessThan('medium')`
    .ant-row {
      display: flex;
      flex-direction: column;
      align-items: center;

      .ant-col-8 {
        width: 66%;
      }
    }
  `}
`;

const LogoContainer = styled.div``;
const ListContainer = styled.div``;

const ColHeading = styled.h5`
  color: white;
`;

const Text = styled.p`
  color: #697a95;
`;
