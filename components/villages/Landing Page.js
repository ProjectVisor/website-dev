import React from 'react';
import ReactDOM from 'react-dom';

import Header from './neighborhoods/Header.js';
import Features from './neighborhoods/About';
import VisorPay from './neighborhoods/BuyRays';
import VisorEnterprise from './neighborhoods/VisorEnterprise';
import Whitepaper from './neighborhoods/Whitepaper';
import Skymap from './neighborhoods/Skymap';
import Team from './neighborhoods/Team';
import Exchanges from './neighborhoods/Exchanges';
import Wallet from './neighborhoods/Wallet';
import Social from './neighborhoods/Social';
import RoadMap from './neighborhoods/RoadMap';

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-page">
        <Header
          messages={false} title={"Hello world, meet RAYS"}
          subtitle={"The future of Privacy, Security & Ultra-Fast Transactions"}
          btnLabel={"Learn more about RAYS"}
        />
        <Features/>
          <RoadMap/>
        <VisorPay/>
        <VisorEnterprise/>
        <Skymap/>
        <Whitepaper/>
        <Team/>
        <Exchanges/>
        <Wallet/>
        <Social />
      </div>
    )
  }
}

module.exports = LandingPage;
