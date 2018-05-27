import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import CallToAction from './blocks/Call To Action.js';

class VisorEnterprise extends React.Component {
  render() {
    return (
      <section className="cta" id="visorEnterprise">
        <div className="cta-content">
          <div className="container">
            <h2>RAYS Enterprise<br/>the future tech behind your industry</h2>
            <a href="#contact" className="btn btn-outline btn-xl js-scroll-trigger">Find out more</a>
          </div>
        </div>
        <div className="overlay"></div>
      </section>
    )
  }
}


module.exports = VisorEnterprise;
