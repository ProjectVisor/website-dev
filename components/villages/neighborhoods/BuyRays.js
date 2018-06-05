import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import CallToAction from './blocks/Call To Action.js';

class BuyRays extends React.Component {
  render() {
    return (
      <section className="cta buy_rays_bg" id="buyRays">
        <div className="cta-content">
          <div className="container">
            <h2>Private and Pre Sale information is coming soon</h2>
            <a href="#" className="btn btn-outline btn-xl js-scroll-trigger">Coming Up Soon</a>
          </div>
        </div>
        <div className="overlay"></div>
      </section>
    )
  }
}


module.exports = BuyRays;
