import React from 'react';
import { Route, Switch } from 'react-router-dom';

import 'antd/dist/antd.css';

import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Error from './pages/Error/Error';

import Footer from './sections/Footer/Footer';

import PreLoader from './components/display/PreLoader/PreLoader';
import InvestmentsLogo from './components/Logos/InvestmentsLogo';

// data
import { NAV_BAR_LINKS } from './data/NavLinks';
import { NAME, YEAR, NUMBER, ABOUT, CONTACT_DETAILS } from './data/CompanyInfo';

export default function App() {
  return (
    <div className="App">
      <PreLoader />
      <div className="nk-wrap">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={Error} />
        </Switch>
        <Footer
          companyName={NAME}
          companyYear={YEAR}
          navLinks={NAV_BAR_LINKS}
          logo={<InvestmentsLogo />}
          aboutCompanyText={ABOUT}
          contactDetails={CONTACT_DETAILS}
        />
      </div>
    </div>
  );
}
