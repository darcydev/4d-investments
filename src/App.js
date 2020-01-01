import React from 'react';
import { Route, Switch } from 'react-router-dom';

import 'antd/dist/antd.css';

import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Error from './pages/Error/Error';

import Footer from './components/nav/Footer/Footer';
import PreLoader from './components/display/PreLoader/PreLoader';

export default function App() {
  return (
    <div className="App">
      <PreLoader />
      <div className="nk-wrap">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </div>
    </div>
  );
}
