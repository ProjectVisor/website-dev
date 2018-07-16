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
            <h2>Private and Pre Sale</h2>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScKXICCg9GhShzXwliAVxhxkwJ2n3Ch3ozqcXmdDfgBnnGl4g/viewform" className="btn btn-outline btn-xl js-scroll-trigger"> &nbsp;&nbsp;&nbsp;&nbsp; Buy RAYS &nbsp;&nbsp;&nbsp;&nbsp;</a>
          </div>
        </div>
        <div className="overlay"></div>
      </section>
    )
  }
}


module.exports = BuyRays;
