import React from 'react';
import { Form } from 'antd';

import SectionHeading from '../../components/DataDisplay/Headings/SectionHeading';
import ContactForm from '../../components/DataEntry/Forms/ContactForm';

export default function Contact() {
  const WrappedContactForm = Form.create({ name: 'horizontal_contact' })(
    ContactForm
  );

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="nk-block nk-block-about">
          <div className="ant-form">
            <div className="row justify-content-between align-items-center gutter-vr-50px">
              <div className="col-lg-6">
                <div className="nk-block-text">
                  <SectionHeading
                    heading="Contact us"
                    subHeading="We are always open and we welcome and questions you have for
                    our team. If you wish to get in touch, please fill out the
                    form below. Someone from our team will get back to you
                    shortly."
                  />
                  <WrappedContactForm />
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-between align-items-center gutter-vr-50px">
            <div className="col-lg-5 text-center order-lg-first">
              <div
                className="nk-block-contact nk-block-contact-s1  animated"
                data-animate="fadeInUp"
                data-delay="0.1"
              >
                <ul className="contact-list">
                  <li
                    className="animated"
                    data-animate="fadeInUp"
                    data-delay="0.2"
                  >
                    <em className="contact-icon fas fa-phone" />
                    <div className="contact-text">
                      <span>+44 0123 4567</span>
                    </div>
                  </li>
                  <li
                    className="animated"
                    data-animate="fadeInUp"
                    data-delay="0.3"
                  >
                    <em className="contact-icon fas fa-envelope" />
                    <div className="contact-text">
                      <span>info@company.com</span>
                    </div>
                  </li>
                  <li
                    className="animated"
                    data-animate="fadeInUp"
                    data-delay="0.4"
                  >
                    <em className="contact-icon fas fa-paper-plane" />
                    <div className="contact-text">
                      <span>Join us on Telegram</span>
                    </div>
                  </li>
                </ul>
                <div className="nk-circle-animation nk-df-center white small" />
                {/* .circle-animation */}
              </div>
              <ul
                className="social-links social-links-s2 justify-content-center animated"
                data-animate="fadeInUp"
                data-delay="0.6"
              >
                <li>
                  <a href="#">
                    <em className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <em className="fab fa-medium-m" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <em className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <em className="fab fa-youtube" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <em className="fab fa-bitcoin" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <em className="fab fa-github" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* .block @e */}
      </div>
    </section>
  );
}
