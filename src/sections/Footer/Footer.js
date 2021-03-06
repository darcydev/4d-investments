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
  registration = [
    {
      name: '4D Investments Ltd',
      location: 'Seychelles',
      number: '202804'
    },
    {
      name: '4D Investments Finland Oy',
      location: 'Finland',
      number: '3101015-6'
    }
  ],
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

  const REGISTRATION_MARKUP = registration.map((v, i) => (
    <li
      key={`${i}: ${v.number}`}
      style={{ padding: '2px 0' }}
    >{`${v.name} (${v.location}) #${v.number}`}</li>
  ));

  return (
    <Container id={id} className={classes}>
      <Row gutter={[0, 24]}>
        <Col md={10} sm={24}>
          <ColHeading>{companyName}</ColHeading>
          <h6>© {companyYear}</h6>
          <ListContainer>{REGISTRATION_MARKUP}</ListContainer>
          <LogoContainer>{logo}</LogoContainer>
        </Col>
        <Col md={6} sm={12}>
          <SimpleList light={true} data={contactDetails} />
        </Col>
        <Col md={8} sm={24}>
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
  background-color: #000010;
  padding-top: 30px;

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
const ListContainer = styled.div`
  color: #697a95;
  list-style: none;
  padding: 10px 0;
`;

const ColHeading = styled.h5`
  color: white;
`;

const Text = styled.p``;
