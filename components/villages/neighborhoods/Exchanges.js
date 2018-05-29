import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import CallToAction from './blocks/Call To Action.js';

class Exchanges extends React.Component {
  render() {
    return (
      <section className="contact bg-primary" id="exchanges">
        <div className="container">
          <h2>Exchange Information will be Shared after Token Sale</h2>
          <ul className="list-inline list-social">
            <li className="list-inline-item ">
              <a href="#">
                <img src="/img/bitcoin.svg" />
              </a>
            </li>
            <li className="list-inline-item ">
              <a href="#">
                <img src="/img/ethereum.svg" />
              </a>
            </li>
            <li className="list-inline-item ">
              <a href="#">
                <img src="/img/dash.svg" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}


module.exports = Exchanges;
