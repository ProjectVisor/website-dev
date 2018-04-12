import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import CallToAction from './blocks/Call To Action.js';

class Social extends React.Component {
  render() {
    return (
      <section className="contact bg-primary" id="social">
        <div className="container">
          <h2>
            Join our amazing community
            <i className="fa fa-heart"/>
          </h2>
          <ul className="list-inline list-social">
            <li className="list-inline-item social-twitter">
              <a href="#">
                <i className="fa fa-twitter"/>
              </a>
            </li>
            <li className="list-inline-item social-facebook">
              <a href="#">
                <i className="fa fa-facebook"/>
              </a>
            </li>
            <li className="list-inline-item social-google-plus">
              <a href="#">
                <i className="fa fa-google-plus"/>
              </a>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}


module.exports = Social;
