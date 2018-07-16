import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import Nav from './blocks/houses/Nav.js';

class Footer extends React.Component {
  render() {
    return (
      <section className="footer">
          <div className="container footer-div">
              All Copyrights Reserved  - RAYS Network Ltd. (UK)<br />
              <a href="rays-terms-n-conditions.pdf">Terms & Conditions</a> |
              <a href="privacy-policy.pdf"> Privacy Policy</a>
          </div>
      </section>
    )
  }
}


module.exports = Footer;
