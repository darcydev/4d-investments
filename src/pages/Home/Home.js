import React from 'react';
import { Layout } from 'antd';

import EcoSystem from '../../sections/EcoSystem/EcoSystem';
import Consultancy from '../../sections/Consultancy/Consultancy';
import Platform from '../../sections/Platform/Platform';
import Solutions from '../../sections/Solutions/Solutions';
import TokenSale from '../../sections/TokenSale/TokenSale';
import Roadmap from '../../sections/Roadmap/Roadmap';
import Team from '../../sections/Team/Team';
import Documents from '../../sections/Documents/Documents';
import Contact from '../../sections/Contact/Contact';
import Header from '../../sections/Header/Header';
import FAQs from '../../sections/FAQs/FAQs';
import Press from '../../sections/Press/Press';

export default function Home() {
  return (
    <main className="nk-pages">
      <Header />
      <EcoSystem />
      <Consultancy />
      <Platform />
      <Solutions />
      <TokenSale />
      <Roadmap />
      <Team />
      <Documents />
      {/* <Press /> */}
      <FAQs />
      <Contact />
    </main>
  );
}
