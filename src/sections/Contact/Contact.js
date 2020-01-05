import React from 'react';
import { Form, Row, Col, Icon } from 'antd';
import { FaDiscord } from 'react-icons/fa';

import SectionHeading from '../../components/DataDisplay/Headings/SectionHeading';
import ContactForm from '../../components/DataEntry/Forms/ContactForm';
import SimpleList from '../../components/DataDisplay/Lists/SimpleList';

import { CONTACT_DETAILS } from '../../data/CompanyInfo';

export default function Contact() {
  const WrappedContactForm = Form.create({ name: 'horizontal_contact' })(
    ContactForm
  );

  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionHeading
          heading="Contact us"
          subHeading="We are always open and we welcome and questions you have for
                    our team. If you wish to get in touch, please fill out the
                    form below. Someone from our team will get back to you
                    shortly."
        />
        <Row className="flex-container-lg">
          <Col lg={10} md={24}>
            <WrappedContactForm />
          </Col>
          <Col lg={14} md={24}>
            <div
              className="nk-block-contact nk-block-contact-s1 animated"
              data-animate="fadeInUp"
              data-delay="0.1"
            >
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
                    icon: <em className="contact-icon fab fa-discord" />,
                    content: 'Join us on Discord'
                  }
                ]}
              />
              <div className="nk-circle-animation nk-df-center white small" />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
