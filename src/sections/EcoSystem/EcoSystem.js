import React from 'react';

import SectionHeading from '../../components/DataDisplay/Headings/SectionHeading';
import EcoSystemItem from './EcoSystemItem';

export default function EcoSystem() {
  return (
    <section className="section" id="ecosystems">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-6">
            <SectionHeading
              heading="4D Ecosystem"
              backgroundHeading="4D Ecosystem"
            />
          </div>
        </div>
      </div>
      <div className="container container-xxl">
        <div className="nk-block">
          <div className="row text-center align-items-lg-start gutter-vr-40px">
            <EcoSystemItem
              index={1}
              heading="4D Investments Finland"
              content="Registered company in Finland 4D Investments Finland carries the responsibility of building our Blockchain platform and run it. Partnership with us, is a partnership with the whole ecosystem we are building and developing."
            />
            <EcoSystemItem
              index={2}
              heading="DINT Investment Token"
              content="Worlds first real token that needed to be created to utilize the technology for businesses, we aim for.

For businesses to use our blockchain solution, it does not require you to hold any Crypto Currency. We needed to create the token to build with the technology."
            />
            <EcoSystemItem
              index={3}
              heading="4D Markets"
              content="Registered company in Estonia. A needed, to offer our own Crypto Currency a safe and secure way to exchange it.

We also want to offer the most famous and top assets. We aim to build a real world use Crypto Marketplace. Low fees for trading and listing, high decentralized safe."
            />
            <EcoSystemItem
              index={4}
              heading="Decentralized Application"
              content="Our blockchain solution that will be build, on a decentralized technology to make, businesses truly system transparent."
            />
          </div>
          <div className="bg-image bg-contain bg-bottom-center bg-ecosystems d-none d-sm-block">
            <img src="images/globe-particle.png" alt="globe" />
          </div>
        </div>
      </div>
    </section>
  );
}
