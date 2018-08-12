import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import CallToAction from './blocks/Call To Action.js';

class Wallet extends React.Component {
  render() {
    return (
      <section className="cta" id="wallet">
        <div className="cta-content">
          <div className="container">
            <h2>RAYS 3S Wallet </h2><h2>(Safe, Secure and Smart)</h2>
            <a target="_blank" href="wallet.rays.network" className="btn btn-outline btn-xl js-scroll-trigger">Download PDF</a>
          </div>
        </div>
        <div className="overlay"></div>
      </section>
    )
  }
}


module.exports = Wallet;
