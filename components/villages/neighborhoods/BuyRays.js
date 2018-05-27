import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import CallToAction from './blocks/Call To Action.js';

class BuyRays extends React.Component {
  render() {
    return (
      <section className="cta" id="buyRays">
        <div className="cta-content">
          <div className="container">
            <h2>VisorPay allows vendors<br/>to accept XVR > USD, GBP & EUR payments</h2>
            <a href="#contact" className="btn btn-outline btn-xl js-scroll-trigger">Find out more</a>
          </div>
        </div>
        <div className="overlay"></div>
      </section>
    )
  }
}


module.exports = BuyRays;
