import React from 'react';
import styled from 'styled-components';
import { Form, Row, Col, Icon } from 'antd';
import { FaDiscord } from 'react-icons/fa';

import SectionHeading from '../../components/DataDisplay/Headings/SectionHeading';
import ContactForm from '../../components/DataEntry/Forms/ContactForm';
import SimpleList from '../../components/DataDisplay/Lists/SimpleList';

export default function Contact() {
  const WrappedContactForm = Form.create({ name: 'horizontal_contact' })(
    ContactForm
  );

  return (
    <Section className="section" id="contact">
      <Container className="container">
        <SectionHeading
          heading="Contact us"
          subHeading="You can get in touch with us for multiple purposes. We can cover up completely everything that: If it's suitable for you, it's for you."
        />
        <Row className="flex-container-lg">
          <Col lg={10} md={24}>
            <WrappedContactForm />
          </Col>
          <Col lg={14} md={24}>
            <div className="nk-block-contact nk-block-contact-s1">
              <SimpleList
                data={[
                  {
                    icon: <em className="contact-icon fas fa-phone" />,
                    content: '+123 456 789'
                  },
                  {
                    icon: <em className="contact-icon fas fa-envelope" />,
                    content: 'info@4dinvestments.org'
                  },
                  {
                    icon: (
                      <a href="https://discord.gg/VTkyGx3" target="_blank">
                        {DISCORD}
                      </a>
                    ),
                    content: 'Join us on Discord'
                  }
                ]}
              />
              <div
                className="nk-circle-animation nk-df-center white small"
                style={{ zIndex: -1 }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

const Section = styled.section``;

const Container = styled.div``;

// CONTENT
const DISCORD = <em className="contact-icon fab fa-discord" />;
