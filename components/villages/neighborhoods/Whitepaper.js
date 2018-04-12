import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import Laptop from './blocks/houses/Laptop.js';
import SectionDescription from './blocks/Section Description.js';

class Whitepaper extends React.Component {
  render() {
    return (
      <section className="whitepaper bg-primary text-center" id="whitepaper">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <h2 className="section-heading">Download Visor's Whitepaper</h2>
              <p>Download the latest version of the Visor Whitepaper for detailed information.</p>
              <a href="" className="btn btn-outline btn-xl js-scroll-trigger">
                <span className="align-middle">Download Whitepaper </span>
                <i className="fa fa-download fa-2x align-middle" />
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}


module.exports = Whitepaper;
