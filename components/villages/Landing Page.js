import React from 'react';
import ReactDOM from 'react-dom';

import Header from './neighborhoods/Header.js';
import Features from './neighborhoods/Features';
import VisorPay from './neighborhoods/VisorPay';
import VisorEnterprise from './neighborhoods/VisorEnterprise';
import Whitepaper from './neighborhoods/Whitepaper';
import Team from './neighborhoods/Team';
import Exchanges from './neighborhoods/Exchanges';
import Social from './neighborhoods/Social';
import Footer from './neighborhoods/Footer';

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-page">
        <Header
          messages={false} title={"Hello world, meet Visor"}
          subtitle={"The future of Privacy, Security & Free Ultra-Fast Transactions"}
          btnLabel={"Learn more about Visor"}
        />
        <Features/>
        <VisorPay/>
        <VisorEnterprise/>
        <Whitepaper/>
        <Team/>
        <Exchanges/>
        <Social/>
      </div>
    )
  }
}

module.exports = LandingPage;
